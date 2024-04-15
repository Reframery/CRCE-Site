import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classes into a single string
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const isActive = (href: string, pathname: string) =>
  href === pathname || href === pathname.replace(/\/$/, "");

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const titelize = (str: string) =>
  str.split("-").map(capitalize).join(" ");
