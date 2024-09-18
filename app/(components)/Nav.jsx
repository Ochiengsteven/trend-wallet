"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/clientMember");
    },
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Wait list", link: "/waitlist" },
    { name: "Wallet", link: "/wallet" },
    { name: "About", link: "/about" },
    { name: "Whitewater", link: "/whitewater" },
    { name: "Learn2earn", link: "/learn2earn" },
    { name: "Web 3 news", link: "/web3news" },
    { name: "Donate", link: "/donate" },
    { name: "Logout", link: "/api/auth/signout?callbackUrl=/" },
  ];

  const icon = {
    chevron: <FontAwesomeIcon icon={faChevronDown} />,
  };

  return (
    <header className="bg-transparent text-white">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent text-white"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex justify-between w-screen"
          justify="between"
        >
          <NavbarBrand>
            <p className="font-bold text-inherit">Project X</p>
          </NavbarBrand>
          <div className="flex gap-4 items-center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 text-white font-semibold bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icon.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Features
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="projectx features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {menuItems.slice(1, 5).map((item, index) => (
                  <DropdownItem key={index}>
                    <Link href={item.link} className="text-text-blue">
                      {item.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link href="#" aria-current="page" className="text-text-blue">
                {menuItems[6].name}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" aria-current="page" className="text-text-blue">
                {menuItems[7].name}
              </Link>
            </NavbarItem>
            {session?.user?.role === "admin" && (
              <NavbarItem>
                <Link href="/createUser" className="text-text-blue">
                  Create user
                </Link>
              </NavbarItem>
            )}
            <NavbarItem>
              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="text-red-500 hover:text-red-400 border border-red-500 hover:border-red-400 px-2 rounded-md"
              >
                Logout
              </Link>
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Nav;
