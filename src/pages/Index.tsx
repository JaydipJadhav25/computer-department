import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import ShowcaseSection from "@/components/home/ShowcaseSection"
import Testimonials from "@/components/home/Testimonials"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col"> 
    <Navbar/>
    <main>
       <Hero/>
       <ShowcaseSection/>
       <Features/>
       <Testimonials/>
    </main>
    <Footer/>
     </div>
  )
}
