"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "./toogle-mode";

import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
  SheetClose,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

export function Header() {
  const path = usePathname()
  
  return (
    <>
      <header className="md:hidden sticky top-0 z-40 w-full border-b bg-background bg-opacity-70">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Sheet>
            <SheetTrigger><MenuIcon/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  {siteConfig.mainNav?.length ? (
                    <nav className="flex flex-col gap-6">
                      {siteConfig.mainNav?.map(
                        (item, index) =>
                          item.href && (
                            <Link
                              key={index}
                              href={item.href}
                              className={cn(
                                `flex items-center text-sm font-medium ${
                                  path == item.href
                                    ? ""
                                    : "text-muted-foreground"
                                }`,
                                
                              )}
                            >
                              <SheetClose>{item.title}</SheetClose>
                            </Link>
                          )
                      )}
                    </nav>
                  ) : null}
                  <nav className="flex mt-8 justify-end items-center space-x-1">
                    <Link
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className={buttonVariants({
                          size: "icon",
                          variant: "ghost",
                        })}
                      >
                        <Icons.instagram className="h-5 w-5 fill-current" />
                        <span className="sr-only">Instagram</span>
                      </div>
                    </Link>
                    <Link
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className={buttonVariants({
                          size: "icon",
                          variant: "ghost",
                        })}
                      >
                        <Icons.twitter className="h-5 w-5 fill-current" />
                        <span className="sr-only">Twitter</span>
                      </div>
                    </Link>
                    <ModeToggle />
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <header className="hidden md:block sticky top-0 z-40 w-full border-b bg-background bg-opacity-70">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.instagram className="h-5 w-5 fill-current" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitter className="h-5 w-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
