import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import SocialButton from "../components/SocialButton";
import { SiDevpost } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-[12rem] flex items-center justify-center flex-col text-center">
        <div className=" space-y-4">
          <h1 className="h1">Auburn Hacks</h1>
          { /* Oh, would you look at that? I wonder what this does. */}
          <h2 className="h2 text-gray-200">February <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">3-4</Link>, 2024</h2>
        </div>
        <div>
          <div className="mt-8 flex flex-row gap-6">
            <SocialButton
              name="Discord"
              icon={<FaDiscord size="3em" />}
              link="https://discord.gg/DK4crCtSQQ"
            />
            <SocialButton
              name="DevPost"
              icon={<SiDevpost size="3em" />}
              link="https://auburnhacks-2024.devpost.com/"
            />
            {/* REPLACE LINK */}
            <SocialButton
              name="Notion"
              icon={<RiNotionFill size="3em" />}
              link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
            {/* REPLACE LINK */}
            <SocialButton
              name="BK Map"
              icon={<FiMapPin size="3em" />}
              link="https://www.eng.auburn.edu/current-students/documents/bk-floorplans.pdf"
            />
            <SocialButton
              name="MLH"
              icon={
                <Image
                  src="/mlh-logo-white.png"
                  width={50}
                  height={50}
                  alt="MLH Logo"
                />
              }
              link="https://mlh.io/"
              className="py-[1.60rem] px-3"
            />
            <SocialButton
              name="Rules"
              icon={<LuHeartHandshake size="3em" />}
              link="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            />
            <SocialButton
              name="Contact"
              icon={<IoMailOutline size="3em" />}
              link="mailto:staff@auburnhacks.com"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
