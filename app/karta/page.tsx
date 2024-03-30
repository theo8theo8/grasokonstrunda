"use client";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import ImageMapper, { CustomArea } from "react-img-mapper";
import { MAP } from "@/components/coords";
import { useState } from "react";
import MapInfo from "@/components/mapInfo";

/* const ImgMapper = dynamic(
  () => {
    return import("@/components/imgMapper");
  },
  { ssr: false }
); */

export default function Home() {
  const [showInfo, setShowInfo] = useState<CustomArea | undefined>(undefined);
  const [showName, setShowName] = useState<string | undefined>(""); //TODO: Fixa så att namnet visas när man hovrar över en siffra
  let width = 500;
  if (window.innerWidth < 426) {
    width = 270;
  } else if (window.innerWidth < 1025) {
    width = 300;
  } else if (window.innerWidth < 1441) {
    width = 350;
  } else if (window.innerWidth < 1921) {
    width = 400;
  }
  //return <ImgMapper />;
  return (
    <div className="flex items-center justify-center gap-14">
      <div id="map" className={"styles.map"}>
        <ImageMapper
          responsive={true}
          parentWidth={width}
          imgWidth={451}
          src={"/karta_2023.webp"}
          onMouseEnter={(area) => setShowName(area.id)}
          onMouseLeave={() => setShowName("")}
          onClick={(area) => setShowInfo(area)}
          map={MAP}
        />
      </div>
      <div className={"styles.infoBoxContainer"}>
        <MapInfo showInfo={showInfo} />
      </div>
    </div>
  );
}
