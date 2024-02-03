import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Inclusive_Sans } from "next/font/google";
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export default function Speakers() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{ overflow: "auto" }}
    >
      <h1 className="h1 mt-[12rem]">Speakers</h1>
      <div className="mt-[4rem] flex items-center">
        <Carousel className="flex items-center mb-16">
          <CarouselContent className="max-w-4xl">
            {/* Copy and Paste Carousel item to add more items */}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/waltuh.webp"}
                      height={300}
                      width={300}
                      alt="waltuh"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white",
                        inclusiveSans.className
                      )}
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
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Walter White is a fictional character from the
                        television series "Breaking Bad." Portrayed by Bryan
                        Cranston, Walter is a high school chemistry teacher
                        turned methamphetamine manufacturer. Driven by financial
                        struggles and a terminal cancer diagnosis, he partners
                        with former student Jesse Pinkman to enter the illegal
                        drug trade. As the series progresses, Walter's character
                        undergoes a transformation from a sympathetic figure to
                        a morally ambiguous and ruthless individual, known for
                        his cunning and manipulative tactics. The show explores
                        themes of morality, consequence, and the impact of
                        choices on an individual's life.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            {/* Copy and Paste Carousel item to add more items */}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/waltuh.webp"}
                      height={300}
                      width={300}
                      alt="waltuh"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white",
                        inclusiveSans.className
                      )}
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
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Walter White is a fictional character from the
                        television series "Breaking Bad." Portrayed by Bryan
                        Cranston, Walter is a high school chemistry teacher
                        turned methamphetamine manufacturer. Driven by financial
                        struggles and a terminal cancer diagnosis, he partners
                        with former student Jesse Pinkman to enter the illegal
                        drug trade. As the series progresses, Walter's character
                        undergoes a transformation from a sympathetic figure to
                        a morally ambiguous and ruthless individual, known for
                        his cunning and manipulative tactics. The show explores
                        themes of morality, consequence, and the impact of
                        choices on an individual's life.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </div>
  );
}
