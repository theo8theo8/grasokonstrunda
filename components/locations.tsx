import { Link } from "@nextui-org/react";

interface Location {
  id: number;
  name: string;
  info?: string;
  linkInfo?: JSX.Element;
  artists: Artist[];
  location: string;
  icons?: string[];
}

interface Artist {
  name: string;
  medium: string;
}

export const Locations: Location[] = [
  {
    id: 1,
    name: "Rävsten",
    linkInfo: (
      <h3>
        <span>
          Här finns lunch, fika och glass. Passbåt från Äspskärs brygga måste
          förbokas digitalt{" "}
        </span>
        <Link
          isExternal
          color="secondary"
          href="https://www.upplandsstiftelsen.se/vara-campingarochstugbyar/ravstens-stugby-startsida__5090"
        >
          här!
        </Link>{" "}
      </h3>
    ),
    artists: [
      { name: "Hans Gustafsson", medium: "Akvarell, motorsågsskulpturer" },
      {
        name: "Louise Westerberg",
        medium: "Fårskinn, almanackor, skärgårdsbilder",
      },
    ],
    location: "https://goo.gl/maps/THmgQ7JfKpAgvWT78",
    icons: ["Cutlery"],
  },
  {
    id: 2,
    name: "Idö gård",
    artists: [
      { name: "Anna Karin Boode", medium: "Skulpturer, oljemålningar" },
      {
        name: "Johanna Florenius",
        medium: "Textilt hantverk, väskor, kuddar m.m",
      },
      { name: "Meta Fästh Brunnberg", medium: "Linnekläder, accessoarer" },
      { name: "Solveig Bergholm", medium: "Vindfångare" },
    ],
    location: "https://goo.gl/maps/uFwPJCk2qUd8vcAT9",
  },
  {
    id: 3,
    name: "Bjurön",
    info: "Fika",
    artists: [
      {
        name: "Fredrik Birgegård",
        medium: "Oljemålningar - figurativt med abstrakta inslag",
      },
      { name: "Lars-Erik Birgegård", medium: "Oljemålningar - landskapsmotiv" },
    ],
    location: "https://goo.gl/maps/ssYVNNMEjnke1czJ6",
    icons: ["Kaffekopp"],
  },
  {
    id: 4,
    name: "Högklyke",
    info: "Kaffe med bullar och kylda drycker",
    artists: [
      {
        name: "Elisabeth Lundgren",
        medium: "Fotografi - ögonblick med fåglar, landskap",
      },
    ],
    location: "https://goo.gl/maps/cbMrTjxfyKzteXUc6",
    icons: ["Kaffekopp"],
  },
  {
    id: 5,
    name: "Muskaregrund",
    info: "Fika",
    artists: [
      { name: "Berit Blom", medium: "Handarbeten, stickat och broderat" },
    ],
    location: "https://goo.gl/maps/d2S5YdbuXtX3yjXH7",
    icons: ["Kaffekopp"],
  },
  {
    id: 6,
    name: "Sundsborg samlingssalen",
    info: "Catwalk måndag 10/7 12:00 om vädret tillåter",
    artists: [
      {
        name: "Christina Aplemark",
        medium: "Kläder",
      },
      {
        name: "Marie Koslin",
        medium: "Akryl - mixed media",
      },
    ],
    location: "https://goo.gl/maps/DjkGfWf6pZjKzYLV6",
  },
  {
    id: 7,
    name: "Sundsborg 27",
    info: "Fika",
    artists: [
      {
        name: "Eva Sjöstedt Meshesha",
        medium: 'Pärlplattor - "Vägen tillbaka"',
      },
    ],
    location: "https://goo.gl/maps/56yPn5LrMcu6n5gm6",
    icons: ["Kaffekopp"],
  },
  {
    id: 8,
    name: "Gräsö Camping, Restaurang Doppingen",
    info: "Fika, mat, glass, bad m.m. Här finns handikapptoalett",
    artists: [
      {
        name: "Gunilla Skoglund",
        medium: "Oljemåleri",
      },
      {
        name: "Ann-Charlotte Lindström",
        medium: "Måleri - hav och strand",
      },
    ],
    location: "https://goo.gl/maps/7b9LRD8vCvYBujSAA",
    icons: ["Cutlery"],
  },
  {
    id: 9,
    name: "Nötsveden IP",
    info: "Fika. Musik som dyker upp när man minst anar det",
    artists: [
      { name: "Björn Andersson", medium: "Akvarell" },
      { name: "Åsa Gröndal", medium: "Akrylmålningar" },
      { name: "Helena Hörner", medium: "Stickat" },
      { name: "Jessica Hörner", medium: "Canvasfoto från närområdet" },
      { name: "Evy Tydal", medium: "Trasmattor - dubbelbindning" },
      { name: "Lilian Wickholm", medium: "Akryl, akvarell" },
    ],
    location: "https://goo.gl/maps/4AshcRSBxSBzNFsi6",
    icons: ["Kaffekopp", "Guitar"],
  },
  {
    id: 10,
    name: "Nötsveden",
    artists: [
      {
        name: "Sören Lindström",
        medium: "Trähantverk svepteknik, luffarslöjd, svarvat",
      },
    ],
    location: "https://goo.gl/maps/o6wsAeViFcSDaoRm9",
  },
  {
    id: 11,
    name: "Västerbyn",
    artists: [{ name: "Gunilla Andersson", medium: "Oljemålningar" }],
    location: "https://goo.gl/maps/YeXDH5zhWGoFJMHFA",
  },
  {
    id: 12,
    name: "Baklä",
    artists: [{ name: "Birgitta Lejman", medium: "Keramik" }],
    location: "https://goo.gl/maps/HuMMebH7PXtJt3t49A",
  },
  {
    id: 13,
    name: "Väster Mörtarö Studio 838",
    artists: [
      {
        name: "Martin Lima de Faria",
        medium:
          "Autogram(självbiografiska kalligram), Small People Big Plans(fotokonst med miniatyrer)",
      },
      {
        name: "Maud Karlsson Lima de Faria",
        medium: '"Med ögon känsliga för grönt"',
      },
    ],
    location: "https://goo.gl/maps/1z3mAyJtLyRG3YpY6",
  },
  {
    id: 14,
    name: "Anders Matsgården",
    info: "Fika, glass.",
    artists: [
      {
        name: "Emmanuelle Strand Jean",
        medium: "Fil de fer(järntrådsfigurer), målningar, foton",
      },
      { name: "Staffan Strand", medium: "Bronsskulpturer" },
      {
        name: "Grävlings Naturprodukter",
        medium: "Naturnära hantverk tillverkat på Gräsö",
      },
    ],
    location: "https://goo.gl/maps/LG7KWRDiEGQofrGo8",
    icons: ["Kaffekopp"],
  },
  {
    id: 15,
    name: "Sjöäng",
    artists: [
      { name: "Kerstin Sjöblom", medium: "Akvarell, akryl, olja" },
      { name: "Thomas Håkansson", medium: "Fotografier" },
    ],
    location: "https://goo.gl/maps/LiEVQ5TTFabDpBBMA",
  },
  {
    id: 16,
    name: "Norrboda Bygdegård",
    info: "Fika och smörgåsar. Här finns handikapptoalett",
    artists: [
      { name: "Sonja Lindberg", medium: "Akvarell" },
      { name: "Anders Keyser", medium: "Naturfoto på stora canvastavlor" },
      {
        name: "Monica Ohlsson",
        medium: "Gott och blandat, personliga fotografier",
      },
      { name: "Thomas Olofsson", medium: "Knivmakare" },
      { name: "Irene Wåhlin", medium: "Tavlor/akryl och konsthantverk" },
      { name: "Eva Rengren", medium: "Stickat;" },
      {
        name: "Östen Andersson",
        medium: 'Har sin bok "Det fria folket" till försäljning',
      },
    ],
    location: "https://goo.gl/maps/NFZZjPXa5Ne9Kh7dA",
    icons: ["Cutlery"],
  },
  {
    id: 17,
    name: "Västerhamnen Norrboda",
    artists: [
      {
        name: "Elin Lindqvist, Festfint",
        medium: '"Mina ängder gröna", dukningskonst och blomsterinstallationer',
      },
    ],
    location: "https://goo.gl/maps/ZPd9SeAAhAbwpW288",
  },
  {
    id: 18,
    name: "Norrboda 405 - Runes båtbyggeri",
    artists: [{ name: "Per Joelsson", medium: "Oljemålningar" }],
    location: "https://goo.gl/maps/ZdFmPQTzAu2wGQ6z6",
  },
  {
    id: 19,
    name: "Lökäng",
    info: "Musik måndag, tisdag och fredag klockan 12:30, lördag klockan 12.00",
    artists: [
      {
        name: "Eleonore Holmgren Uppsalaförfattare",
        medium:
          'Pratar om sin nya bok "Arvet efter Britta" måndag 10/7 klockan 15:00',
      },
      {
        name: "Hans-åke Lerin",
        medium: 'Fotografier, rörliga bilder, ny fotobok "Bildminnen"',
      },
      { name: "Sanne Vils", medium: "Waldorfdockor, silver, änglar" },
      { name: "Kyll Hellberg", medium: "Waldorfdockor, änglar" },
      {
        name: "Ulla Gerbrand",
        medium: "Måleri - blandteknik, akryl, olja och grafik",
      },
      {
        name: "Jon Gerbrand",
        medium:
          "Lampor - renoverat, återbruk och nytänk av vackra saker som kastats bort",
      },
      { name: "Margit Martens", medium: "Keramik" },
    ],
    location: "https://goo.gl/maps/DJtN7XHNAKJxs4W58",
    icons: ["Guitar"],
  },
  {
    id: 20,
    name: "Ängstorpet Norrboda",
    artists: [{ name: "Roland Kallström", medium: "Konst och hantverk" }],
    location: "https://goo.gl/maps/cfyK2UGcRbymJiFF8",
  },
];
