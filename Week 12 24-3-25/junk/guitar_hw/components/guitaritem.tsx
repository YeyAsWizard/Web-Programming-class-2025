"use client";
import React from "react";
import STYLE from "@/constants/style";
import Link from "next/link";

export default function GuitarItem({ id, index, name, brand, price, deleteGuitar }: {
  id: string;
  index: number;
  name: string;
  brand: string;
  price: number;
  deleteGuitar: (id: string) => void;
}) {
  return (
    <li className="border-2 border-gray-500 rounded-xl p-4 my-2 flex justify-between items-center">
      <div>
        <p className="font-bold">{index + 1}. {name}</p>
        <p className="text-sm text-gray-600">Brand: {brand} | Price: ${price}</p>
      </div>
      <div className="flex space-x-2">
        <button className={STYLE} onClick={() => deleteGuitar(id)}>Delete</button>
        <Link className={STYLE} href={{ pathname: '/guitar_hw/edit', query: { id, name, brand, price } }}>
          Edit
        </Link>
      </div>
    </li>
  );
}
