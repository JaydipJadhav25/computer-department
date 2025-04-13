import './App.css'
import { Button } from "@/components/ui/button"
import useThemeToggle from './hook/useThemeToggle'

function App() {
  const {theme , setTheme} = useThemeToggle();
  console.log("current theme : " , theme);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button
      className='m-4'
      onClick={()=>{
            setTheme("dark")
      }}
      >dark</Button>
            <Button
      onClick={()=>{

            setTheme("light")
      }}
      >light</Button>
    </div>
  )
}

export default App
