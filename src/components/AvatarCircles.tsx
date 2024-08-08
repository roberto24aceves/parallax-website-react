"use client";

import React from "react";

import { cn } from "../lib/utils";

interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: any;
}

const AvatarCircles = ({
                           numPeople,
                           className,
                           avatarUrls,
                       }: AvatarCirclesProps) => {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            {avatarUrls?.map((item, index) => (
                <img
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                    src={item?.img}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                />
            ))}
            {
                numPeople > 1 &&
                (
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                        href=""
                    >
                        +{numPeople}
                    </a>
                )
            }
        </div>
    );
};

export default AvatarCircles;