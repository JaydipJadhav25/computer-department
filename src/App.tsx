import './App.css'
import { Button } from "@/components/ui/button"
import useThemeToggle from './hook/useThemeToggle'
import { Moon, Sun, Laptop } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


function App() {
  const {theme , setTheme} = useThemeToggle();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon" className="rounded-full">
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Laptop className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4 mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="h-4 w-4 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
  )
}

export default App
