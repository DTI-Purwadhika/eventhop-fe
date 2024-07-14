import Image from "next/image";
import React from "react";

const Profile = () => {
  const user = {
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    bio: "A short bio about John Doe.",
    phone: "123-456-7890",
    website: "https://johndoe.com",
  };

  return (
    <div className="min-h-screen flex">
      <div className="bg-white p-8 rounded-lg  w-full ">
        <h2 className="text-2xl font-bold mb-6 text-left">Profile Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <Image
              src={user.avatar}
              alt="Profile Avatar"
              className="w-40 h-40 rounded-full mb-4"
              width={150}
              height={150}
            />
            <h3 className="text-xl font-semibold">{user.name}</h3>
          </div>

          {/* Information Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="text-lg text-gray-900">{user.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <p className="text-lg text-gray-900">{user.location}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <p className="text-lg text-gray-900">{user.bio}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <p className="text-lg text-gray-900">{user.phone}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <a
                href={user.website}
                className="text-lg text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
