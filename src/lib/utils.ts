import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge tailwind classes into a single string
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
