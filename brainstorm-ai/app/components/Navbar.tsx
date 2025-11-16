"use client";
import { Heading } from "@/lib/components/text-styles/Heading";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import Box from "@/lib/components/layout/Box";
import { Subheading } from "@/lib/components/text-styles";
import Link from "next/link";

export default function Navbar({ isLogin = false }: { isLogin?: boolean }) {
  const links = isLogin
    ? [
        { label: "Features", href: "/#features" },
        { label: "How it Works?", href: "/#how-to" },
        { label: "About", href: "/#about-me" },
      ]
    : [
        { label: "Features", href: "#features" },
        { label: "How it Works?", href: "#how-to" },
        { label: "About", href: "#about-me" },
        { label: "Login", href: "/login" },
      ];

  return (
    <Box className="w-full h-full flex items-center justify-between px-32 pt-10 bg-[#1F0438]">
      {/* Logo */}
      <Link href="/">
        <Box className="flex-col items-center space-x-3 font-roboto">
          <Image src={logo} alt="BrainStorm.AI logo" width={100} height={100} className="justify-self-center" />
          <Heading style={{ textShadow: "0px 5px 10px rgba(255,255,255,0.5)" }}>BRAINSTORM.AI</Heading>
        </Box>
      </Link>

      {/* Nav Links */}
      <Box className="z-100">
        <Box className="flex items-center space-x-13">
          {links.map(({ label, href }, i) => (
            <Box key={i} className="relative inline-block group select-none">
              <span
                className="absolute left-0 top-0 text-transparent text-lg font-medium pointer-events-none whitespace-nowrap select-none"
                style={{ textShadow: "0px 5px 10px rgba(255,255,255,0.5)" }}>
                {label}
              </span>

              <Subheading
                as="span"
                className="
                  inline-block whitespace-nowrap 
                  text-white no-underline text-lg font-medium 
                  transition-transform duration-200 ease-out will-change-transform 
                  group-hover:-translate-y-1">
                {href.startsWith("#") ? <a href={href}>{label}</a> : <Link href={href}>{label}</Link>}
              </Subheading>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
