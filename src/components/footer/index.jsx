import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYears = new Date().getFullYear();

  return (
    <>
      <footer className="mb-10">
        <p className="text-md font-semibold text-secondary">
          All work &copy; {currentYears}{" "}
          <span className="text-primary">Muh Haeril Azmi</span> unless otherwise
          noted.{" "}
          <Link href={""} className="text-primary">
            Source
          </Link>
        </p>
      </footer>
    </>
  );
}
