"use client";

import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    // <div className="card card-compact w-[460px] shadow-xl bg-base-100 text-center">
    //   <div className="card-body">
    //     <div className="card-title">
    //       <Header label={headerLabel} />
    //     </div>
    //     <div className="card-body">{children}</div>
    //     {showSocial && (
    //       <div className="card-body w-full">
    //         <Social />
    //       </div>
    //     )}
    //     <div className="">
    //       <BackButton href={backButtonHref} label={backButtonLabel} />
    //     </div>
    //   </div>
    // </div>

    <div className="card card-compact w-[460px] shadow-xl bg-base-100 text-center">
      <div className="card-body">
        <div className="card-title">
          <Header label={headerLabel} />
        </div>
      </div>
      <div className="card-body">{children}</div>
      {showSocial && (
        <div className=" w-full">
          <Social />
        </div>
      )}
      <div className="card-body">
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </div>
    </div>
  );
};
