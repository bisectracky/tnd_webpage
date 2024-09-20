"use client";

import Image from "next/image";
import Link from "next/link";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "../../components/ui/button";

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
          className={"Button_button__L2wUb"}
          onClick={() => router.push("/profile")}
        >
          PROFILE
        </Button>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            TND Payments+ Global scale, Security-focused, Fast Transactions,
            Reliable, and Daily life usage.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.google.com/store/apps/details?id=com.tnd.tnd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            1. Phone to Phone payments: Using NFC technology, we provide a handy
            and safe payment method for daily life using cryptocurrencies. You
            have the freedom to choose your favorite wallet and token to pay
            with. No 3rd party involved, no limits.
          </a>
          <div className="spacer"></div>

          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.youtube.com/watch?v=fP36WWC5EII"
            target="_blank"
            rel="noopener noreferrer"
          >
            2. Choose what to Pay/Receive Decide what token you want to pay or
            receive, and the app will do the rest.
          </a>

          <div className="spacer"></div>

          <a
            className="rounded-full border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-start hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm "
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            3. Pay with card No battery in your phone? No problem, Pay using a
            100% crypto-based process, encrypting the transactions with your
            card. Coming soon
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
