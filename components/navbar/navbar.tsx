"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import { ModeToggle } from "../mode-toggle";

export function NavbarDemo() {
  return (
    <div className="fixed top-0 z-1000 pt-5 w-full">
      <Navbar className="">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="p-0">
              <ModeToggle />
            </NavbarButton>
            {/* <NavbarButton as={"a"} href="/login" variant="primary">
              {t("login")}
            </NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex gap-2 items-center mr-4">
              <ModeToggle />
              {/* <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              /> */}
            </div>
          </MobileNavHeader>

          {/* <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-neutral-600 dark:text-neutral-300 ${
                  param === `/${item.link}`
                    ? " bg-gray-100 dark:bg-neutral-800 rounded-md px-2 border"
                    : ""
                }`}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                as={"a"}
                href="/login"
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu> */}
        </MobileNav>
      </Navbar>
    </div>
  );
}
