// components/LoadingLink.js
"use client";
import { useState } from "react";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingLink({ href, children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => setIsLoading(true)}
      className="block"
    >
      {isLoading ? (
        <div className="flex justify-center items-center p-2">
          <CircularProgress size={24} />
        </div>
      ) : (
        children
      )}
    </Link>
  );
}
