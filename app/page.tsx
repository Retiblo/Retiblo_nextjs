"use client";
import Fan from "@/src/components/animateLogo/summer/Fans";
import devtoolsDetect, { DevToolsEvent } from "devtools-detect";
import { NextRequest, NextResponse } from "next/server";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(devtoolsDetect.isOpen);

  useEffect(() => {
    const handleChange = (event: DevToolsEvent) => {
      setIsDevToolsOpen(event.detail.isOpen);
    };

    window.addEventListener("devtoolschange", handleChange);

    return () => {
      window.removeEventListener("devtoolschange", handleChange);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Fan animate={!isDevToolsOpen} />
    </main>
  );
}
