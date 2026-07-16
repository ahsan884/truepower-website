import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";

export type IconComponent = ComponentType<IconProps>;

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface IconFeatureItem {
  icon: IconComponent;
  label: string;
}

export interface CheckListItemData {
  title: string;
  description: string;
}

export interface StatItemData {
  icon: IconComponent;
  value: string;
  label: string;
}

export interface SolutionCardData {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  captionLeft: string;
  captionRight: string;
  /** Horizontal center of captionLeft, as a % of the image width (matches the mockup's fixed artwork). */
  captionLeftPosition: number;
  /** Horizontal center of captionRight, as a % of the image width (matches the mockup's fixed artwork). */
  captionRightPosition: number;
}

export interface FooterLinkColumnData {
  title: string;
  links: NavLink[];
}

export interface SocialLinkData {
  icon: IconComponent;
  href: string;
  label: string;
}
