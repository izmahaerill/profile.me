import Layout from "../layouts/layout";
import Link from "next/link";
import ExternalLink from "../../../public/icons/external-link";
export default function Endorsements() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold leading-9 tracking-tight">
        Endorsements
      </h1>
      <div>
        <div className="text-xl flex flex-col gap-8 pr-56 py-7 text-zinc-400 ">
          <h2 className="text-start">
            Since you&apos;re here, I invite you to give me endorsement(s) based
            on the experience you had with me in tech. You could also leave a
            comment below.
          </h2>
          <div className="flex flex-col gap-6 outline outline-2 py-20 px-6 rounded-sm outline-zinc-700">
            <div className="flex gap-2 items-center text-white">
              <button className="bg-tersier px-3 py-2 rounded-sm ">
                Sign In
              </button>
              <p className="text-2xl font-extrabold">to give endorsements</p>
            </div>
            <p>
              Your information is only used to display your name and profile
              picture.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16 mt-10">
          <h3 className="text-2xl font-extrabold">Skills</h3>
          <h4 className="text-2xl font-extrabold">Guestbook</h4>
          <div>
            <h5 className="text-sm">
              This page is inspired by{" "}
              <Link href="" className="inline-flex items-center">
                Lee Robinson&apos;s guestbook.
                <span className="ml-1">
                  <ExternalLink />
                </span>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </Layout>
  );
}
