import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import ToggleModeToggle from "../themes/ToggleDarkMode";

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navigation"
      className={`flex flex-col justify-center fixed w-full ${
        scrolled ? "border-b-0.5 border-[#262626]" : ""
      } `}
    >
      <nav
        id="navigation"
        className="flex justify-between items-center py-5 px-72 backdrop-blur-md"
      >
        <div className="flex gap-8 text-lg text-primary font-semibold ">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/endorsements">Endorsements</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <ToggleModeToggle />
        </div>
      </nav>
    </header>
  );
}
