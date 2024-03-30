import ImageMapper, { CustomArea } from "react-img-mapper";
import { MAP } from "@/components/coords";
import { useState } from "react";
import MapInfo from "@/components/mapInfo";

export default function ImgMapper() {
  const [showInfo, setShowInfo] = useState<CustomArea | undefined>(undefined);
  let width = 500;
  if (window.innerWidth < 426) {
    width = 270;
  } else if (window.innerWidth < 769) {
    width = 285;
  } else if (window.innerWidth < 1025) {
    width = 300;
  } else if (window.innerWidth < 1441) {
    width = 350;
  } else if (window.innerWidth < 1921) {
    width = 400;
  }

  return (
    <>
      <ImageMapper
        responsive={true}
        parentWidth={width}
        imgWidth={451}
        src={"/karta_2023.webp"}
        onClick={(area) => setShowInfo(area)}
        map={MAP}
      />
      <MapInfo showInfo={showInfo} />
    </>
  );
}
