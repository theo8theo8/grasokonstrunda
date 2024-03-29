"use client";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const ImgMapper = dynamic(
  () => {
    return import("@/components/imgMapper");
  },
  { ssr: false }
);

export default function Home() {
  return <ImgMapper />;
}
