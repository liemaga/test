"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Fade, Slide } from "react-awesome-reveal";

import { Button } from "@/components/ui/button";

import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar></Navbar>

      <Image
        src="/undraw_screen-pointer.svg"
        width={20}
        height={20}
        alt="Pointer illustration"
        className="absolute top-[35%] right-[10%] sm:top-[50%] sm:right-[15%] md:top-[10%] md:right-[5%] lg:top-[20%] lg:right-[10%] xl:top-[20%] xl:right-[10%] 2xl:top-[20%] 2xl:right-[15%]"
      />

      <Image
        src="/undraw_arched-arrow.svg"
        width={30}
        height={30}
        alt="Arrow illustration"
        className="absolute rotate-180 top-[55%] right-[10%] sm:top-[65%] sm:right-[15%] md:top-[40%] md:right-[20%] lg:top-[50%] lg:right-[25%] xl:top-[55%] xl:right-[30%] 2xl:top-[45%] 2xl:right-[30%]"
      />

      <Image
        src="/svg-hub-036.svg"
        width={300}
        height={300}
        alt="Shape illustration"
        className="absolute rotate-[160deg] top-[10%] left-[-45%] sm:top-[45%] sm:left-[-15%] md:top-[20%] md:left-[-20%] lg:top-[30%] lg:left-[-10%] xl:top-[25%] xl:left-[-10%] 2xl:top-[20%] 2xl:left-[-5%]"
      />


      <div className="bg-[#ccdde1] bg-opacity-20">
        <div className="pt-[5rem] flex flex-col items-center justify-center md:flex-row md:items-center">
          <div className="mb-[3rem] md:mb-0 md:mr-[3rem] w-[80%] md:w-[40%] lg:w-[45%]">
            <Slide triggerOnce >
              <Image
                src="/undraw_dev_focus_re_6iwt.svg"
                width={500}
                height={500}
                alt="Hero illustration"
                className="max-w-full h-auto"
              />
            </Slide>
          </div>

          {/* <div className="mb-[3rem] md:mb-0 md:mr-[3rem] animate__animated animate__fadeInLeft">
            <Image
              src="/undraw_dev_focus_re_6iwt.svg"
              width={500}
              height={500}
              alt="Hero illustration"
              className="max-w-full h-auto"
            />
          </div> */}
          <Slide direction="right" triggerOnce>
            <div className="text-center md:ml-[3rem]">
              <h1 className="text-4xl font-bold">GapNex</h1>
              <h2 className="text-2xl font-semibold my-6">
                Solutions Modernes
              </h2>
              <Button size={"lg"} asChild>
                <Link href="#scroll">
                  Découvrir <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Slide>
        </div>

        <Slide direction="up" triggerOnce>
          <div className="text-center my-[5rem] px-[1rem] md:px-[5rem]">
            <p className="text-4xl font-bold mb-[2rem]">Nos Services</p>
            <p className="text-xl font-normal md:text-2xl md:font-normal">
              Bienvenue chez Gapnex, explorez nos offres de création de sites
              Web, applications et plateformes SaaS. Optez pour une de nos
              formules.
            </p>
          </div>
        </Slide>

        <div
          id="scroll"
          className="flex flex-wrap items-center md:flex-nowrap gap-[3rem] mx-[1rem] pb-[3rem]"
        >
          <Slide direction="left" triggerOnce>
            <div className="flex flex-col items-center text-center gap-[1.5rem]">
              <Image
                src="/undraw_slider_re_ch7w.svg"
                width={350}
                height={350}
                alt="Hero illustration"
                className="md:w-full"
              />
              <p className="text-lg font-bold">
                WordPress : Simplicité et Puissance Réunies
              </p>
              <p className="text-lg font-normal">
                WordPress rend la création de sites web accessible à tous, avec
                une interface intuitive et une abondance de thèmes et de
                plugins. Découvrez la facilité de concrétiser votre vision en
                ligne.
              </p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce>
            <div className="flex flex-col items-center text-center gap-[1rem]">
              <Image
                src="/undraw_proud_coder_re_exuy.svg"
                width={350}
                height={350}
                alt="Hero illustration"
                className="md:w-full"
              />
              <p className="text-lg font-bold">
                Next et React : Pour des Projets Ambitieux
              </p>
              <p className="text-lg font-normal">
                Next et React offrent une flexibilité inégalée pour concevoir
                des applications web complexes. Faites appel à nos développeurs
                experts pour transformer vos idées en solutions sur mesure.
              </p>
            </div>
          </Slide>
          <Slide direction="right" triggerOnce>
            <div className="flex flex-col items-center text-center gap-[1rem]">
              <Image
                src="/undraw_investor_update_re_qnuu.svg"
                width={350}
                height={350}
                alt="Hero illustration"
                className="md:w-full"
              />
              <p className="text-lg font-bold">
                Présence Omnicanale : Du Web au Mobile
              </p>
              <p className="text-lg font-normal">
                Ne vous limitez pas à un seul écran. Nos applications web et
                mobiles offrent une expérience utilisateur fluide et adaptable,
                pour toucher votre public où qu'il soit.
              </p>
            </div>
          </Slide>
        </div>
      </div>

      <div className="bg-[#ccdde1] bg-opacity-75">
        <Image
          src="/undraw_command-button.svg"
          width={40}
          height={40}
          alt="Command illustration"
          className="rotate-[10deg] relative -top-6 left-[75%] sm:-top-6 sm:left-[75%] md:-top-6 md:left-[70%]"
          // className="absolute rotate-[10deg] top-[250%] right-[30%] sm:top-[45%] sm:left-[-15%] md:top-[45%] md:left-[-20%] lg:top-[30%] lg:left-[-10%] xl:top-[25%] xl:left-[-10%] 2xl:top-[20%] 2xl:left-[-5%]"
        />
        <div className="py-[5rem] flex flex-wrap justify-between px-[2rem] items-center">
          <Slide
            direction="left"
            triggerOnce
            className="w-full md:w-2/3 mb-[2rem] md:mb-auto"
          >
            <p className="text-2xl font-bold">Obtenez une Estimation</p>
            <p className="text-xl font-normal my-[1.5rem]">
            Obtenez une estimation de suite et demandez un devis plus précis et détaillé gratuitement
            </p>
            <Button size={"lg"}>
              Découvrir <DoubleArrowDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </Slide>
          <Slide
            className="w-full md:w-auto flex justify-end mt-4 md:mt-0"
            direction="right"
            triggerOnce
          >
            <Image
              src="/undraw_online_test_re_kyfx.svg"
              width={250}
              height={250}
              alt="Hero illustration"
              className=""
            />
          </Slide>
        </div>
      </div>
      <div className="bg-[#ccdde1] bg-opacity-20">
        <Image
          src="/svg-hub-100.svg"
          width={60}
          height={60}
          alt="Command illustration"
          className="rotate-[10deg] relative top-[37rem] left-[20%] sm:top-[40rem] sm:left-[15%] md:top-[27rem] md:left-[20%] lg:top-[27rem] lg:left-[10%] xl:top-[30rem] xl:left-[10%] 2xl:top-[36rem] 2xl:left-[10%]"
          // className="absolute rotate-[10deg] top-[250%] right-[30%] sm:top-[45%] sm:left-[-15%] md:top-[45%] md:left-[-20%] lg:top-[30%] lg:left-[-10%] xl:top-[25%] xl:left-[-10%] 2xl:top-[20%] 2xl:left-[-5%]"
        />
        <Image
          src="/svg-hub-101.svg"
          width={60}
          height={60}
          alt="Command illustration"
          className="rotate-[10deg] relative top-[65rem] left-[75%] sm:top-[70rem] sm:left-[85%] md:top-[39rem] md:left-[80%] lg:top-[42rem] lg:left-[85%] xl:top-[45rem] xl:left-[85%] 2xl:top-[50rem] 2xl:left-[90%]"
          // className="absolute rotate-[10deg] top-[250%] right-[30%] sm:top-[45%] sm:left-[-15%] md:top-[45%] md:left-[-20%] lg:top-[30%] lg:left-[-10%] xl:top-[25%] xl:left-[-10%] 2xl:top-[20%] 2xl:left-[-5%]"
        />

        <Slide direction="up" triggerOnce>
          <p className="text-center text-4xl font-bold pt-[3rem]">
            Accompagnement Personnalisé
          </p>
        </Slide>

        <div className="flex flex-wrap justify-around items-center mt-5">
          <div className="w-1/2 md:w-[20%] my-[2rem] md:my-0">
            <Slide direction="left" triggerOnce>
              <Image
                src="/undraw_new_ideas_re_asn4.svg"
                width={250}
                height={250}
                alt="Hero illustration"
                className="w-full"
              />
            </Slide>
          </div>

          <div className="w-[85%] md:w-1/2">
            <Slide direction="right" triggerOnce>
              <div className="text-center">
                <p className="text-2xl font-bold mb-3">
                  Trouver votre solution
                </p>
                <p className="text-xl font-normal">
                  Nous vous aidons à trouver la solution la plus optimisée pour
                  votre profil
                </p>
              </div>
            </Slide>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center mt-5">
          <div className="w-1/2 md:w-[20%] my-[2rem] md:my-0 md:order-last">
            <Slide direction="right" triggerOnce>
              <Image
                src="/undraw_instant_analysis_re_mid5.svg"
                width={250}
                height={250}
                alt="Hero illustration"
                className="w-full"
              />
            </Slide>
          </div>

          <div className="w-[85%] md:w-1/2">
            <Slide direction="left" triggerOnce>
              <div className="text-center">
                <p className="text-2xl font-bold mb-3">
                  Trouver votre solution
                </p>
                <p className="text-xl font-normal">
                  Nous vous aidons à trouver la solution la plus optimisée pour
                  votre profil
                </p>
              </div>
            </Slide>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center py-5">
          <div className="w-1/2 md:w-[20%] my-[2rem] md:my-0">
            <Slide direction="left" triggerOnce>
              <Image
                src="/undraw_react_re_g3ui.svg"
                width={250}
                height={250}
                alt="Hero illustration"
                className="w-full"
              />
            </Slide>
          </div>

          <div className="w-[85%] md:w-1/2">
            <Slide direction="right" triggerOnce>
              <div className="text-center">
                <p className="text-2xl font-bold mb-3">
                  Trouver votre solution
                </p>
                <p className="text-xl font-normal">
                  Nous vous aidons à trouver la solution la plus optimisée pour
                  votre profil
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
