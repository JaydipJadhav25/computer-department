import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";

import {
  Plus,
  Search,
  Calendar,
  MapPin,
  Users,
  Pencil,
  Trash,
  QrCode,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define type for event
interface Event {
  _id: string;
  name: string;
  description: string;
  date: string; // or Date if you parse it
  time: string;
  location: string;
  imgurl: string;
  googlelink: string;
  __v: number;
}


const AdminEvents = () => {
  const [eventData, setEventData] = useState<Event[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    imgurl: "",
    googlelink: "",
  });

  // Fetch all events from backend
  const fetchEvents = async () => {
    try {
      const res = await fetch("https://compute-department-backend.vercel.app/open/events");
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to fetch events");
      setEventData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Failed to load events.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Event created successfully!");
      setOpen(false);
      fetchEvents(); // Refresh list
    } catch (error: any) {
      alert(`Failed to create event: ${error.message}`);
      console.error("Create Event Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents  = eventData.filter(
    (event) =>
      event?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event?.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <AdminLayout currentPage="events">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8"
            />
          </div>
          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredEvents.map((event: any) => (
            <Card key={event._id || event.id} className="p-6 border shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{event.title || event.name}</h3>
                    <Badge
                      variant={
                        event.status === "Upcoming" ? "default" : "secondary"
                      }
                    >
                      {event.status || "Upcoming"}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.registeredCount || 0} / {event.maxCapacity || "?"} registered
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 items-start">
                  <Button variant="outline" size="sm">
                    <QrCode className="mr-2 h-4 w-4" />
                    QR Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Create Event Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Create New Event</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                <Input
                  name="name"
                  placeholder="Event Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <Input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <Input 
                name="imgurl"
                placeholder="Image URL"
                value={formData.imgurl}
                onChange={handleChange}

                />
                
                <Input
                  name="googlelink"
                  placeholder="Google Maps Link"
                  value={formData.googlelink}
                  onChange={handleChange}
                />

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "Creating..." : "Create Event"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </AdminLayout>
  );
};

export default AdminEvents;
