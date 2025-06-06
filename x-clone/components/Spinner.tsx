// components/Spinner.tsx
import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-black relative !top-[10%] !left-[40%]">
      <Loader2 className="h-10 w-10 animate-spin text-[#1d9bf0]" />
    </div>
  );
}
