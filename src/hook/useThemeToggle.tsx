import {useState , useEffect} from "react"

type Theme =  "light" | "dark" | "system"
 
function useThemeToggle() {

    //first time or init theme set system
const[theme , setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
);

useEffect(()=>{
    //chnage theme basic on theme para

    const root = window.document.documentElement;
    root.classList.remove("light", "dark"); //remove old class


    if(theme === "system"){

        //check system theme light or dark
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark"  : "light";
        // console.log( "systemTheme : " , systemTheme);
        root.classList.add(systemTheme);
        return
    }

    //else part
      //add theme user selected
    root.classList.add(theme)

},[theme]);


  const setTheme = (newTheme : Theme) =>{
    localStorage.setItem("theme" , newTheme);
    setThemeState(newTheme);
  }


  return { theme , setTheme};
}

export default useThemeToggle