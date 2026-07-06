import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Location, Locations } from "./locations";

const CardHeaderContent = ({ location }: { location: Location }) => (
  <>
    <h2 className="text-lg lg:text-3xl font-bold">
      {location?.id}. {location?.name}
    </h2>
    {location?.info && (
      <h3 className="text-xs lg:text-base">{location?.info}</h3>
    )}
    {location?.linkInfo && (
      <h4 className="text-xs lg:text-base">{location?.linkInfo}</h4>
    )}
  </>
);

const CardFooterContent = () => (
  <>
    <svg
      className="text-xl lg:text-2xl"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4.01 4.01a1 1 0 0 1-1.4 0l-4.01-4.01a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
    </svg>
    <p className="text-sm lg:text-base">Ladda ned kartan!</p>
  </>
);

type MapInfoProps = {
  showInfo: number | undefined;
  className?: string;
};

const MapInfo = ({ showInfo, className }: MapInfoProps) => {
  const emptyCardBase = "bg-primary-100 m-2 lg:m-0 lg:w-[700px] h-fit";
  const infoCardBase =
    "bg-primary-100 m-2 lg:m-0 md:w-[700px] h-fit md:justify-end";
  const emptyCardClassName = className
    ? `${emptyCardBase} ${className}`
    : emptyCardBase;
  const infoCardClassName = className
    ? `${infoCardBase} ${className}`
    : infoCardBase;

  if (!showInfo) {
    return (
      <Card className={emptyCardClassName}>
        <CardBody className="p-4 lg:p-6">
          <p className="font-bold text-base lg:text-xl">
            Klicka på en av siffrorna för att se mer information!
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="p-4 lg:p-6">
          <Link
            color="foreground"
            href="/Flyer_2026.pdf"
            className="gap-2"
            download
          >
            <CardFooterContent />
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const location = Locations.find((loc) => loc.id === showInfo);

  return (
    <Card className={infoCardClassName}>
      <CardHeader className="p-4 lg:p-6 flex-row justify-between items-start gap-3 pr-12">
        <div className="flex-col max-w-60 lg:max-w-full">
          {location && <CardHeaderContent location={location} />}
        </div>
        {location?.icons && (
          <div className="flex-shrink-0 flex-row flex gap-1 lg:gap-2">
            {location?.icons.map((icon, index) => (
              <Image
                key={index}
                src={`/${icon}.svg`}
                alt={icon}
                radius="lg"
                className="w-10 lg:w-16 flex-shrink-0"
              />
            ))}
          </div>
        )}
      </CardHeader>
      <Divider />
      <CardBody className="p-4 lg:p-6 flex-col space-y-1 lg:space-y-4">
        {location?.artists.map((artist, index) => (
          <div key={index}>
            <span className="text-xs lg:text-base font-bold">
              {artist.name} -{" "}
            </span>
            <span className="text-xs lg:text-base">{artist.medium}</span>
          </div>
        ))}
      </CardBody>
      <Divider />
      <CardFooter className="px-4 lg:px-6 py-4 justify-between">
        <Link
          isExternal
          underline="always"
          showAnchorIcon
          color="secondary"
          href={location?.location}
          className="text-sm lg:text-base"
        >
          Hitta hit!
        </Link>
        <Link
          color="foreground"
          href="/Flyer_2026.pdf"
          className="gap-2"
          download
        >
          <CardFooterContent />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MapInfo;
