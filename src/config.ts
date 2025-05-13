import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mgilet.xyz/", // replace this with your deployed domain
  author: "Maximilien Gilet",
  desc: "Développeur freelance",
  title: "mgilet.xyz",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "fr", // html lang code. Set this empty and default will be "en"
  langTag: ["fr-FR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maximilien-gilet/",
    linkTitle: `${SITE.title} sur LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/maximilienGilet",
    linkTitle: ` ${SITE.title} sur Github`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@CodeavecMaximilien",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:max@mgilet.xyz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title} RSS feed`,
    active: true,
  },
];
