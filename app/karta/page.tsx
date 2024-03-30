"use client";
import { Metadata } from "next";
import ImageMapper, { CustomArea } from "react-img-mapper";
import { MAP } from "@/components/coords";
import { useState } from "react";
import MapInfo from "@/components/mapInfo";

export default function Home() {
  const [showInfo, setShowInfo] = useState<CustomArea | undefined>(undefined);
  let width = 500;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 426) {
      width = 270;
    } else if (window.innerWidth < 1025) {
      width = 300;
    } else if (window.innerWidth < 1441) {
      width = 350;
    } else if (window.innerWidth < 1921) {
      width = 400;
    }
  }
  return (
    <div className="flex flex-col-reverse lg:flex-row md:items-center lg:justify-center md:gap-6 lg:gap-14">
      <ImageMapper
        responsive={true}
        parentWidth={width}
        imgWidth={451}
        src={"/karta_2023.webp"}
        onClick={(area) => setShowInfo(area)}
        map={MAP}
      />
      <MapInfo showInfo={showInfo} />
    </div>
  );
}
