import { Work, About, Play } from "../pages/Page";

import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { Vgen } from "../assets/Icon/Icons";

import TAIPEI from "../assets/BookImages/kamakura.avif";
import OLD_STREET from "../assets/BookImages/gionkyoto.avif";
import HARBOR from "../assets/BookImages/abandonedcartaipeistreet.avif";

import c01 from "../assets/WorkCardImages/01.avif";
import c02 from "../assets/WorkCardImages/02.avif";
import c03 from "../assets/WorkCardImages/cover-2.avif";
import c04 from "../assets/WorkCardImages/cover-relit.avif";
import c05 from "../assets/WorkCardImages/cover.avif";

import type { ReactNode } from "react";

export type SelectionProps = {
  Topic?: string;
  ElementMapRight?: CardProps[];
  ElementMapLeft?: CardProps[];
};

export type SelectionThreeColsProps = {
  Topic?: string;
  ElementMapOne?: CardProps[];
  ElementMapTwo?: CardProps[];
  ElementMapThree?: CardProps[];
};
export type CardProps = {
  Image: string;
  Title: string;
  MadeYear: string;
  Kind: string;
};
export type AProps = {
  Children: ReactNode;
  type: string;
  to: string;
  onWebsite: boolean;
};

export const Pages = [
  {
    PageName: "work",
    Link: "/Work",
    element: <Work />,
    params: true,
    paramsId: ":WorkTargetId",
    paramsElement: <Work />,
  },
  {
    PageName: "play",
    Link: "/Play",
    element: <Play />,
    params: true,
    paramsId: ":PlayTargetId",
    paramsElement: <Play />,
  },
  { PageName: "about", Link: "/About", element: <About />, params: false },
  {
    PageName: "inspiration",
    Link: "/inspiration",
    element: <Work />,
    params: false,
  },
];

export const Links = [
  {
    LinkIcon: <AiOutlineInstagram />,
    Link: "https://www.instagram.com/pairioo/",
    Name: "INSTAGRAM",
  },
  {
    LinkIcon: <AiOutlineYoutube />,
    Link: "https://www.youtube.com/@pairioo",
    Name: "YOUTUBE",
  },
  {
    LinkIcon: <Vgen />,
    Link: "https://vgen.co/Pairioo",
    Name: "Vgen",
  },
  {
    LinkIcon: <VscTwitter />,
    Link: "https://x.com/pairioo",
    Name: "X",
  },
  {
    LinkIcon: <CiMail />,
    Link: "https://mail.google.com/mail/?view=cm&fs=1&to=icallhermoon@gmail.com",
    Name: "EMAIL",
  },
];

export const BookPages = [
  { src: TAIPEI, caption: "TAIPEI" },
  { src: OLD_STREET, caption: "OLD STREET" },
  { src: HARBOR, caption: "HARBOR" },
];

export const WorkCardLeftData = [
  { Image: c01, Title: "Untitled 01", MadeYear: "2024", Kind: "Sketch" },
  { Image: c02, Title: "Untitled 02", MadeYear: "2024", Kind: "Digital" },
  { Image: c04, Title: "Untitled 03", MadeYear: "2025", Kind: "Sketch" },
  { Image: c05, Title: "Untitled 04", MadeYear: "2025", Kind: "Digital" },
];

export const WorkCardRightData = [
  { Image: c03, Title: "Untitled 05", MadeYear: "2024", Kind: "Ink" },
  { Image: c04, Title: "Untitled 06", MadeYear: "2025", Kind: "Digital" },
  { Image: c05, Title: "Untitled 07", MadeYear: "2025", Kind: "Sketch" },
  { Image: c04, Title: "Untitled 08", MadeYear: "2026", Kind: "Digital" },
];

export const PlayCardOneData = [
  { Image: c01, Title: "Untitled 01", MadeYear: "2024", Kind: "Sketch" },
  { Image: c02, Title: "Untitled 02", MadeYear: "2024", Kind: "Digital" },
  { Image: c04, Title: "Untitled 03", MadeYear: "2025", Kind: "Sketch" },
  { Image: c05, Title: "Untitled 04", MadeYear: "2025", Kind: "Digital" },
];

export const PlayCardTwoData = [
  { Image: c03, Title: "Untitled 05", MadeYear: "2024", Kind: "Ink" },
  { Image: c04, Title: "Untitled 06", MadeYear: "2025", Kind: "Digital" },
  { Image: c05, Title: "Untitled 07", MadeYear: "2025", Kind: "Sketch" },
  { Image: c04, Title: "Untitled 08", MadeYear: "2026", Kind: "Digital" },
];

export const PlayCardThreeData = [
  { Image: c01, Title: "Untitled 01", MadeYear: "2024", Kind: "Sketch" },
  { Image: c02, Title: "Untitled 02", MadeYear: "2024", Kind: "Digital" },
  { Image: c04, Title: "Untitled 03", MadeYear: "2025", Kind: "Sketch" },
  { Image: c05, Title: "Untitled 04", MadeYear: "2025", Kind: "Digital" },
];
