"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "@heroui/link";
import ImageMapper, { MapArea } from "react-img-mapper";
import MapInfo from "@/components/mapInfo";
import { Locations } from "@/components/locations";

export default function Home() {
  const [showInfo, setShowInfo] = useState<MapArea | undefined>(undefined);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapWidth, setMapWidth] = useState(0);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = Math.floor(entries[0]?.contentRect.width ?? 0);
      if (nextWidth > 0) {
        setMapWidth((current) => (current === nextWidth ? current : nextWidth));
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(max-width: 1023px)");
    const updateMedia = () => {
      setIsMobile(media.matches);
      setShowTutorial(media.matches);
    };

    updateMedia();
    media.addEventListener("change", updateMedia);
    return () => media.removeEventListener("change", updateMedia);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row md:items-center lg:justify-center md:gap-6 lg:gap-14 px-3 sm:px-4 lg:px-0">
      <div className="w-full lg:w-[420px] xl:w-[450px] 2xl:w-[500px]">
        <div ref={mapContainerRef} className="w-full">
          <ImageMapper
            src={"/Karta_2026.webp"}
            name={"Karta"}
            areas={Locations.map((location) => ({
              id: location.id.toString(),
              coords: location.coords,
              shape: "rect",
              fillColor: "rgba(255, 255, 255, 0.2)",
            }))}
            parentWidth={mapWidth > 0 ? mapWidth : 320}
            imgWidth={451}
            responsive={true}
            onClick={(area) => setShowInfo(area)}
            ref={null}
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <MapInfo showInfo={showInfo} />
      </div>
      {(isMobile && (showInfo || showTutorial)) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 lg:hidden"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setShowInfo(undefined);
            setShowTutorial(false);
          }}
        >
          <div
            className="relative w-full max-w-[720px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Stäng"
              onClick={() => {
                setShowInfo(undefined);
                setShowTutorial(false);
              }}
              className="absolute right-2 top-2 z-50 rounded-full bg-white/90 px-3 py-1 text-lg font-bold text-black shadow hover:bg-white cursor-pointer pointer-events-auto"
            >
              &times;
            </button>
            {showInfo ? (
              <MapInfo showInfo={showInfo} className="m-0 w-full" />
            ) : (
              <div className="rounded-2xl bg-primary-100 p-5 shadow-md">
                <p className="text-base font-bold">
                  Klicka på en av siffrorna för att se mer information!
                </p>
                <Link
                  color="foreground"
                  href="/Flyer_2026.pdf"
                  className="mt-3 inline-flex items-center gap-2 text-sm"
                  download
                >
                  <span aria-hidden="true">&#8595;</span>
                  Ladda ned kartan!
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
