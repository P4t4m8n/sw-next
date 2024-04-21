"use client";

import Link from "next/link";
import { itemLink } from "./Navbar";
interface Props {
  item: itemLink;
}

const LinkLine = ({ item }: Props) => {
  return <Link href={item.path}>{item.title}</Link>;
};

export default LinkLine;
