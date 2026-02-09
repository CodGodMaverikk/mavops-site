import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "MavOps - Gaming Organization | OPS Don't Sleep",
    template: "%s | MavOps",
  },
  description:
    "MavOps is a gaming organization building tools for streamers and communities. Explore our Discord bot and Clip Dummy AI.",
  keywords: [
    "MavOps",
    "gaming",
    "discord bot",
    "clipbot",
    "streaming",
    "twitch",
    "community",
    "AI",
  ],
  authors: [{ name: "MavOps" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MavOps",
    title: "MavOps - Gaming Organization",
    description:
      "Building tools for streamers and communities. OPS don't sleep.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MavOps - Gaming Organization",
    description:
      "Building tools for streamers and communities. OPS don't sleep.",
  },
};

export const pageMetadata = {
  bot: {
    title: "The Overseer",
    description:
      "The ultimate Discord bot for gaming communities. XP systems, ranks, trivia, Twitch integration, and more.",
  },
  clipbot: {
    title: "Clip Dummy AI",
    description:
      "AI-powered clip detection and distribution. Automatically find, edit, and upload your best gaming moments.",
  },
  about: {
    title: "About MavOps",
    description:
      "Learn about MavOps gaming organization, our mission, and the team behind the tools.",
  },
  contact: {
    title: "Contact MavOps",
    description:
      "Get in touch with MavOps. Discord support, email, and frequently asked questions.",
  },
};
