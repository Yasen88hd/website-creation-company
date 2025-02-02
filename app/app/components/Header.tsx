"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className={`py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white backdrop-filter backdrop-blur-sm bg-opacity-100 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          WebCraft
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
