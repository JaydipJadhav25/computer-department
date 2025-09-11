// import './App.css'
import {Route , Routes , BrowserRouter} from "react-router-dom"
import { AuthProvider } from './components/contexts/AuthContext'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Member from './pages/Member'
import Events from './pages/Events'
import Dashboard from './pages/Dashboard'
import { AudioProvider } from './components/contexts/AudioContext';
import {QueryClientProvider , QueryClient} from "@tanstack/react-query"
import Blogs from './components/blogs/Blogs'
import useAuth from './components/contexts/useAuth'
import { ReactNode } from 'react'
import { Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import Login from './pages/Login'
import { AdminPanel } from './pages/Admin'
import { TooltipProvider } from './components/ui/tooltip'
import AdminMembers from './pages/admin/AdminMembers'
import AdminEvents from './pages/admin/AdminEvents'
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminFinancials from './pages/admin/AdminFinancials'


// Protected route component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, role } = useAuth();
  // const token = localStorage.getItem("aces_auth");
  console.log("protected route call....................." ,isAuthenticated ,role);

  if (!isAuthenticated || role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};




const client = new QueryClient();

// Routes component wrapped with AuthProvider
const AppRouter = () =>{

  return (
    <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/members' element={<Member/>} />
    <Route  path='/events' element={<Events/>}/>
    <Route  path='/dashboard' element={<Dashboard/>}/>
    <Route  path='/blogs' element={<Blogs/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='admin' element={
    <ProtectedRoute>
       <AdminPanel/>
    </ProtectedRoute>}/>

     <Route 
        path="/admin/members" 
        element={
          <ProtectedRoute>
            <AdminMembers />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/events" 
        element={
          <ProtectedRoute>
            <AdminEvents />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/announcements" 
        element={
          <ProtectedRoute>
            <AdminAnnouncements />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/financials" 
        element={
          <ProtectedRoute>
            <AdminFinancials/>
          </ProtectedRoute>
        } 
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

    <Route  path='*' element={<NotFound/>}/>
    </Routes>
  )
}




function App() {



  return (
    <>
    <QueryClientProvider client={client}>
    <Toaster/>
    <AudioProvider>
    <AuthProvider>
    <TooltipProvider>
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
    </AudioProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
