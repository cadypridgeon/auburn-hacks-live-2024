"use client";
import { Inclusive_Sans } from "next/font/google";
import { Logo } from "./Logo.jsx";
import Link from "next/link.js";

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" onClick="" className="logo">
        <Logo />
      </Link>
      <div className="navigation flex flex-row">
        <Link href="/">
          <span className={inclusiveSans.className}>Home</span>
        </Link>
        <Link href="/schedule">
          <span className={inclusiveSans.className}>Schedule</span>
        </Link>
        <Link href="/sponsors">
          <span className={inclusiveSans.className}>Sponsors</span>
        </Link>
        <Link href="/speakers">
          <span className={inclusiveSans.className}>Speakers</span>
        </Link>
        <Link href="/prizes">
          <span className={inclusiveSans.className}>Prizes</span>
        </Link>
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            style={{ width: 100 + "%" }}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
