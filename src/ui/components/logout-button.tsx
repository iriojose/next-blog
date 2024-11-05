'use client'


import { signOut } from "next-auth/react";

export default function LogoutButton() {
    const handleLogout = async () => {
        await signOut();
    }

    return(
        <div className="rounded-lg border shadow-lg p-10">
            <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
}