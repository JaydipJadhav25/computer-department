
import  { useState } from "react";
import MemberCard, { MemberProps } from "./MemberCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MemberDirectoryProps {
  members: MemberProps[];
  showSearch?: boolean;
}

const MemberDirectory = ({ members, showSearch = true }: MemberDirectoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMembers = members?.filter((member) => {
    const searchContent = `${member.name} ${member.role} ${member.skills?.join(" ")}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {showSearch && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members by name, role, or skills..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      
      {filteredMembers?.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No members found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers?.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MemberDirectory;
