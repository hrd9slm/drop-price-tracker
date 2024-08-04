'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  label: any;
  href: string;
};
const NavLink = ({ label, href }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`lg:hover:text-[#007bff] ${
        path === href ? 'text-[#007bff]' : 'text-gray-500'
      } block font-semibold text-[15px]`}
    >
      {label}
    </Link>
  );
};

export default NavLink;