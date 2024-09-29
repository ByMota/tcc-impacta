import localFont from "next/dist/compiled/@next/font/dist/local";

export const eurostile = localFont({
  src: "./eurostile.woff"
});

export const eurostileNormal = localFont({
  src: "./eurostileNormal.woff"
});

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});