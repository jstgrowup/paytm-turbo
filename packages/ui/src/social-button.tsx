import React from "react";

interface SocialButtonProps {
  iconSrc: string;
  altText: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  iconSrc,
  altText,
}) => {
  return (
    <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
      <img className="h-5 w-5" src={iconSrc} alt={altText} />
    </div>
  );
};
