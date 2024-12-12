"use client";

import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from '@/utils/tailwind-cn' 

// Define button styles using cva
const buttonStyles = cva(
  "ml-4 px-3 py-1 text-sm rounded-md transition-colors",
  {
    variants: {
      state: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        loading: "bg-gray-300 text-gray-600",
        success: "bg-green-500 text-white",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

const PostButton = ({ availabilityId }: { availabilityId: string }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePost = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ availabilityId }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePost}
      disabled={loading}
      className={cn(
        buttonStyles({ state: loading ? "loading" : success ? "success" : "default" })
      )}
    >
      {loading ? "Processing..." : success ? "Posted!" : "Post"}
    </button>
  );
};

export default PostButton;
