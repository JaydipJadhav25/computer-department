import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Github, Linkedin } from "lucide-react";

export interface MemberProps {
  id: string;
  name: string;
  role: string;
  imgurl?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  year?: string;
  skills?: string[];
}

const MemberCard = ({ member }: { member: MemberProps }) => {
  const { name, role,  email, github, linkedin, skills, imgurl } = member;
  
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="overflow-hidden hover-scale">
      <CardContent className="p-0">
        <div className="p-6 flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            {imgurl ? (
              <AvatarImage src={imgurl} alt={name} />
            ) : (
              <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{role}</p>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1 justify-center mb-4">
              {skills.slice(0, 3).map((skill, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  +{skills.length - 3}
                </span>
              )}
            </div>
          )}
          
          <div className="flex space-x-3">
            {email && (
              <a 
                href={`mailto:${email}`}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`${name}'s GitHub profile`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
