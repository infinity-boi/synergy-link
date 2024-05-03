import React, { useState, useEffect } from "react";
// import axios from "axios"; // Assuming you're using Axios for API calls
import { useAuthContext } from "../../context/AuthContext";

const EditProfile = () => {
  const { authUser } = useAuthContext();
  const [profile, setProfile ] = useState(authUser);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const response = await axios.put(`/api/users/${userId}`, profile);
    //   console.log("Profile updated successfully:", response.data);
    //   // Handle successful update (e.g., show success message)
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  useEffect(() => {
    useAuthContext();
  }, [authUser]); // Fetch profile data on component mount or userId change

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading && <p>Loading profile...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {profile && !isLoading && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-2">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled // Disable username editing for security
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bio" className="mb-2">
              Bio:
            </label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 h-20 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="personalityType" className="mb-2">
              Personality Type:
            </label>
            <input
              type="text"
              name="personalityType"
              value={profile.personalityType}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-2">
              Position:
            </label>
            <input
              type="text"
              name="position"
              value={profile.position}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
