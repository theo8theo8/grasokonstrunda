"use client";
import ImageMapper, { MapArea } from "react-img-mapper";
import { Locations } from "@/components/locations";
import { useState } from "react";
import MapInfo from "@/components/mapInfo";

export default function Home() {
  const [showInfo, setShowInfo] = useState<MapArea | undefined>(undefined);
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
        src={"/Karta_2025.webp"}
        name={"Karta"}
        areas={Locations.map((location) => ({
          id: location.id.toString(),
          coords: location.coords,
          shape: "rect",
          fillColor: "rgba(255, 255, 255, 0.2)",
        }))}
        parentWidth={width}
        imgWidth={451}
        responsive={true}
        onClick={(area) => setShowInfo(area)}
        ref={null}
      />
      <MapInfo showInfo={showInfo} />
    </div>
  );
}
