import 'aos/dist/aos.css'; 
import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import JoinSection from "@/components/home/JoinSection"
import ShowcaseSection from "@/components/home/ShowcaseSection"
import Testimonials from "@/components/home/Testimonials"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
// import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
// import DropBeamsWrapper from '@/components/ui/DropBeamsOnly';
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col"> 
    <Navbar/>
    <main>
     {/* <DropBeamsWrapper> */}
       <Hero/>
       <ShowcaseSection/>
       <Features/>
       <Testimonials/>
       <JoinSection/>   
     {/* </DropBeamsWrapper> */}
    </main>
    <Footer/>
     </div>
  )
}
