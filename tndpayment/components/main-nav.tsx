"use client"

import * as React from "react"
import Link from "next/link"
import create from "@kodingdotninja/use-tailwind-breakpoint"
import resolveConfig from "tailwindcss/resolveConfig"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

import tailwindConfig from "../tailwind.config.js"
import { Menu } from "./icon/menu"
import { Button } from "./ui/button"

const config = resolveConfig(tailwindConfig)

export const { useBreakpoint } = create(config?.theme?.screens)

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [visible, setVisible] = React.useState(true)
  const isDesktop = useBreakpoint("md")
  return (
    <>
      <Button
        className="rounded-[6px] fixed w-full top-0 z-10 md:hidden"
        onClick={() => {
          setVisible(true)
        }}
      >
        <Menu />
      </Button>
      {(visible || isDesktop) && (
        <div className="fixed right-0 top-0 box-border h-screen w-screen flex-auto gap-6 overflow-y-scroll overflow-x-hidden md:w-1/3 md:gap-10 z-20 bg-blue px-2 md:px-4">
          <div className="m-2 space-y-2">
            <Button
              className="rounded-[6px] w-full whitespace-nowrap md:hidden text-md"
              onClick={() => {
                setVisible(false)
              }}
            >
              HIDE MENU
            </Button>
            <Input
              className="rounded-[6px] w-full whitespace-nowrap bg-inherit text-md"
              placeholder="GLOBAL SEARCH"
            />
            <Button className="rounded-[6px] w-full whitespace-nowrap bg-yellow text-blue text-md">
              CREATE A NEW FINDING AID
            </Button>
            <Button className="rounded-[6px] w-full whitespace-nowrap border-yellow border-2 text-md">
              MY FINDING AIDS
            </Button>
          </div>
          <Accordion
            type="single"
            className="w-full whitespace-nowrap"
            collapsible
          >
            {siteConfig.mainNav.map((element: any, index) => {
              return (
                <AccordionItem
                  id={"main-nav-list-item-" + index}
                  value={"item-" + index}
                  key={"nav-list-" + index}
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("main-nav-list-item-" + index)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }, 200)
                  }}
                >
                  <AccordionTrigger
                    hascontent={element.content ? "true" : undefined}
                    className="mx-2 portrait:text-lg landscape:text-2xl font-bold overflow-x-hidden"
                  >
                    {element.title}
                  </AccordionTrigger>
                  {element.content && (
                    <AccordionContent className="mx-4">
                      <ul>
                        {element.content.map((child: any, id: any) => {
                          return (
                            <li
                              key={"nav-list-" + index + "-child-" + id}
                              className="grid grid-cols-5 justify-between h-10 outline-none portrait:text-normal landscape:text-lg overflow-x-hidden"
                            >
                              <a
                                href="#"
                                className={
                                  "overflow-x-hidden flex items-center outline-none focus:text-pink font-semibold " +
                                  (child.showToggle
                                    ? "col-span-4"
                                    : "col-span-5")
                                }
                              >
                                {child.title}
                              </a>
                              {child.showToggle && (
                                <Switch
                                  className="col-span-1 outline-none relative right-0 ml-auto my-auto"
                                  tabIndex={-1}
                                />
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </AccordionContent>
                  )}
                </AccordionItem>
              )
            })}
          </Accordion>
          <div className="h-24 landscape:hidden"></div>
        </div>
      )}
    </>
  )
}
