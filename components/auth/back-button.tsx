"use client";

import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <button className="btn btn-link btn-sm font-normal w-full">
      <Link href={href}>{label}</Link>
    </button>
  );
};
