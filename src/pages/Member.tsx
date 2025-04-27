import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { MemberProps } from "@/components/members/MemberCard";
import { axiosInstance } from "@/config/axiosConfig";
import MemberDirectory from "@/components/members/MemberDirectory";
import { Badge } from "@/components/ui/badge";



const yearOptions = ["FY", "SY", "TY", "Final Year"];

// Utility to normalize year (e.g., "first year" -> "FY")
const normalizeYear = (year: string): string => {
  const lower = year.toLowerCase();
  if (lower.includes("first")) return "FY";
  if (lower.includes("2025")) return "FY";
  if (lower.includes("second")) return "SY";
  if (lower.includes("third")) return "TY";
  if (lower.includes("final")) return "Final Year";
  if (lower.includes("fourth")) return "Final Year";
  return year;
};

// console.log("check : " , normalizeYear("first"));


export default function Member() {

  const [members, setMembers] = useState<MemberProps[]>([]);
  const [yearFilter, setYearFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const fechMembers = async()=>{
      try {
        const response = await axiosInstance("/open/members");
        
        // Normalize year values for consistency
        const normalizes = response.data.map((member : MemberProps)=>({
           ...member  , 
           year: normalizeYear(member.year || "")
        }));
        console.log("response: ", normalizes);
         setMembers(normalizes);
      } catch (error) {
        console.error("Failed to fetch members:", error);
        
      }finally{
        setLoading(false);
      }
    }
   fechMembers();
   },[])

   const filteredMembers = yearFilter
   ? members.filter((member) => member.year === yearFilter)
   : members;






  return (
    <div className="min-h-screen flex flex-col">
        <Navbar/>
          <main className="flex-1">
              <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Members Directory</h1>
            <p className="text-muted-foreground">
              Explore our Computer Department Members.
            </p>
            </div>

            
          {loading ? (
            <p className="text-center">Loading members...</p>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={yearFilter === null ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setYearFilter(null)}
                  >
                    All
                  </Badge>
                  
                  {yearOptions.map((year) => (
                    <Badge
                      key={year}
                      variant={yearFilter === year ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setYearFilter(year)}
                    >
                      {year}
                    </Badge>
                  ))}
                </div>
              </div>

              {filteredMembers.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No members found matching your search.
                </p>
              ) : (

                <MemberDirectory members={filteredMembers} />
                
              )}
            </>
          )}

          </div>
          </main>
          <Footer/>
    </div>
  )
}
