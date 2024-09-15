import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "./Profile";
import Theme from "./Theme";
import "./Home.css";
import { useState } from "react";
// import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  // const { theme, toggleTheme } = useTheme();

  // const backgroundColor = theme === 'light' ? '#ffffff' : '#333333';
  // const color = theme === 'light' ? '#000000' : '#ffffff';
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const ProfileMessage = () => {
    if (isProfileVisible) return <Profile />;
    else return <MessageContainer />;
  };
  const handleMessageClick = () => {
    setIsProfileVisible(false);
    ProfileMessage();
  };
  const handleProfileClick = () => {
    setIsProfileVisible(true);
    ProfileMessage();
  };
  return (

    <div className="p-4 h-screen flex items-center justify-center">
      {/* <div className="fixed top-4 left-4"><Theme theme={theme} toggleTheme={toggleTheme} /></div> */}
      <div className="main flex  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar/>
        <ProfileMessage />
      </div>
      <div className="btn-bar">
        <div className="flex justify-content-between">
          <button className="btn-upper-corner" onClick={handleMessageClick}>
            <a>Messages</a>
          </button>
          <button className="btn-upper-corner" onClick={handleProfileClick}>
            <a>Profile</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
