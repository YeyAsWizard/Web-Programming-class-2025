import Link from "next/link";

export default function Cat() {
    return (
        <>
            <h1>Cat!!</h1>
            <br />
            <hr />
            <Link href="/" className="hover:underline">Back</Link>
        </>
    )
}