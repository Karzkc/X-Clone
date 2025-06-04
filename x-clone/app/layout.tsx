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
        className=' w-full antialiased flex  select-none overflow-x-hidden gap-[-10px]'
      >
        <div className=" flex-[26%] border-r-1 border-r-[#2F3336]  overflow-hidden ">
          <Sidebar />
        </div>
        <div className="flex-[74%]   ">
          {children}
        </div>
      </body>
    </html>
  );
}
