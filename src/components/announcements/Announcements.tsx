
import AnnouncementCard, { AnnouncementProps } from "./AnnouncementCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnnouncementsProps {
  announcements: AnnouncementProps[];
  limit?: number;
  showViewAll?: boolean;
}

const Announcements = ({ 
  announcements, 
  limit = 3, 
  showViewAll = true 
}: AnnouncementsProps) => {
  const displayedAnnouncements = limit ? announcements.slice(0, limit) : announcements;

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {displayedAnnouncements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
      
      {showViewAll && announcements.length > limit && (
        <div className="text-center">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">
              View all announcements
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Announcements;
