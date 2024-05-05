"use client";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col item-center min-h-screen w-screen ">
      <div className="flex text-center item-center justify-center w-screen mt-[2rem] sm:mt-[8rem] ">
        <h1 className=" text-2xl  sm:text-4xl text-center px-4 py-2 font-serif ">TailwindCSS copy cat oppgave</h1>
      </div>

      <div className="Content flex flex-col-reverse sm:flex-row justify-center item-center mt-[1.5rem] sm:mt-[6rem] px-4 ">

          <div className="flex flex-col items-center rounded-xl border-2 border-sky-700/50 p-4 mx-4 text-center bg-gradient-to-r from-gray-900 to-slate-900">
            <h2 className="hidden sm:flex text-xl sm:text-2xl px-4 py-2 space-x-1 mt-[52px] ">
              <span>Et </span> 
              <span className="font-bold text-sky-500">bedre </span> 
              <span className="italic"> alternativ</span>
              <span className="">til tradisjonell</span>
              <span className=" underline">CSS</span>.
            </h2>
                <h2 className="Mobil versjon del 1 
                flex sm:hidden text-2xl sm:text-2xl px-4 pt-2  space-x-1 mt-[12px] ">
                  <span>Et </span> 
                  <span className="font-bold text-sky-500">bedre </span> 
                  <span className="italic"> alternativ</span>
                </h2>
                <h2 className="Mobil versjon del 2 
                flex sm:hidden text-2xl sm:text-2xl px-4 pb-2 space-x-1 ">
                  <span className="">til tradisjonell</span>
                  <span className=" underline">CSS</span>.
                </h2>
          

            <h2 className="hidden sm:flex px-4 py-2 space-x-1">
              <span>Du kan fortsatt bruke CSS</span> 
              <span className="font-bold"> kombinert</span>
              <span>med</span>
              <span className=" font-semibold">Tailwind</span>.
            </h2>

                <h2 className="Mobil versjon del1
                flex sm:hidden px-4 pt-2 space-x-1">
                  <span>Du kan fortsatt bruke CSS</span> 
                </h2>
                <h2 className="Mobil versjon del2 
                flex sm:hidden px-4 pb-4  space-x-1">
                  <span className="font-bold"> kombinert</span>
                  <span>med</span>
                  <span className=" font-semibold">Tailwind</span>.
                </h2>
                

            <p className="text-wrap max-w-[26rem] text-sm">Nettsiden er laget for å vise forskjellige funksjoner med TailwindCSS. Ønsker du å lære mer om Tailwind?</p>

            <Link href="https://tailwindcss.com/docs" className=" border-sky-800 border bg-sky-700 w-[8rem] rounded-lg hover:bg-sky-900 mt-8 mb-4 sm:mb-0 sm:mt-14 hover:scale-105 transition duration-200 px-4 py-2 hover:text-white ">Les mer</Link>

          </div>

          <div className="gradient-to-r from-sky-800 to-gray-800 flex justify-center rounded-xl p-4 mx-4 ">

          </div>

          <div className="flex justify-center rounded-xl mx-4">
            <Image src="/tailwindcss-bg.png" width={600} height={400} className="rounded-xl hover:scale-105 transition-transform hover:border-2 hover:border-sky-700 hover:cursor-pointer" alt="Gradient bakgrunn med teksten: TailwindCSS" onClick={() => window.location.href="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"} />

          </div>
      </div>

      
    </main>
  );
}
