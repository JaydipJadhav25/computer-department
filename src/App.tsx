import './App.css'
import {Route , Routes , BrowserRouter} from "react-router-dom"
import { AuthProvider } from './components/contexts/AuthContext'
import Index from './pages/Index'








// Routes component wrapped with AuthProvider
const AppRouter = () =>{
  return (
    <Routes>
    <Route path='/' element={<Index/>} />
 </Routes>
  )
}




function App() {

 

  return (
    <>
    <AuthProvider>
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
