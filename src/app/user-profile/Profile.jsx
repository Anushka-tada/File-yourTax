"use client";
import "./profile.css";
import React, { useState, useContext } from "react";
import { LoggedDataContext } from "../context/Context"; // Import Context

const Profile = () => {
    const { loggedUserData } = useContext(LoggedDataContext);
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

    if (!loggedUserData) {
        return <div className="loading-div"><p>Loading user data...</p></div>; // Fallback for undefined context
    }

    const handleMenuToggle = () => {
        setShowMenu(!showMenu); // Toggle the visibility of the dropdown menu
    };

    const handleDeleteAccount = () => {
        // Handle delete account logic here (e.g., call an API to delete the account)
        console.log("Delete Account clicked");
      
    };

    return (
        <div div className='page'>
        <div className="user-profile">
            <div className="profile-sections flex flex-wrap lg:flex-nowrap justify-center gap-5 py-16 xl:px-40 lg:px-32 md:px-16 sm:px-7 px-4">
                {/* Section 1: User Info */}
                <div className="profile-section1">
                    <div className="profile-section1-inner bg-white flex flex-col gap-3 items-center justify-center py-7 rounded-md">
                        <div className="circle first-letter">
                            <p className="text-3xl font-semibold text-white">
                                {loggedUserData.firstName.charAt(0).toUpperCase()}
                            </p>
                        </div>
                        <p className="text-lg">{loggedUserData.lastName}</p>
                        <div className="change-pass-btn px-4 py-1 rounded-md">
                            <p className="btn-p">Change Password</p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Profile and Billing Info */}
                <div className="profile-section2 flex flex-col gap-4 w-full">
                    {/* Profile Section */}
                    <div className="profile w-full bg-white shadow-lg flex flex-col gap-5 justify-center p-7 rounded-md">
                        <div className="flex flex-wrap justify-between relative">
                            <div className="flex gap-4 flex-wrap">
                                <h3 className="text-2xl font-bold">My Profile</h3>
                                <div className="edit-btn flex gap-1 px-3 py-1 rounded-md">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3597/3597075.png" alt="" width={15} height={10} />
                                    <div className="edit-p text-sm">Edit</div>
                                </div>
                            </div>

                            {/* Three Dots Menu */}
                            <img
                                src="https://tax2win.in/assets-new/img/new-efiling-dashboard/menu.svg"
                                alt=""
                                className="cursor-pointer three-dot"
                                width={20}
                                onClick={handleMenuToggle}
                            />

                            {/* Dropdown Menu */}
                            {showMenu && (
                                <div className="dropdown-menu absolute right-0 top-10 bg-white shadow-lg rounded-md py-2 px-4 z-10">
                                    <p
                                        className="text-red-600 cursor-pointer"
                                        onClick={handleDeleteAccount}
                                    >
                                        Delete Account
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="w-6/12 flex flex-col gap-4">
                            <div className="flex gap-4 justify-between ">
                                <p className="text-grey">First Name</p>
                                <p>{loggedUserData.firstName}</p>
                            </div>
                            <div className="flex gap-4 justify-between ">
                                <p className="text-grey">Last Name</p>
                                <p>{loggedUserData.lastName}</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="email w-full bg-white flex flex-wrap gap-5 items-center justify-between p-7 rounded-md">
                        <div className="w-6/12">
                            <div className="flex gap-4 justify-between ">
                                <p className="text-grey">Email</p>
                                <p>{loggedUserData.email}</p>
                            </div>
                        </div>
                        <div className="update-btn px-5 py-1 rounded-full flex gap-2">
                            <p className="text-sm update-p">Update</p>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3597/3597075.png"
                                alt=""
                                width={15}
                                height={10}
                            />
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="phone w-full bg-white flex flex-wrap gap-5 items-center justify-between p-7 rounded-md">
                        <div className="w-6/12">
                            <div className="flex gap-4 justify-between ">
                                <p className="text-grey">Mobile no.</p>
                                <p>{loggedUserData.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="update-btn px-5 py-1 rounded-full flex gap-2">
                            <p className="text-sm update-p">Update</p>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3597/3597075.png"
                                alt=""
                                width={15}
                                height={10}
                            />
                        </div>
                    </div>

                    {/* Billing Info Section */}
                    <div className="billing w-full bg-white shadow-lg flex flex-col gap-5 justify-center p-7 rounded-md">
                        <div className="flex gap-4">
                            <h3 className="text-2xl font-bold">Billing Info</h3>
                            <div className="edit-btn flex gap-1 px-3 py-1 rounded-md">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3597/3597075.png"
                                    alt=""
                                    width={15}
                                    height={10}
                                />
                                <div className="edit-p text-sm">Edit</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-grey">Name</p>
                            <p className="text-grey">State</p>
                            <p className="text-grey">Mobile no.</p>
                            <p className="text-grey">Email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
