import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <header className="flex flex-col justify-center fixed w-full">
      <nav className="flex justify-between items-center py-5 px-72 backdrop-blur-md">
        <div className="flex gap-8 text-lg text-primary font-semibold ">
          <Link href="/">Home</Link>
          <Link href="">Blog</Link>
          <Link href="">Endorsements</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <button>Button</button>
        </div>
      </nav>
    </header>
  );
}
