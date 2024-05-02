import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Landing from "./pages/landing/Landing";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='app'>
			<Routes>
				<Route index path='/' element={authUser ? <Home/> : <Navigate to='/landing'/>}/>
				<Route path='/home' element={authUser ? <Home /> : <Navigate to='/login' /> } />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/landing' element={<Landing/>}/>                                      v                v नववव
			</Routes>
			<Toaster />
		</div>
	);
}


export default App;
