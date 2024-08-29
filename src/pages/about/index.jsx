import React from "react";
import Layout from "../layouts/layout";
import Image from "next/image";
import Email from "../../../public/icons/email";
import Github from "../../../public/icons/github";
import Twitter from "../../../public/icons/twitter";
import Headingyears from "@/components/micro/Headingyears";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Layout>
        <div className="flex gap-20">
          <div className="group">
            <h1 className="text-5xl font-bold leading-9 tracking-tight">
              About
            </h1>
            <div className="mt-16 sticky top-24">
              <div>
                <Image
                  src="/images/me.jpeg"
                  alt="muh haeril azmi"
                  width={500}
                  height={500}
                  className="rounded-md"
                  priority
                ></Image>
              </div>
              <div className="flex flex-col gap-2 py-5">
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  Muh Haeril Azmi
                </h2>
                <h3 className="font-medium text-lg text-secondary dark:text-secondary">
                  Web Developer
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <Link href={"mailto:mazmi6525@gmail.com"}>
                    <Email />
                  </Link>
                  <Link href={"https://github.com/izmahaerill"}>
                    <Github />
                  </Link>
                  <Link href={"https://x.com/Azmiiyaa22"}>
                    <Twitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group overflow-auto -z-50">
            <div className="mt-24 -z-50">
              <h2 className="text-4xl font-bold leading-8 tracking-tigh mb-11">
                About this site
              </h2>
              <div className="flex flex-col gap-10 mb-5">
                <p className="font-normal text-lg text-black dark:text-white ">
                  Welcome to my home on the internet. This site works as a
                  portfolio, a place to share code and thoughts.
                </p>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  Credit
                </h2>
              </div>
              <p className="font-normal text-lg text-black dark:text-white mb-4">
                I learn how to build this site from the community:
              </p>
              <div className="font-normal text-lg text-black dark:text-white ">
                <ul className="list-outside pl-3">
                  <li className="custom-list-item dark:text-white">
                    Timothy&apos;s Next.js and Tailwind CSS template: Template
                    starter where I bootstrapped the project.
                  </li>
                  <li className="custom-list-item dark:text-white">
                    Lee Robinson: Guestbook, Spotify, and many other features.
                  </li>
                </ul>
              </div>
              <h2 className="text-4xl font-bold leading-8 tracking-tigh mt-5 mb-11">
                About me
              </h2>
              <div className="font-normal text-lg text-black dark:text-white">
                <ul className="list-outside pl-3">
                  <li className="custom-list-item dark:text-white">
                    I&apos;m a software engineer with a strong focus on
                    Front-end engineering. My previous works include hybrid
                    mobile development and building Full-stack applications.
                  </li>
                  <li className="custom-list-item dark:text-white">
                    I&apos;m an open-source enthusiast, helping maintain
                    NextAuth.js. I triage issues, help contributors land their
                    PRs, and analyze security vulnerability reports.
                  </li>
                  <li className="custom-list-item dark:text-white">
                    Besides hacking, I enjoy playing board/video games and
                    taking analog photos.
                  </li>
                </ul>
              </div>
              <h3 className="text-xl font-semibold leading-8 tracking-tight mt-10 mb-3">
                Support
              </h3>
              <p className="font-normal text-lg text-black dark:text-white ">
                If you are interested in sponsoring me for my OSS work, please
                consider becoming a sponsor
              </p>
              <h2 className="text-2xl font-bold leading-8 tracking-tight mb-5 mt-10">
                Timeline
              </h2>
              <p className="font-normal text-lg text-black dark:text-white ">
                Here&apos;s a brief timeline of my life events. If you want to
                know more about me as a professional programmer, see my resume.
              </p>
              <Headingyears years="2024" />
              <div className="font-normal text-lg">
                <ul className="list-outside pl-3 text-black dark:text-white">
                  <li className="custom-list-item dark:text-white">
                    Off-site trip with the Auth.js core team in Northern Norway.
                  </li>
                  <li className="custom-list-item dark:text-white">
                    Got promoted to Senior Software Engineer.
                  </li>
                </ul>
              </div>
              <Headingyears years="2023" />
              <div className="font-normal text-lg">
                <ul className="list-outside pl-3 text-black dark:text-white ">
                  <li className="custom-list-item ">
                    Tech live stream with Techie & Dwarves Foundation: Radio
                    Talk #63 - How to manage an Open-source monorepo, featuring
                    Auth.js (the live stream is in Vietnamese).
                  </li>
                  <li className="custom-list-item">
                    Shipped the SvelteKit + Auth.js + Cloudflare example.
                  </li>
                </ul>
              </div>
              <Headingyears years="2022" />

              {/* <div className="font-normal text-lg text-black dark:text-white">
                <ul className="list-outside pl-3 ">
                  <li className="custom-list-item">
                    Joined an innovative Fintech company as a Front-end focused
                    software engineer.
                  </li>
                  <li className="custom-list-item">
                    Became a member of @nextauthjs core.
                  </li>
                  <ul className="list-outside pl-6 ">
                    <li className="custom-list-item">
                      Shipped @auth/sveltekit with the Auth.js team
                    </li>
                    <li className="custom-list-item">
                      First tech live stream to talk about @nextauthjs source
                      code with Sourcegraph.
                    </li>
                    <li className="custom-list-item">
                      Released an article for Tour De Source: How NextAuth.js
                      and common authentication protocols work.
                    </li>
                    <li className="custom-list-item">
                      Contributed to Supabase Launch Week with the Supabase
                      Adapter for NextAuth.js
                    </li>
                  </ul>
                  <li className="custom-list-item">
                    Shipped Notion Personal Finance Tracker Template on Gumroad
                    and ProductHunt. Made enough money for a new 💻.
                  </li>
                </ul>
              </div> */}
              <div className="font-normal text-lg text-black dark:text-white">
                <ul className="list-outside pl-3">
                  <li className="custom-list-item">
                    Joined an innovative Fintech company as a Front-end focused
                    software engineer.
                  </li>
                  <li className="custom-list-item">
                    Became a member of @nextauthjs core.
                  </li>
                  <ul className="list-outside pl-6">
                    <li className="custom-list-item">
                      Shipped @auth/sveltekit with the Auth.js team.
                    </li>
                    <li className="custom-list-item">
                      First tech live stream to talk about @nextauthjs source
                      code with Sourcegraph.
                    </li>
                    <li className="custom-list-item">
                      Released an article for Tour De Source: How NextAuth.js
                      and common authentication protocols work.
                    </li>
                    <li className="custom-list-item">
                      Contributed to Supabase Launch Week with the Supabase
                      Adapter for NextAuth.js.
                    </li>
                  </ul>
                  <li className="custom-list-item">
                    Shipped Notion Personal Finance Tracker Template on Gumroad
                    and ProductHunt. Made enough money for a new 💻.
                  </li>
                </ul>
              </div>

              <Headingyears years="2021" />
              <div className="font-normal text-lg">
                <ul className="list-outside pl-3 text-black dark:text-white">
                  <li className="custom-list-item">
                    Joined Line Corp as a Front-end developer.
                  </li>
                  <li className="custom-list-item">
                    First open-source contribution to the tools I enjoy using:
                    @vercel, @excalidraw, @nextauthjs.
                  </li>
                  <li className="custom-list-item">First blog post.</li>
                </ul>
              </div>
              <Headingyears years="1019" yearsOf=" - 2020" />
              <div className="font-normal text-lg">
                <ul className="list-outside pl-3 text-black dark:text-white">
                  <li className="custom-list-item">
                    Joined mgm technology partners as a Full-stack developer.
                    Shipped the A12 Add-ons on the A12 platform.
                  </li>
                  <li className="custom-list-item">
                    Wrote my first JavaScript code.
                  </li>
                  <li className="custom-list-item">Shipped this site.</li>
                  <li className="custom-list-item">
                    Shipped Bakia as a side gig
                  </li>
                  <li className="custom-list-item">
                    Helped design gameplay for Son Tinh - Thuy Tinh.
                  </li>
                </ul>
              </div>
              <Headingyears years="1017" yearsOf=" - 2018" />
              <div className="font-normal text-lg text-black dark:text-white">
                <ul className="list-outside pl-3 ">
                  <li className="custom-list-item">
                    Got into tech by joining Sioux High Tech Software as a
                    Software Developer.
                  </li>
                  <ul className="list-outside pl-6 ">
                    <li className="custom-list-item">
                      Shipped internal toolings and systems for an industrial
                      microscope monitoring product using C#.
                    </li>
                    <li className="custom-list-item">
                      Shipped Danabus and Góp Ý Đà Nẵng.
                    </li>
                    <li className="custom-list-item">
                      Off-site trip to Eindhoven to visit the Sioux office.
                    </li>
                  </ul>
                  <li className="custom-list-item">
                    Got 7.5 Overall scores on the IELTS test.
                  </li>
                </ul>
              </div>
              <Headingyears years="1014" yearsOf=" - 2017" />
              <div className="font-normal text-lg">
                <ul className="list-outside pl-3 text-black dark:text-white">
                  <li className="custom-list-item">
                    Graduated from Duy Tan University with an SWE
                    bachelor&apos;s degree.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
