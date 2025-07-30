import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parsedDate(date: string) {
  const dateParsed = new Date(date);

  const dd = String(dateParsed.getUTCDate()).padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const mm = months[dateParsed.getUTCMonth()];
  const yy = String(dateParsed.getUTCFullYear()).slice(-2);

  return `${dd} ${mm} ${yy}`;
}