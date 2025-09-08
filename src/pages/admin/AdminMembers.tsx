import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search, Pencil, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    year: "",
    imgurl:"",
  });

  // Fetch members from backend
  const fetchMembers = async () => {
    try {
      const res = await fetch("https://compute-department-backend.vercel.app/open/members");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error("Failed to fetch members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/admin/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add member");

      alert("Member added successfully");
      setFormData({ name: "", email: "", role: "", year: "", imgurl: "" });
      setOpen(false);
      fetchMembers(); // Refresh list
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter((member: any) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout currentPage="members">
      <div className="space-y-6">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8"
            />
          </div>
          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Button>
        </div>

        {/* Members Table */}
        <Card className="border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left font-medium text-muted-foreground">Name</th>
                  <th className="h-10 px-4 text-left font-medium text-muted-foreground">Role</th>
                  <th className="h-10 px-4 text-left font-medium text-muted-foreground">Year</th>
                  <th className="h-10 px-4 text-left font-medium text-muted-foreground">Email</th>
                  <th className="h-10 px-4 text-left font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member: any) => (
                  <tr key={member._id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4">{member.name}</td>
                    <td className="p-4">{member.role}</td>
                    <td className="p-4">{member.year}</td>
                    <td className="p-4">{member.email}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Add Member Modal */}
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-background p-6 rounded-xl max-w-md w-full shadow-lg space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold">Add New Member</h2>
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
              />
              <Input
                name="year"
                placeholder="Year (e.g. Third Year)"
                value={formData.year}
                onChange={handleChange}
              />
              <Input
                name="imgurl"
                placeholder="Image URL"
                value={formData.imgurl}
                onChange={handleChange}
              />
              <Button className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? "Adding..." : "Add Member"}
              </Button>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}


      </div>
    </AdminLayout>
  );
};

export default AdminMembers;
