import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div id="footer" className="bg-black">
      <div className="flex flex-col md:flex-row justify-between pt-[1rem] gap-[2rem]">
        <div className="grow">
          <Image
            src="/undraw_contact_us_re_4qqt.svg"
            width={150}
            height={150}
            alt="Footer Illustration"
            className="ml-[1rem] hidden md:block"
          />

          <div className="md:hidden flex justify-between items-center px-2 mb-[0.5rem]">
            <Image
              src="/undraw_contact_us_re_4qqt.svg"
              width={150}
              height={150}
              alt="Footer Illustration"
            />
            <Image
              src="/logo/logoPictoSeulBlanc.svg"
              width={50}
              height={50}
              alt="Footer Illustration"
            />
          </div>

          <p className="text-center text-white text-4xl">Contactez nous</p>
          <p className="text-center text-white font-light text-2xl my-[0.5rem]">
            Nous vous recontactons dans les plus brefs délais.
          </p>

          <div className="flex justify-center">
            <div className="w-[90%] sm:w-[80%] md:w-3/4 flex gap-[0.75rem] lg:gap-0 flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[45%]">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="w-full lg:w-[45%]">
                <Input type="text" placeholder="Nom" />
              </div>
            </div>
          </div>

          <div className="flex justify-center my-[1rem]">
            <div className="w-[90%] sm:w-[80%] md:w-3/4">
              <Textarea placeholder="Votre demande " />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid w-[90%] sm:w-[80%] md:w-3/4">
              <Button>
                Envoyer <PaperPlaneIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-[1.5rem]">
          <Image
            src="/logo/logoBlanc.svg"
            width={150}
            height={150}
            alt="Logo"
            className="hidden md:block mr-[1rem]"
          />
          <Image
            src="/Google-My-business-SEO-local-et-presence-en-ligne-11-1024x580.jpeg"
            width={500}
            height={500}
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
