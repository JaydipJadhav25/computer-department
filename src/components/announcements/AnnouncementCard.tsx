

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";

export interface AnnouncementProps {
  id: string;
  title: string;
  content: string;
  date: Date;
  category?: "event" | "general" | "important" | "notice";
}

const AnnouncementCard = ({ announcement }: { announcement: AnnouncementProps }) => {
  const { title, content, date, category = "general" } = announcement;
  
  const formattedDate = format(date, "MMM d, yyyy");
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  
  const categoryColors = {
    event: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    general: "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300",
    important: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    notice: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  };
  
  return (
    <Card className="hover-scale">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge 
            variant="outline" 
            className={categoryColors[category]}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span title={formattedDate}>{timeAgo}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{content}</p>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
