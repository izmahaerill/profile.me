import React from "react";
import Layout from "../layouts/layout";
import Input from "@/components/micro/Input";

export default function Blog() {
  return (
    <>
      <Layout>
        <h1 className="text-5xl font-bold leading-9 tracking-wide">
          All Posts
        </h1>
        <Input />
      </Layout>
    </>
  );
}
