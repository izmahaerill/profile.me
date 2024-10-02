import Link from "next/link";
import Layout from "./layouts/layout";
import Arrowright from "../../public/icons/arrow-right";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center text-9xl font-bold tracking-tighter mb-12">
          <Link href="" className="text-animation-1">
            Blog.
          </Link>
          <Link href="" className="text-animation-2">
            Showcase.
          </Link>
          <Link href="" className="text-animation-3">
            Portfolio.
          </Link>
        </div>
        <div className="flex flex-col gap-8 mb-16">
          <h1 className="text-5xl font-bold leading-9 tracking-wide">
            Haloo! I&apos;m Azmi
          </h1>
          <div>
            <p className="text-xl font-medium text-zinc-700 dark:text-zinc-400">
              I am a full-stack Web Developer with a strong focus on front-end
              and system design.
            </p>
            <Link
              href={""}
              className="text-tersier font-semibold text-xl flex items-end gap-1 border-b border-b-tersier w-fit"
            >
              Get in touch <Arrowright />
            </Link>
            <h2 className="text-3xl font-bold">Latest blog posts</h2>
          </div>
          <div>
            <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-400 ">
              No recent posts.
            </h3>
            <Link
              href={""}
              className="text-lg font-medium text-tersier flex gap-1 items-center"
            >
              All posts
              <Arrowright />
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
