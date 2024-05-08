import React from "react";
import { Locations, Location } from "./locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CustomArea } from "react-img-mapper";
import {
  Card,
  Divider,
  Link,
  Image,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

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
    <FontAwesomeIcon icon={faFileArrowDown} className="text-xl lg:text-2xl" />
    <p className="text-sm lg:text-base">Ladda ned en pdf av kartan!</p>
  </>
);

const MapInfo = ({ showInfo }: { showInfo: CustomArea | undefined }) => {
  if (!showInfo) {
    return (
      <Card className="bg-primary-100 m-2 lg:m-0 lg:w-[700px] h-fit">
        <CardBody className="p-4 lg:p-6">
          <p className="font-bold text-base lg:text-xl">
            Klicka på en av siffrorna för att se mer information!
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="p-4 lg:p-6">
          <Link
            color="foreground"
            href="/Flyer_2024.pdf"
            className="gap-2"
            download
          >
            <CardFooterContent />
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const location = Locations.find(
    (loc) => loc.id === parseInt(showInfo?.id?.split(".")[0] ?? "", 10)
  );

  return (
    <Card className="bg-primary-100 m-2 lg:m-0 md:w-[700px] h-fit md:justify-end">
      <CardHeader className="p-4 lg:p-6 flex-row justify-between items-start">
        <div className="flex-col max-w-60 lg:max-w-full">
          {location && <CardHeaderContent location={location} />}
        </div>
        {location?.icons && (
          <div className="flex gap-1 lg:gap-2">
            {location?.icons.map((icon, index) => (
              <Image
                key={index}
                src={`/${icon}.svg`}
                alt={icon}
                radius="lg"
                className="w-10 lg:w-16"
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
          href="/Flyer_2024.pdf"
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
