
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold gradient-text">CESA</h3>
            <p className="text-sm text-muted-foreground">
             Computer Engineering Student Association
              <br />
              Computer Department
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-sm hover:text-primary transition-colors">Events</a></li>
              <li><a href="/members" className="text-sm hover:text-primary transition-colors">Members</a></li>
              <li><a href="/announcements" className="text-sm hover:text-primary transition-colors">Announcements</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <p className="text-sm">Email: cesa@college.edu</p>
            <p className="text-sm">Room: Computer Department, 3rd Floor</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          © {currentYear} CESA Committee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
