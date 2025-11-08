"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

export default function Navbar() {
  return (
    <NavigationMenu.Root className="w-screen h-full flex items-center justify-between px-32 pt-10 bg-[#1F0438]">
      {/* Logo */}
      <div className="flex-col items-center space-x-3 font-roboto">
        <Image src={logo} alt="BrainStorm.AI logo" width={100} height={100} className="justify-self-center" />
        <Text className="text-white text-2xl font-extrabold tracking-wide drop-shadow-md">BRAINSTORM.AI</Text>
      </div>

      {/* Nav Links */}
      <div className="z-100">
        <NavigationMenu.List className="flex items-center space-x-12">
          {["Features", "How it Works?", "About", "Login"].map((label, i) => (
            <NavigationMenu.Item key={i}>
              <div
                className="text-white text-lg font-medium hover:text-[#FAA600] transition-all duration-300
                           drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)] cursor-pointer">
                <NavigationMenu.Link>{label}</NavigationMenu.Link>
              </div>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
}
