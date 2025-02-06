"use client"
import { usePathname } from "next/navigation";
export default function Home() {
  const usepathname = usePathname()
  return (
   <div>
       <h1>Navigation Hook {usepathname}</h1>
   </div>
  );
}
