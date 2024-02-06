"use client";
import Image from "next/image";
import Edit from "./svg/edit.svg";
import Trash from "./svg/trash.svg";

export const EditIcon = () => (
  <Image src={Edit} height={16} width={16} alt={Edit} />
);
export const TrashIcon = () => (
  <Image src={Trash} height={16} width={16} alt={Edit} />
);
