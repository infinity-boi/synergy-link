import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
    const { authUser } =  useAuthContext();
    console.log(authUser.createdAt);
    console.log(authUser.username);
    console.log(authUser.password);
    console.log(authUser.position);
    console.log(authUser.personalityType);
    console.log(authUser.fullName);
    
  return (
      <div className="flex items-center justify-center w-full h-full md:min-w-[450px] flex flex-col">
        <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-blue-500 ring-2 ring-blue-300 ring-offset-2" />
            <img
              className="mx-auto h-auto w-full rounded-full"
              src={authUser.profilePic}
              alt=""
            />
          </div>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            {authUser.fullName}
          </h1>
          <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
            {authUser.position}
          </h3>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li className="flex items-center py-3 text-sm">
              <span>Personality Type</span>
              <span className="ml-auto">
                <span className="rounded-full bg-blue-200 py-1 px-2 text-xs font-medium text-blue-700">
                  {authUser.personalityType}
                </span>
              </span>
            </li>
            <li className="flex items-center py-3 text-sm">
              <span>Joined On &nbsp;</span>
              
              <span className="ml-auto">
                 {new Date(authUser.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
              </span>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Profile;
