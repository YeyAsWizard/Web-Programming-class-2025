import GuitarItem from "@/components/GuitarItem";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import STYLE from "@/constants/style";

export default async function GuitarDB() {
  const guitars = await prisma.guitar.findMany();

  async function addGuitar(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    await prisma.guitar.create({
      data: { name, brand, price },
    });
    revalidatePath("/guitar_hw");
  }

  async function deleteGuitar(id: string) {
    "use server";
    await prisma.guitar.delete({ where: { id } });
    revalidatePath("/guitar_hw");
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add a New Guitar</h2>
      <form action={addGuitar} className="space-y-2">
        <input className={STYLE} type="text" name="name" placeholder="Name" required />
        <input className={STYLE} type="text" name="brand" placeholder="Brand" required />
        <input className={STYLE} type="number" name="price" placeholder="Price" required />
        <button className={`${STYLE} bg-blue-300 hover:bg-blue-200`} type="submit">Add Guitar</button>
      </form>

      <ul className="mt-6 space-y-2">
        {guitars.map((guitar, index) => (
          <GuitarItem 
          key={guitar.id}
          {...guitar}
          index={index}
          deleteGuitar={deleteGuitar} />
        ))}
      </ul>
    </div>
  );
}
