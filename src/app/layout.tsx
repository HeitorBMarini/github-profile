import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const roboto = Roboto({ 
  subsets: ["cyrillic"],
weight: ["100", "300", "400", "500" , "700", "900"],
style: ["italic", "normal"],
variable: "--font-roboto",
});

const OpenSans = Open_Sans({ 
subsets: ["cyrillic"],
weight: [ "300", "400", "500" , "700"],
style: ["italic", "normal"],
variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Github Profile",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-zinc-900 {` ${OpenSans.variable} ${roboto.variable}` }" >
        <Header/>
        {children}
        </body>
    </html>
  );
}
