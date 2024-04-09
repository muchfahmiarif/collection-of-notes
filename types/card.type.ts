import DefaultLight from "@/public/images/library/default-light.svg";
import DefaultDark from "@/public/images/library/default-dark.svg";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import React from "react";

export interface cardProps {
  id: number;
  name: string;
  url: string;
  icon?: string | React.JSXElementConstructor<any>;
  darkImage: string;
  lightImage: string;
  suggested: boolean;
  tags: string[];
}

export const defaultSomeType = {
  icon: HiOutlineSquaresPlus,
  lightImage: DefaultLight,
  darkImage: DefaultDark,
  suggested: false,
  tags: [],
};
