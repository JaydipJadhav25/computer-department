
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";
import { Lock, LogIn } from "lucide-react";
// import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner"
import {useForm} from "react-hook-form"
import useAuth from "@/components/contexts/useAuth";




const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const { toast } = useToast();
  const { login } = useAuth();

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Simple hardcoded authentication for demo
  //   // In a real app, this would connect to a backend service
  //   if (username === "admin" && password === "admin123") {
  //     setTimeout(() => {
  //       // Use the auth context login function instead of directly manipulating localStorage
  //       login(username, "admin");
        
  //       toast({
  //         title: "Login successful",
  //         description: "Welcome back, Admin!",
  //       });
        
  //       navigate("/admin");
  //       setIsLoading(false);
  //     }, 1000);
  //   } else {
  //     setTimeout(() => {
  //       toast({
  //         variant: "destructive",
  //         title: "Login failed",
  //         description: "Invalid username or password",
  //       });
  //       setIsLoading(false);
  //     }, 1000);
  //   }
  // };

  // interface Admin{
  //   username :string;
  //   password : string;
  // }

  type FormData = {
  username: string;
  password: string;
};

  /////////use react hook form///////////////////
  const { register, handleSubmit  , formState : {errors , isValid } ,  } = useForm<FormData>();


  console.log("is Valide : " , isValid , isLoading);


  const  handleLogin =(date :any)=>{
    console.log("data is  : ", date)
      setIsLoading(true);
       // Simple hardcoded authentication for demo
      // In a real app, this would connect to a backend service
         if (date.username === "admin" && date.password === "admin@123") {
      setTimeout(() => {
        // Use the auth context login function instead of directly manipulating localStorage
        login(date.username, "admin");
        
        toast("Login successful", {
          description: "Welcome back, Admin!",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          style : {
            backgroundColor : "gray",
            color : "green"
          }
        });
       
        navigate("/admin");
        setIsLoading(false);
      }, 1000);
    }else{
      setTimeout(()=>{
       toast("Login failed",  {
          description: "Invalid username or password",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        setIsLoading(false);
      } , 1000);
    }
   

  }

  console.log("error : " , errors);



  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access the admin panel
          </p>
        </CardHeader>
        <CardContent>
          <form  className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username"
                placeholder="admin"
                {...register("username" , {
                 required : "username is requirde!" ,
                 minLength :{
                  value :3 ,
                   message: "Username must be at least 3 characters",
                 },
                  maxLength: {
              value: 6,
              message: "Username cannot exceed 6 characters",
            },
                })}
              />
              {errors.username && <p className="text-red-600 text-sm">{String(errors.username.message)}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                 {...register("password" , {
                  required : "password is requirde!",
                  minLength :{
                    value :5 ,
                     message: "Password must be at least 5 characters",
                  },
              maxLength: {
              value: 10,
              message: "Password cannot exceed 10 characters",
            },
              pattern: {
              value: /^(?=.*[!@#$%^&*])/,
              message: "Password must contain at least one special character",
            },
                 })}
              />  
              {errors.password && <p className="text-red-600 text-sm">{String(errors.password.message)}</p>}

            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Logging in...
                </span>
              ) : (
                <>
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </span>
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-t p-4 text-center text-sm text-muted-foreground">
          This is a secure area. Unauthorized access is prohibited.
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
