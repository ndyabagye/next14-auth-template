// import prisma from "@/lib/db";

import { LoginButton } from "@/components/auth/login-button";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  // const landlords = prisma.get;
  return (
    <>
      <main className="hero min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-semibold text-white drop-shadow-md">
              Auth
            </h1>
            <p className="text-white text-lg py-4">{siteConfig.description}</p>
            <LoginButton>
              <button className="btn">Sign In</button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
