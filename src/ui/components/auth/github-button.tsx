
"use client";

import { signIn } from "next-auth/react";

export default function GithubSignInButton() {

    const handlerClick = () => {
        signIn("github", { callbackUrl: "/" })
    }

    return (
        <button
            onClick={handlerClick}
            className="flex items-center justify-center w-full py-2 px-4 bg-black/70 text-white font-bold rounded hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
        >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.553 3.3-1.23 3.3-1.23.65 1.653.24 2.873.115 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.215.695.825.575C20.565 21.795 24 17.303 24 12 24 5.373 18.627 0 12 0z"
                  clipRule="evenodd"
                />
            </svg>
            Sign in with GitHub
        </button>
    );
};
