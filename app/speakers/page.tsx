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
import SwriLogo from "@/components/SwriLogo";

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
                    <SwriLogo className="fill-[#FFFFFF] h-24 mb-4" />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Southwest Research Institute
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn Hacks 2024 Sponsor
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Southwest Research Institute (SwRI) is a leading
                        independent research and development organization
                        headquartered in San Antonio, Texas. With a legacy
                        dating back to 1947, SwRI has established itself as a
                        premier institution providing innovative solutions
                        across various industries. Their expertise spans from
                        applied engineering to scientific research, making
                        significant contributions to fields like aerospace,
                        automotive, and energy. SwRI's commitment to excellence
                        and forward-thinking approach continues to drive
                        advancements in technology and shape the future of
                        research and development globally.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/alina.jpeg"}
                      height={300}
                      width={300}
                      alt="Alina Momin"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Alina Momin
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      MLH Representative
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Meet our MLH Representative, Alina Momin. She is a
                        senior Computer Engineering student at UMBC,
                        specializing in Electronic Systems. With a robust
                        background in agile software development and cloud
                        infrastructure gained through internships, she brings a
                        wealth of experience to the table. Her expertise extends
                        to various disciplines including software engineering,
                        quality assurance, and data analysis, with a particular
                        focus on collaborative Robotic applications. As the
                        President of hackUMBC, an innovative collegiate
                        hackathon, she is deeply involved in fostering a vibrant
                        and creative hackathon community at UMBC and MLH.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/matthew.jpeg"}
                      height={300}
                      width={300}
                      alt="Matthew Freestone"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Matthew Freestone
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn ACM President & Auburn Hacks 2023 Winner
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Introducing Matthew Freestone, the President of Auburn
                        ACM and the esteemed winner of Auburn Hacks 2023.
                        Matthew will be leading our highly anticipated "Intro to
                        Git" workshop, a crowd-favorite from Auburn Hacks 2023.
                        With extensive experience in frontend, backend, machine
                        learning, and beyond, Matthew is a seasoned software
                        developer renowned for his expertise. Don't miss the
                        opportunity to engage with him during the workshop and
                        tap into his wealth of knowledge and insights.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/tyler.jpg"}
                      height={300}
                      width={300}
                      alt="Tyler Ray"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Tyler Ray
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn ACM Ethical Hacking Club President
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Please welcome Tyler Ray, the President of Auburn ACM's
                        Ethical Hacking Club, who will be leading an insightful
                        cybersecurity workshop. With a wealth of experience in
                        cybersecurity, Tyler is well-equipped to guide
                        participants through the intricacies of this critical
                        field. Feel free to engage with Tyler during the
                        workshop and leverage his expertise by asking any
                        cybersecurity-related questions you may have.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/garrett.jpeg"}
                      height={300}
                      width={300}
                      alt="Garrett Scott"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Garrett Scott
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn ACM Technical Interview Association President
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Introducing Garrett Scott, President of the Auburn ACM
                        Technical Interview Association, who will be hosting an
                        introductory Python workshop. With extensive knowledge
                        in software engineering, Garrett is well-prepared to
                        guide participants through the fundamentals of Python
                        programming. Don't miss the opportunity to engage with
                        Garrett during the workshop and tap into his valuable
                        expertise.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/ben.jpg"}
                      height={300}
                      width={300}
                      alt="Ben Fisk"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Ben Fisk
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn Hacks Executive Director
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Ben Fisk, Auburn Hacks Executive Director, is poised to
                        lead the opening and closing ceremonies of the
                        hackathon. As an incoming Software Engineer at Radiance
                        Technologies in Huntsville, Alabama, Ben brings valuable
                        experience from his recent internship with the company.
                        Committed to facilitating a conducive learning
                        environment, Ben encourages participants to seek
                        guidance whenever needed. With his leadership, the
                        hackathon promises to be both engaging and informative,
                        offering participants a platform to explore and innovate
                        in the realm of technology.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            {/* Copy and Paste Carousel item to add more items */}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/lorissa.jpg"}
                      height={300}
                      width={300}
                      alt="Lorissa Algarin"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Lorissa Algarin
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn Hacks Operations Director
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Lorissa Algarin, the Operations Director and creative
                        force behind the hackathon's vibrant social and
                        interactive events, is set to infuse the gathering with
                        energy and innovation. With her expertise in event
                        planning and a knack for turning concepts into
                        captivating realities, Lorissa has crafted an atmosphere
                        primed for collaboration and creativity. Her dedication
                        to fostering teamwork and her boundless well of
                        inspiration make her an invaluable resource for
                        participants seeking to enhance their projects and forge
                        meaningful connections throughout the hackathon.
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/cady.jpg"}
                      height={300}
                      width={300}
                      alt="Cady Pridgeon"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Cady Pridgeon
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn Hacks Tech Director
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Meet Cady Pridgeon, the Tech Director at Auburn Hacks.
                        With a focus on UX/UI Design and accessibility, Cady
                        brings valuable insights to the table. Currently working
                        at Chptr and OCV as a UI/UX Intern, she's deeply
                        immersed in the realm of user interface and experience
                        design on a daily basis. Passionate about helping
                        others, Cady is readily available to assist anyone
                        interested in UI/UX, Adobe Creative Suite, or Figma
                        products, drawing from her extensive expertise in these
                        areas. If you're interested in design, let her know!
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="">
              <div className="p-1">
                <Card className="bg-opacity-15 flex flex-row gap-4 p-8 w-full items-center">
                  <div className="w-1/3 flex flex-col items-center justify-center gap-1">
                    <Image
                      src={"/jordan.jpg"}
                      height={300}
                      width={300}
                      alt="Jordan Lee"
                      className="rounded-lg mb-2"
                    />
                    <span
                      className={twMerge(
                        "text-xl text-white justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Jordan Lee
                    </span>
                    <span
                      className={twMerge(
                        "text-lg text-gray-300 justify-center",
                        inclusiveSans.className
                      )}
                      style={{ textAlign: "center" }}
                    >
                      Auburn Hacks Tech Team Member
                    </span>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <CardContent className="text-left text-white">
                      <span
                        className={twMerge("text-md", inclusiveSans.className)}
                      >
                        Introducing Jordan Lee, a seasoned member of our tech
                        team and speaker at our upcoming UI/UX and Web
                        Development workshop. With deep expertise in web
                        development, Jordan offers practical insights and
                        real-world experience in software development. His
                        commitment to knowledge sharing and collaboration
                        underscores his role as a valuable resource in our
                        community. Join us as we explore the intricacies of
                        technology with Jordan Lee at the forefront.
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
