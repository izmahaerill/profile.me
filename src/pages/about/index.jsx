import React from "react";
import Layout from "../layouts/layout";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-5xl font-bold leading-9 tracking-tight">About</h1>
          <div className="mt-16">
            <Image
              src="/images/me.jpeg"
              width={200}
              height={200}
              className="rounded-md"
            ></Image>
            <div className="flex flex-col gap-3 py-5">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Muh Haeril Azmi
              </h2>
              <h3 className="font-semibold text-lg text-secondary">
                Web Developer
              </h3>
            </div>
          </div>
          <div></div>
        </div>
      </Layout>
    </>
  );
}
