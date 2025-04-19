import './App.css'
import {Route , Routes , BrowserRouter} from "react-router-dom"
import { AuthProvider } from './components/contexts/AuthContext'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Member from './pages/Member'
import Events from './pages/Events'
import Dashboard from './pages/Dashboard'
import { AudioProvider } from './components/contexts/AudioContext';







// Routes component wrapped with AuthProvider
const AppRouter = () =>{
  return (
    <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/members' element={<Member/>} />
    <Route  path='/events' element={<Events/>}/>
    <Route  path='/dashboard' element={<Dashboard/>}/>


    <Route  path='*' element={<NotFound/>}/>
 </Routes>
  )
}




function App() {

 

  return (
    <>
    <AudioProvider>
    <AuthProvider>
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
    </AuthProvider>
    </AudioProvider>
    </>
  )
}

export default App
