"use client";
import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface NavbarLogoProps {
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-lg",
        className,
      )}
      style={{ position: "fixed" }}
    >
      {children}
    </motion.div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-between px-4 py-2",
        className,
      )}
    >
      {children}
      <div className="flex items-center gap-4">
        <NavbarButton variant="primary">Let&apos;s Talk</NavbarButton>
      </div>
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onClick={onItemClick}
          className="px-4 py-2 text-white hover:text-blue-400"
          key={`link-${idx}`}
          href={item.link}
        >
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-between px-0 py-2 lg:hidden bg-white border-b border-gray-200",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  if (!isOpen) return null;
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 px-4 py-8 bg-white border border-gray-200 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="mr-4 flex items-center px-2 py-1 pl-4"
    >
      <img
        src="/BTUL.png"
        alt="Brand Top Up Logo"
        width={48}
        height={48}
      />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "text-neutral-300 hover:text-zinc-800 text-sm font-bold cursor-pointer inline-block text-center flex items-center gap-2 bg-transparent border-none shadow-none p-0 m-0 transition-colors duration-200";

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, className)}
      {...props}
    >
      <span className="flex items-center gap-2 group">
        <span>{children}</span>
        <span role="img" aria-label="lightning" className="transition-colors duration-200 group-hover:text-zinc-800">⚡</span>
      </span>
    </Tag>
  );
}; 