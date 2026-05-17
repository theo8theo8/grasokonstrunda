import { Link } from "@heroui/link";
import { ReactNode } from "react";

export interface Location {
  id: number;
  name: string;
  coords: number[];
  info?: string;
  linkInfo?: ReactNode;
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
    name: "Idö gård",
    coords: [5452, 10778, 5741, 11065],
    artists: [
      { name: "Anna Karin Boode", medium: "Skulptur i stengods, oljemålningar och collage (djur som inte finns bl.a)" },
      {
        name: "Johanna Florenius",
        medium: "Textil design, plantor",
      },
    ],
    location: "https://goo.gl/maps/uFwPJCk2qUd8vcAT9",
  },
  {
    id: 2,
    name: "Bjurön",
    coords: [4831, 10771, 5373, 11056],
    info: "Vi bjuder på fika",
    artists: [
      {
        name: "Fredrik Birgegård",
        medium: "Oljemålningar",
      },
      { name: "Lars-Erik Birgegård", medium: "Oljemålningar" },
    ],
    location: "https://goo.gl/maps/ssYVNNMEjnke1czJ6",
    icons: ["Kaffekopp"],
  },
  {
    id: 3,
    name: "Bjurön",
    coords: [4777, 10414, 5276, 10716],
    info: "Fika",
    artists: [
      {
        name: "Fritjof Karlsson",
        medium: "Akvarellmålningar",
      },
    ],
    location: "https://maps.app.goo.gl/EbrM7m6kGwr7vgfs7",
    icons: ["Kaffekopp"],
  },
  {
    id: 4,
    name: "Högklyke",
    coords: [4299, 8440, 4591, 8740],
    artists: [
      {
        name: "Elisabeth Lundgren",
        medium: "Ögonblick med fåglar, fotografier av fåglar och landskap",
      },
    ],
    location: "https://goo.gl/maps/cbMrTjxfyKzteXUc6",
  },
  {
    id: 5,
    name: "Nötsveden",
    coords: [2820, 7960, 3088, 8244],
    artists: [
      {
        name: "Sören Lindström",
        medium: "Träslöjd, svepteknik, svarvade alster och luffarslöjd",
      },
    ],
    location: "https://goo.gl/maps/o6wsAeViFcSDaoRm9",
  },
  {
    id: 6,
    name: "Oxsten",
    coords:[3155, 7430, 3440, 7715],
    artists: [
      {
        name: "Anders Berndt",
        medium: "Fotografier",
      },
      {
        name: "Susanne Berndt",
        medium: "Quiltade arbeten, textila konstverk, hantverksarbeten såsom väskor, fodral, tehuvor, m.m.",
      }
    ],
    location: "https://maps.app.goo.gl/yYPNwXP31bTiDg3j7",
  },
  {
    id: 7,
    name: "Västerbyn 74 - Naturfantastens gårdsbutik & fik",
    coords: [2376, 8285, 2910, 8579],
    info: "Gårdsbutik, nostalgi-fik, ställplats. Prova på Soma Slow/Soma Move onsdag & lördag kl.14 cirka 1 timme. Medtag yogamatta!",
    artists: [
      { name: "Eva Andersson", medium: "Stickat, tovat/valkat" },
      {
        name: "Meta Fästh Brunnberg",
        medium: "Linnekläder - återbruk, stensmycken",
      },
      {
        name: "Ellinor Nordensten",
        medium: "Foto",
      },
      {
        name: "Johan Brodin",
        medium: "Målar blandade motiv i akryl",
      },
    ],
    location: "https://maps.app.goo.gl/XDohjQVg4piocgfe8",
    icons: ["Kaffekopp"],
  },
  {
    id: 8,
    name: "Hummelbäck",
    coords: [1495, 7375, 1781, 7662],
    artists: [
      {
        name: "Lina Földessy",
        medium: "Akvarellmålningar, metallskulpturer i återvunnet material, träkonsthantverk",
      },
    ],
    location: "https://maps.app.goo.gl/joii9pEcJwuCcmkk8",
  },
  {
    id: 9,
    name: "Klockarboda",
    coords: [1364, 6774, 1650, 7062],
    artists: [
      { name: "Mika Ljungh", medium: "Botaniska illustrationer" },
      { name: "Maud Botéus", medium: "Akvareller" },
    ],
    location: "https://maps.app.goo.gl/e4rGedkHzjjaBHYt9",
  },
  {
    id: 10,
    name: "Baklä",
    coords: [1327, 6238, 1630, 6540],
    artists: [
      { name: "Birgitta Lejman", medium: "Keramik" },
    ],
    location: "https://maps.app.goo.gl/6qB4esAFxdPdnBGBA",
  },
  {
    id: 11,
    name: "Östermörtarö 216",
    coords: [2276,5437, 2570, 5729],
    artists: [
      { name: "Evy Tydal", medium: "Trasmattor i dubbelbindning och några i tvåskaft" },
    ],
    location: "https://maps.app.goo.gl/mkZMq8t8h8invkwV6",
  },
  {
    id: 12,
    name: "Östermörtarö - vid 'Blomsterängen'",
    coords: [2724, 5351, 3030, 5654],
    artists: [
      { name: "Helén Rutegård", medium: "Dubbelvävda trasmattor i Twist med Panamasolving" },
    ],
    location: "https://maps.app.goo.gl/gqP6RuP7LNyE1tWu5",
  },
  {
    id: 13,
    name: "Anders Matsgården",
    coords: [1493, 4531, 1810, 4837],
    artists: [
      {
        name: "Grävlings Naturprodukter",
        medium: "Naturnära hantverk tillverkat på Gräsö",
      },
      {
        name: "Emmanuelle Strand Jean",
        medium: "Måleri, fotografi, järntrådskonst",
      },
      {
        name: "Staffan Strand",
        medium: "Skulpturer i brons",
      },
      {
        name: "Louise Westerberg",
        medium: "Fårskinn, skärgårdsbilder, almanacka 'Gräsö Skärgård 2027'",
      },
    ],
    location: "https://goo.gl/maps/LG7KWRDiEGQofrGo8",
  },
  {
    id: 14,
    name: "Sjöäng",
    coords: [1127, 4022, 1751, 4325],
    info: "Café med hembakat ons, tors och fredag",
    artists: [{ name: "Kerstin Sjöblom", medium: "Måleri akryl, olja" }],
    location: "https://goo.gl/maps/LiEVQ5TTFabDpBBMA",
    icons: ["Kaffekopp"],
  },
  {
    id: 15,
    name: "MasLarsgården",
    coords: [1853, 3755, 2478, 4058],
    info: "Smashed burgers och gratis fika, porträttfotografering i studio på plats och papegojor",
    linkInfo: (
      <>
        <Link isExternal color="secondary" href="https://www.rogerlindvall.se">
          Hemsida!
        </Link>{" "}
      </>
    ),
    artists: [
      { name: "Rune Eklund", medium: "Knep och knåp pussel för barn och vuxna" },
      { name: "Cecilia Granberg", medium: "Keramik" },
      { name: "Roger Lindvall", medium: "Fotokonst, silversmide och amigurumi-dockor" },
    ],
    location: "https://maps.app.goo.gl/TQb3GNbTz8sj1FBTA",
    icons: ["Kaffekopp"],
  },
  {
    id: 16,
    name: "Gräsö Bygdegård - Norrboda",
    coords: [1186, 3438, 2146, 3741],
    info: "Fika, smörgåsar. Här finns handikapptoalett",
    artists: [
      { name: "Marie Summerfield", medium: "Smycken, dubbla kort med foton" },
      { name: "Thomas Olofsson", medium: "Knivmakare" },
      { name: "Anders Keyser", medium: "Fototavlor på canvas" },
      { name: "Eva Rengren", medium: "Stickat" },
      {
        name: "Maria Levin",
        medium:
          "Funktionella vardagsprodukter t.ex. väskor, brandfiltar, tehuvor, grytlappar, tygkorgar",
      },
    ],
    location: "https://goo.gl/maps/NFZZjPXa5Ne9Kh7dA",
    icons: ["Cutlery"],
  },
  {
    id: 17,
    name: "Norrboda Västerhamn",
    coords: [856, 3131, 1467, 3420],
    info: "Fiolspel skärgårdsvalser 15:00",
    artists: [
      {
        name: "Britt-Marie Jansson",
        medium: "Tema: Gryning Örskär och Venedig, akvarell och akryl, växtfärgat siden",
      },
    ],
    location: "https://maps.app.goo.gl/C79yY61Ebo8RoMNaA",
    icons: ["Guitar"]
  },
  {
    id: 18,
    name: "Lökäng",
    coords: [1061, 2779, 1663, 3082],
    info: "Musik: måndag, tisdag, onsdag, torsdag och lördag från 12.00. Författarträff måndag 6/7 kl. 15:00 med Eleonore Holmgren - pratar om sin nya bok 'Om morgondagen vet vi ingenting', Mari Lok Björk - pratar om sin bok 'Att välja ett liv', Catrin Ormestad - presenterar sin kommande bok 'Fyren vid havets slut' som utspelar sig på Örskär",
    artists: [
      {
        name: "Hans-Åke Lerin",
        medium: "Foto, premiär för ny bildserie samt ateljestäd/gamla bilder slumpas bort",
      },
      {
        name: "Jon Gerbrand",
        medium: "Lampor, renoverat, återbruk och nytänk",
      },
      { name: "Kyll Hellberg", medium: "Waldorfdockor, änglar" },
      { name: "Sanne Vils", medium: "Silversmycken, waldorfdockor" },
      {
        name: "Anna Karlsson",
        medium: "Handstickade tröjor typ islandströjor, handbundna böcker med botaniska tryck, kollage av botaniska tryck",
      },
      {
        name: "Ulla Gerbrand",
        medium: "Måleri, akryl, olja och lite grafik",
      },   
      { name: "Dennis Persson", medium: "Bevingade skulpturer, målningar" },
    ],
    location: "https://goo.gl/maps/DJtN7XHNAKJxs4W58",
    icons: ["Guitar"],
  },
  {
    id: 19,
    name: "Källskärsudden, Båthusviken",
    coords: [2016, 1964, 2639, 2266],
    info: "Fika på bryggan med magnifik utsikt över havet. Vi erbjuder hembakat, korv med bröd, och smörgåsar",
    artists: [
      {
        name: "Charlotte Lundin-Kimby",
        medium: "Akryl på canvas, i mötet mellan natur, djur och de känslor som förenar oss",
      },
      { name: "Jenny Dahlkar", medium: "Måleri i akryl och akvarell" },
      { name: "Carina Pålgård", medium: "Målar intuitivt i akryl 'Sol, vind och vatten, höga berg och djupa hav det är mina drömmar vävda av'" },
    ],
    location: "https://maps.app.goo.gl/frb2i3S3CWYBop5w8",
    icons: ["Kaffekopp"],
  },
];
