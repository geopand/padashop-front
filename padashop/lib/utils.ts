import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function round2(value: number | string) {
  if(typeof value === 'number'){
    return Math.round((value + Number.EPSILON)*100)/100;
  } else if (typeof value === 'string'){
    return Math.round((Number(value) + Number.EPSILON)*100)/100;
  } else {
    throw new Error("Η τιμή δνε είναι αριθμός ούτε κείμενο")
  }
}
