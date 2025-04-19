import STYLE from "@/constants/style";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export default async function EditGuitarPage({ searchParams }: {
  searchParams: {
    id: string;
    name: string;
    brand: string;
    price: string;
  };
}) {
  const { id, name, brand, price } = searchParams;

  async function updateGuitar(formData: FormData) {
    "use server";
    const updatedName = formData.get("name") as string;
    const updatedBrand = formData.get("brand") as string;
    const updatedPrice = Number(formData.get("price"));

    await prisma.guitar.update({
      where: { id },
      data: { name: updatedName, brand: updatedBrand, price: updatedPrice },
    });

    redirect("/guitar_hw");
  }

  return (
    <form action={updateGuitar} className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Edit Guitar</h2>
      <label htmlFor="name">Name:</label>
      <input className={STYLE} name="name" type="text" defaultValue={name} required />
      <label htmlFor="brand">Brand:</label>
      <input className={STYLE} name="brand" type="text" defaultValue={brand} required />
      <label htmlFor="price">Price:</label>
      <input className={STYLE} name="price" type="number" defaultValue={price} required />
      <button className={STYLE} type="submit">Update</button>
    </form>
  );
}
