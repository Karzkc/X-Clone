"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

export default function Home() {
  // const handleURL = () => {
  //   const pathname = usePathname();
  //   const pageURL = pathname.split('/').filter(Boolean).pop();
  //   console.log(pageURL)
  // }

  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);


  return null;

}
