import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NavbarHome() {

  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand>
        <Image src="/images/logo-bg-white.png" alt="Logo" width={80} height={80} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem {...{ isActive: router.pathname === "/" }} >
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem {...{ isActive: router.pathname === "/my-project" }}>
          <Link href="#" color="foreground">
            My Project
          </Link>
        </NavbarItem>
        <NavbarItem {...{ isActive: router.pathname === "/my-article" }}>
          <Link color="foreground" href="#">
            My Article
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Get News
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
