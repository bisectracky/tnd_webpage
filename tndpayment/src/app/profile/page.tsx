"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { Button } from "../../../components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button
          className={
            "font-semibold tracking-wider rounded-[7px] ml-auto max-h-16 max-w-[200px] col-span-1 overflow-hidden h-full w-full whitespace-nowrap bg-yellow text-2xl md:text-5xl "
          }
          onClick={() => router.push("/")}
        >
          HOME
        </Button>
        <p></p>
        <Button
          className={
            "font-semibold tracking-wider rounded-[7px] ml-auto max-h-16 max-w-[200px] col-span-1 overflow-hidden h-full w-full whitespace-nowrap bg-yellow text-2xl md:text-5xl "
          }
          onClick={() => router.push("/map")}
        >
          MAP
        </Button>
        <p></p>
        <Button
          className={
            "font-semibold tracking-wider rounded-[7px] ml-auto max-h-16 max-w-[200px] col-span-1 overflow-hidden h-full w-full whitespace-nowrap bg-yellow text-2xl md:text-5xl "
          }
          onClick={() => router.push("/profile")}
        >
          PROFILE
        </Button>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>This Profile</li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
