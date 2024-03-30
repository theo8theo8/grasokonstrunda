import { Metadata } from "next";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import Bottombar from "@/components/bottombar";
export const metadata: Metadata = {
  title: "Gräsö konstrunda - Kontakt",
};

export default function Home() {
  return (
    <>
      <Card
        className="max-w-[400px] place-self-center md:bottom-20"
        isFooterBlurred
      >
        <CardHeader className="px-6 pt-4">
          <h1 className="text-2xl md:text-3xl font-bold">Kontaktinformation</h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex items-center gap-2 md:gap-4 py-4 md:py-6">
          <div className="flex gap-2">
            <p className="font-bold">Kyll Hellberg:</p>
            <p>073-914 04 31</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Ulla Gerbrand:</p>
            <p>070-575 59 67</p>
          </div>
          <Link
            isExternal
            color="foreground"
            underline="always"
            href="mailto:info@grasokonstrunda.se"
          >
            {" "}
            info@grasokonstrunda.se
          </Link>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center py-4">
          <Link
            color="secondary"
            isExternal
            showAnchorIcon
            href="https://www.facebook.com/groups/663788286968932/?fref=ts"
          >
            Besök oss på Facebook
          </Link>
        </CardFooter>
      </Card>
      <Bottombar />
    </>
  );
}
