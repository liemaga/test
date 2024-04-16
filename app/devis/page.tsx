import Image from "next/image";
import Link from "next/link";

import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from "@/components/Footer";

export default function Devis() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      <div className="bg-opacity-20 bg-ccdde1">
        <div className="mt-[5rem] flex flex-col items-center justify-center md:flex-row md:items-center">
          <div className="text-center md:mr-[3rem] mb-[3rem] md:mb-0 ">
            <h1 className="text-4xl font-bold">Devis</h1>
            <h2 className="text-2xl font-semibold my-6">Slogan Court</h2>
            <Button size={"lg"}>
              Découvrir <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="md:ml-[3rem]">
            <Image
              src="/undraw_select_option_re_u4qn.svg"
              width={500}
              height={500}
              alt="Hero illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        
      </div>

      <Footer></Footer>
    </main>
  );
}
