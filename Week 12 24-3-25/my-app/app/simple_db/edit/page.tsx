import STYLE from "@/constants/style"
import prisma from "@/utils/db"
import { redirect } from "next/navigation"

export default async function EditTaskPage({ searchParams }:
    {
        searchParams: {
            id: string
            title: string
            done: boolean
        }
    }) {

    const { id, title, done } = await searchParams
    console.log(id, title, done)

    async function updateTask(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        console.log("title: ", title)
        await prisma.todo.update({
            where: { id },
            data: { title }
        })
        redirect("/simple_db")
    }

    return (
        <form action={updateTask}>
            <label htmlFor="title">Title: </label>
            <input className={STYLE}
                name="title"
                type="text" defaultValue={title} maxLength={20} />
            <button
                className={STYLE}
                type="submit">Update</button>
        </form>
    )
}