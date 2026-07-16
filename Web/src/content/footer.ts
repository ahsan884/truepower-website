import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconYouTube,
} from "@/components/icons";
import type { FooterLinkColumnData, SocialLinkData } from "@/types";

export const footerLinkColumns: FooterLinkColumnData[] = [
  {
    title: "Solutions",
    links: [
      { label: "On-Grid Solution", href: "#solutions" },
      { label: "Off-Grid Solution", href: "#solutions" },
      { label: "Hybrid Solution", href: "#solutions" },
      { label: "Microgrid Solution", href: "#solutions" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "BESS Systems", href: "#solutions" },
      { label: "Energy Cabinets", href: "#solutions" },
      { label: "AC Combiner", href: "#solutions" },
      { label: "STS Cabinet", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#why-trupower" },
      { label: "Why TruPower", href: "#why-trupower" },
      { label: "Projects", href: "#why-trupower" },
      { label: "Careers", href: "#contact" },
    ],
  },
];

export const socialLinks: SocialLinkData[] = [
  { icon: IconLinkedIn, href: "https://linkedin.com", label: "TruPower on LinkedIn" },
  { icon: IconFacebook, href: "https://facebook.com", label: "TruPower on Facebook" },
  { icon: IconYouTube, href: "https://youtube.com", label: "TruPower on YouTube" },
  { icon: IconInstagram, href: "https://instagram.com", label: "TruPower on Instagram" },
];

export const contactDetails = {
  phone: "+92 223 3333736",
  email: "waqashahid12@gmail.com",
  location: "Lahore, Pakistan",
};
