import { axiosInstance } from "@/config/axiosConfig";
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Blog = {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  imgUrl: string;
  tags: string[];
  createdAt: string;
};

type ApiResponse = {
  data: Blog[];
  page: number;
  totalPages: number;
  total : number;
};

const fetchBlogs = async (page: number): Promise<ApiResponse> => {
  const res = await axiosInstance.get(`/open/blogs?page=${page}&limit=3`);
  console.log("data is blogs : " , res.data);
  return res.data;
};


function Blogs() {

  const [page, setPage] = useState(1);

  // const { data, isLoading, isError  } = useQuery({
  //   queryKey: ["blogs", page],
  //   queryFn: () => fetchBlogs(page),
  //   //keepPreviousData: true, //  keeps old data until new loads
  //    placeholderData : keepPreviousData //  keeps old data until new loads
  // });


  const { data, isLoading, isError } = useQuery({
  queryKey: ["blogs", page],
  queryFn: () => fetchBlogs(page),
  placeholderData: keepPreviousData, // 👈 keeps old data until new loads
  gcTime: 1000 * 60 * 10, // 10 minutes in cache before garbage collected
  staleTime: 1000 * 60 * 5, // data is fresh for 5 minutes
});




  return (
    <div className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">

      {isLoading && <p className="text-center text-xs">Loading...</p>}
      {isError && <p className="text-center text-xs text-red-700">Error loading blogs ! check netWork Connections</p>}
      {/* {isFetching && <p className="text-center text-xs">Loading new blogs...</p>} */}

      <div className="max-w-5xl mx-auto py-8 space-y-8">
      {/* Blogs Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {data?.data?.map((blog) => (
        <Card
                    key={blog._id}
                    className="shadow-lg rounded-2xl overflow-hidden flex flex-col 
                              transition-all duration-300 
                              hover:scale-105 hover:border hover:border-primary"
                  >

            {blog.imgUrl && (
              <img
                src={blog.imgUrl}
                alt={blog.title}
                className="w-full h-48 object-cover hover:scale-105"
              />
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold">{blog.title}</CardTitle>
              <p className="text-muted-foreground text-sm">
                By {blog.author} • {new Date(blog.createdAt).toDateString()}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm line-clamp-3">{blog.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 items-center mt-6">
        <Button
          variant="outline"
          size="icon"
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <p className="text-sm text-muted-foreground">
          Page {data?.page} of {data?.totalPages}
        </p>

        <Button
          variant="outline"
          size="icon"
          disabled={page === data?.totalPages}
          onClick={() =>
            setPage((old) =>
              !data?.totalPages ? old : Math.min(old + 1, data.totalPages)
            )
          }
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

    </div>
        </main>
        <Footer/>
   </div>
  )
}

export default Blogs