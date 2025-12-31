import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 1. Style Merger (The "cn" utility)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 2. Domain Normalizer
 */
export function normalizeDomain(domain: string): string {
  let cleanDomain = domain;

  if (cleanDomain.startsWith("www.")) {
    cleanDomain = cleanDomain.replace("www.", "");
  }


  if (cleanDomain.includes(":")) {
    cleanDomain = cleanDomain.split(":")[0];
  }

  return cleanDomain.toLowerCase();
}