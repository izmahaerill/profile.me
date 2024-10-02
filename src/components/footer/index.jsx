import Link from "next/link";
import React from "react";
import ExternalLink from "../../../public/icons/external-link";
import Spotify from "../../../public/icons/spotify";

export default function Footer() {
  const currentYears = new Date().getFullYear();

  return (
    <>
      <footer className="my-10 text-sm leading-7">
        <h1 className="text-base text-zinc-400">
          All work &copy; {currentYears}{" "}
          <span className="text-primary">Muh Haeril Azmi</span> unless otherwise
          noted.{" "}
          <Link href={""} className="text-primary inline-flex items-center">
            Source
            <span className="ml-1">
              <ExternalLink />
            </span>
          </Link>
        </h1>
        <p className="inline-flex items-center">
          <span className="mr-2">
            <Spotify />
          </span>
          Not playing - Spotify
        </p>
      </footer>
    </>
  );
}
