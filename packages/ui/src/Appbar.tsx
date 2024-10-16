"use client";
import { User } from "lucide-react";
interface AppbarProps {
  user?: any;
  onRedirect?: () => void;
  onSignout?: () => void;
}
export const Appbar = ({ user, onRedirect, onSignout }: AppbarProps) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={onRedirect}
          >
            <img
              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg"
              alt="paytm"
              className="w-52"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={user ? onSignout : onRedirect}
              className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-md font-medium px-14 py-3"
            >
              {user ? "Logout" : "Login"}
            </button>

            <div className="ml-3 relative">
              {user && (
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <User className="h-8 w-8 rounded-full" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
