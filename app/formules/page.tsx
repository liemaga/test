"use client";
import Image from "next/image";
import Link from "next/link";

import { Fade, Slide } from "react-awesome-reveal";

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

export default function Formules() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      <div className="bg-opacity-20 bg-[#ccdde1]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[5rem] pt-[6rem] pb-[2rem]">
          <Slide triggerOnce className="">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Formules</h1>
              <h2 className="text-2xl font-semibold my-6">Slogan Court</h2>
              <Button size={"lg"}>
                Découvrir <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Slide>
          <Slide
            direction="right"
            triggerOnce
            className="w-[60%] md:w-[30%] order-first md:order-last"
          >
            <Image
              src="/undraw_selection_re_ycpo.svg"
              width={500}
              height={500}
              alt="Hero illustration"
              className="max-w-full h-auto"
            />
          </Slide>
        </div>

        <div className="flex flex-wrap justify-around items-center py-[3rem]">
          <Slide
            triggerOnce
            className="w-[50%] md:w-[20%] mt-8 md:mt-0 order-last md:order-first"
          >
            <Image
              src="/undraw_adjustments_re_gvct.svg"
              width={250}
              height={250}
              alt="Hero illustration"
              className="w-full"
            />
          </Slide>
          <Slide triggerOnce className="w-[85%] md:w-1/2 mt-5" direction="right">
            <div className="text-center">
              <p className="text-lg font-bold mb-3">
                Aider a trouver une solution adaptée
              </p>
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                harum cum, optio voluptate dolore quisquam, enim impedit
                quibusdam facere itaque aliquam.
              </p>
            </div>
          </Slide>
        </div>
      </div>

      <div className="bg-opacity-75 bg-[#ccdde1]">
        <div className="flex flex-col md:flex-row gap-10 mx-[15%] md:mx-10 justify-around py-[5rem]">
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="text-xl font-bold text-black">Starter</span>
              </CardTitle>
              <CardDescription>
                <span className="text-lg font-light text-black">
                  CMS, Travail sur thème.
                </span>
              </CardDescription>
              <CardDescription>
                <span className="text-lg font-normal text-black">
                  À Partir de :{" "}
                </span>
                <span className="text-lg font-bold text-black">300€</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                id animi voluptate vel vero reprehenderit a in. Perferendis qui
                cum vero placeat porro voluptatem itaque aliquam natus tenetur
                sit? Quidem?
              </p>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>
                Demander un Devis{" "}
                <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="text-xl font-bold text-black">Starter</span>
              </CardTitle>
              <CardDescription>
                <span className="text-lg font-light text-black">
                  CMS, Travail sur thème.
                </span>
              </CardDescription>
              <CardDescription>
                <span className="text-lg font-normal text-black">
                  À Partir de :{" "}
                </span>
                <span className="text-lg font-bold text-black">300€</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                id animi voluptate vel vero reprehenderit a in. Perferendis qui
                cum vero placeat porro voluptatem itaque aliquam natus tenetur
                sit? Quidem?
              </p>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>
                Demander un Devis{" "}
                <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="text-xl font-bold text-black">Starter</span>
              </CardTitle>
              <CardDescription>
                <span className="text-lg font-light text-black">
                  CMS, Travail sur thème.
                </span>
              </CardDescription>
              <CardDescription>
                <span className="text-lg font-normal text-black">
                  À Partir de :{" "}
                </span>
                <span className="text-lg font-bold text-black">300€</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                id animi voluptate vel vero reprehenderit a in. Perferendis qui
                cum vero placeat porro voluptatem itaque aliquam natus tenetur
                sit? Quidem?
              </p>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>

              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
              <div className="flex justify-first items-center gap-4 my-2">
                <Image
                  src="/undraw_check.svg"
                  width={20}
                  height={20}
                  alt="Check illustration"
                />
                <p>Utilisation de CMS (WordPress)</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>
                Demander un Devis{" "}
                <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center pb-[5rem]">
          <div className="w-3/4 md:w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>questionnnnn </AccordionTrigger>
                <AccordionContent>reponseeee </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="order-first md:order-last mb-8 md:mb-0">
            <Image
              src="/undraw_questions_re_1fy7.svg"
              width={300}
              height={300}
              alt="FAQ illustration"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
