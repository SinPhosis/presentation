"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page1 = () => {
  const router = useRouter();
  const isClicked = () => {
    router.back();
  };
  return (
    <div className="w-full h-full flex flex-col bg-black">
      <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-2xl font-bold">check</h1>

        <div className="w-[50px] h-[50px] flex">
          <Button onClick={isClicked}>kekw</Button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
