import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "./Profile";
import './Home.css'
import { useState } from "react";

const Home = () => {
	const [isProfileVisible, setIsProfileVisible ] = useState(false);
	const  ProfileMessage = () => {
		if (isProfileVisible) return <Profile />
		else return <MessageContainer />;
	};
	const handleMessageClick = () => {
		setIsProfileVisible(false);
		ProfileMessage();
	};
	const handleProfileClick = () => {
		setIsProfileVisible(true);
		ProfileMessage();
	}
	return (
		
		<div className="p-4 h-screen flex items-center justify-center">
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<ProfileMessage/>
		</div>
		<div className="btn-bar">
		<div className="flex justify-content-between">
			<button className="btn-upper-corner" onClick={handleMessageClick}><a>Messages</a></button>
			<button className="btn-upper-corner" onClick={handleProfileClick}><a>Profile</a></button>
		</div>
		</div>
		</div>
	);
};
export default Home;
