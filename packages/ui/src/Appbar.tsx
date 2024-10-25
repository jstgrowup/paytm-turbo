"use client";
import { User } from "lucide-react";
import { useState } from "react";
interface AppbarProps {
  user?: any;
  onRedirect?: () => void;
  onSignout?: () => void;
}
export const Appbar = ({ user, onRedirect, onSignout }: AppbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md border-b-2 border-gray-300">
      <div className="px-4 lg:px-10 md:px-10 flex justify-between h-20">
        <div
          className="flex justify-center items-center cursor-pointer "
          onClick={onRedirect}
        >
          <img
            src="./pay.png"
            alt="paytm"
            className="w-40 h-20 rounded-e-full"
          />
        </div>
        <div className="hidden  sm:flex sm:items-center">
          <button
            onClick={user ? onSignout : onRedirect}
            className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-md font-medium px-14 py-3"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>

        <div className=" relative sm:hidden  flex-col mt-5 ">
          {user && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex text-sm rounded-full "
            >
              <User className="h-8 w-8 rounded-full" />
            </button>
          )}

          {isMenuOpen && (
            <div className="absolute  right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu">
                <button
                  onClick={onSignout}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
