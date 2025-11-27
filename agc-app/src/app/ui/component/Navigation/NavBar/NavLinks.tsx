"use client";

import Link from "next/link";
import { useState } from "react";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { ChevronDown } from "lucide-react";
import type { NavLink } from "@/config/navigation.config";

interface NavLinksProps {
  links: readonly NavLink[];
  currentPath: string;
  className?: string;
}

export function NavLinks({
  links,
  currentPath,
  className = "",
}: NavLinksProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const isActive = (path: string) => currentPath === path;

  return (
    <nav role="navigation" aria-label="Menu principal" className={className}>
      <Typography
        variant="caption4"
        component="div"
        theme="black"
        className="flex items-center gap-7 md:text-caption3"
      >
        {links.map(({ label, href, external, subLinks }) => (
          <div
            key={href}
            className="relative group"
            onMouseEnter={() => setHovered(label)}
          >
            <Link
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex items-center gap-1 text-sm transition-colors ${
                isActive(href)
                  ? "text-primary-600 font-semibold"
                  : "text-black hover:text-primary-600"
              }`}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {label}
              {subLinks && <ChevronDown size={14} className="mt-[1px]" />}
            </Link>

            {subLinks && hovered === label && (
              <div
                className="absolute left-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-lg z-50 animate-fadeIn"
                onMouseLeave={() => setHovered(null)}
              >
                {subLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </Typography>
    </nav>
  );
}
