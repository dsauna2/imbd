import Link from "next/link";
import React from "react";

interface ItemProps {
  title: string;
  address: string;
  Icon: any;
}
export default function MenuItem({ title, address, Icon }: ItemProps) {
  return (
    <div>
      <Link href={address} className="mx-6 lg:mx-4 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
