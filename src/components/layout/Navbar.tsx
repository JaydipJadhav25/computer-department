import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import Theme from "../ui/Theme";
import useAuth from "../contexts/useAuth";





function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {isAuthenticated , role} = useAuth();


  console.log( "isAuthenticated ",isAuthenticated );

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Members", path: "/members" },
    { title: "Events", path: "/events" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  const handleAdminClick = () => {
    if (isAuthenticated && role === "admin") {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  };



  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Department Logo"
            className="w-12 h-12 object-contain rounded-md"
          />

          <span className="hidden md:inline-block text-sm font-medium">
            Computer Department
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
           <Theme/>

          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Theme/>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            
            {isAuthenticated && role === "admin" && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  handleAdminClick();
                }}
              >
                <User className="h-4 w-4 mr-2" />
                Admin
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar