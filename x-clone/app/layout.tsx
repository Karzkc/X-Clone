import type { Metadata } from "next";
import { headers } from 'next/headers';
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const rawTitle = headersList.get('x-page-title') || 'Home';

  const formattedTitle = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);

  return {
    title: `${formattedTitle} / X`,
    description: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className='h-full w-full antialiased sm:flex  select-none overflow-x-hidden gap-[-10px]'
      >
        <div className=" sm:flex-[26%]  sm:overflow-hidden main-left ">
          <Sidebar />
        </div>
        <div className="sm:flex-[74%]  main-right flex  ">
          {children}
        </div>
      </body>
    </html>
  );
}
