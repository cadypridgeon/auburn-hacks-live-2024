import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Inclusive_Sans } from "next/font/google";
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export default function Speakers() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="h1 mt-[12rem]">Speakers</h1>
      <div className="mt-[4rem] flex items-center">
        <Carousel className=" flex items-center">
          <CarouselContent className="max-w-xl">
            {/* Copy and Paste Carousel item to add more items */}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex">
                  <CardContent className="flex flex-col text-center items-center p-6 bg-opacity-15 text-white max-w-xl">
                    <Image
                      src={"/waltuh.webp"}
                      height={300}
                      width={300}
                      alt="waltuh"
                      className="rounded-lg"
                    />

                    <span
                      className={twMerge("text-lg", inclusiveSans.className)}
                    >
                      Waltuh
                    </span>

                    <span
                      className={twMerge(
                        "text-lg text-gray-300",
                        inclusiveSans.className
                      )}
                    >
                      Meth Specialist
                    </span>

                    <span
                      className={twMerge("text-md", inclusiveSans.className)}
                    >
                      Walter White is a fictional character from the television
                      series "Breaking Bad." Portrayed by Bryan Cranston, Walter
                      is a high school chemistry teacher turned methamphetamine
                      manufacturer. Driven by financial struggles and a terminal
                      cancer diagnosis, he partners with former student Jesse
                      Pinkman to enter the illegal drug trade. As the series
                      progresses, Walter's character undergoes a transformation
                      from a sympathetic figure to a morally ambiguous and
                      ruthless individual, known for his cunning and
                      manipulative tactics. The show explores themes of
                      morality, consequence, and the impact of choices on an
                      individual's life.
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>{" "}
            {/* Copy and Paste Carousel item to add more items */}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex">
                  <CardContent className="flex flex-col text-center items-center p-6 bg-opacity-15 text-white max-w-xl">
                    <Image
                      src={"/bcs.gif"}
                      height={300}
                      width={300}
                      alt="better call saul"
                      className="rounded-lg"
                    />

                    <span
                      className={twMerge("text-lg", inclusiveSans.className)}
                    >
                      Slippin' Jimmy
                    </span>

                    <span
                      className={twMerge(
                        "text-lg text-gray-300",
                        inclusiveSans.className
                      )}
                    >
                      Lawyer Extraordaniare
                    </span>

                    <span
                      className={twMerge("text-md", inclusiveSans.className)}
                    >
                      Saul Goodman, whose real name is James McGill, is a
                      fictional character in the television series "Breaking
                      Bad" and its prequel "Better Call Saul." Created by Vince
                      Gilligan, Saul is portrayed by actor Bob Odenkirk. Saul is
                      a criminal lawyer known for his colorful personality,
                      flamboyant advertisements, and morally flexible approach
                      to legal representation. In "Better Call Saul," the series
                      explores Saul's transformation from a struggling public
                      defender named Jimmy McGill into the morally ambiguous
                      lawyer viewers came to know in "Breaking Bad." He is
                      characterized by his witty and fast-talking demeanor, as
                      well as his willingness to bend or break the law to serve
                      his clients' interests. Despite his questionable ethics,
                      Saul became a fan-favorite character for his humorous and
                      resourceful nature in navigating the criminal underworld.
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>{" "}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
