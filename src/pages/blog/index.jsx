import React from "react";
import Layout from "../layouts/layout";
import Input from "@/components/micro/Input";
import datablog from "@/datas/blog.js";

export default function Blog() {
  return (
    <>
      <Layout>
        <h1 className="text-5xl font-bold leading-9 tracking-wide">
          All Posts
        </h1>
        <Input />
        {datablog.map((blogs) => (
          <div key={blogs.id} className="flex items-start py-8 text-secondary">
            <div className="left w-1/4">
              <h4>{blogs.time}</h4>
              <h5 className="text-sm">{blogs.views}</h5>
            </div>
            <div className="right">
              <h1 className="text-3xl font-bold text-white">{blogs.title}</h1>
              <h2 className="text-lg text-tersier">{blogs.subTitle}</h2>
              <h3 className="mt-3">{blogs.information}</h3>
            </div>
          </div>
        ))}
      </Layout>
    </>
  );
}
