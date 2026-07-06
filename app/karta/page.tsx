"use client";
import { useEffect, useMemo, useState } from "react";
import { Link } from "@heroui/link";
import MapInfo from "@/components/mapInfo";
import { Locations } from "@/components/locations";
import mapImageSrc from "./mapImage";

const MAP_BASE_WIDTH = 6722;
const MAP_BASE_HEIGHT = 11547;

export default function Home() {
  const [showInfo, setShowInfo] = useState<number | undefined>(undefined);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hotspots = useMemo(
    () =>
      Locations.map((location) => {
        const [x1, y1, x2, y2] = location.coords;
        const left = Math.min(x1, x2);
        const top = Math.min(y1, y2);
        const right = Math.max(x1, x2);
        const bottom = Math.max(y1, y2);

        return {
          id: location.id,
          label: location.id.toString(),
          left,
          top,
          width: right - left,
          height: bottom - top,
        };
      }),
    []
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const updateMedia = () => {
      setIsMobile((current) => (current === media.matches ? current : media.matches));
      setShowTutorial(media.matches);
    };

    updateMedia();
    media.addEventListener("change", updateMedia);
    return () => media.removeEventListener("change", updateMedia);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row md:items-center lg:justify-center md:gap-6 lg:gap-14 px-3 sm:px-4 lg:px-0">
      <div className="w-full lg:w-[420px] xl:w-[450px] 2xl:w-[500px]">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <img
            src={mapImageSrc}
            alt="Karta över Gräsö konstrunda"
            className="block h-auto w-full select-none"
            draggable={false}
            loading="eager"
          />
          <div className="absolute inset-0">
            {hotspots.map((hotspot) => {
              const left = (hotspot.left / MAP_BASE_WIDTH) * 100;
              const top = (hotspot.top / MAP_BASE_HEIGHT) * 100;
              const width = (hotspot.width / MAP_BASE_WIDTH) * 100;
              const height = (hotspot.height / MAP_BASE_HEIGHT) * 100;

              return (
                <button
                  key={hotspot.id}
                  type="button"
                  aria-label={`Visa information om plats ${hotspot.label}`}
                  onClick={() => setShowInfo(hotspot.id)}
                  className="absolute rounded-md p-0 m-0 bg-transparent border-0 text-transparent transition-colors duration-150 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                  }}
                >
                  <span className="sr-only">{hotspot.label}</span>
                </button>
              );
            })}
          </div>
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
