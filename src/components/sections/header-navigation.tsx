"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  { name: "الرئيسية", href: "/" },
  {
    name: "سجاد السيارات",
    href: "#",
    children: [
      { title: "النسخة الأولى", href: "/collections/edition-i" },
      { title: "طقم قطعتين - النسخة الأولى", href: "/collections/2er-set" },
      { title: "النسخة الثانية", href: "/collections/edition-2/Edition-II" },
    ],
  },
  { name: "التخفيضات", href: "/collections/sale" },
  { name: "معطرات السيارات", href: "/collections/einkaufen/Autodüfte" },
  { name: "تواصل معنا", href: "/pages/contact" },
  { name: "من نحن", href: "/pages/uber-uns" },
];

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background">
      <div className="flex h-24 items-center justify-between px-6 lg:px-10 flex-row-reverse">
        <div className="flex flex-1 justify-end items-center">
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-ml-2">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-6">
                <nav className="mt-8 flex flex-col">
                    {navItems.map((item) =>
                      item.children ? (
                        <Accordion type="single" collapsible key={item.name} className="w-full">
                          <AccordionItem value={item.name} className="border-b">
                            <AccordionTrigger className="py-4 text-base font-medium uppercase hover:no-underline text-foreground">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="pl-4">
                                {item.children.map((child) => (
                                  <li key={child.title}>
                                    <Link
                                      href={child.href}
                                      className="block py-2 text-base font-normal text-muted-foreground hover:text-primary"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block py-4 text-base font-medium uppercase border-b",
                            item.name === 'الرئيسية' ? 'text-primary' : 'text-foreground',
                            'hover:text-primary'
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="hidden lg:block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/icons/transparento-2.png?"
              alt="Orientcarmats"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center justify-center lg:flex-1">
          <Link href="/" className="lg:hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/icons/transparento-2.png?"
              alt="Orientcarmats"
              width={80}
              height={80}
              priority
            />
          </Link>
          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex-row-reverse">
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent text-sm font-medium uppercase tracking-wider text-foreground hover:text-primary focus:text-primary data-[active]:text-primary data-[state=open]:text-primary">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[250px] bg-background">
                          {item.children.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            'bg-transparent text-sm font-medium uppercase tracking-wider',
                             item.name === 'الرئيسية' ? 'text-primary' : 'text-foreground',
                            'hover:text-primary focus:text-primary'
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-0 sm:space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5 text-foreground" />
              <span className="sr-only">بحث</span>
            </Link>
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 text-foreground" />
                <span className="sr-only">سلة التسوق</span>
              </Link>
            </Button>
            <span className="absolute -top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";