import Image from "next/image";
import Link from "next/link";

export default function Dog() {
    return (
        <>
            <h1>Dog!!</h1>
            <Image src="https://images.newscientist.com/wp-content/uploads/2022/04/05152010/SEI_97255351.jpg" alt="dog" width={300} height={300}/>
            <br />
            <hr />
            <Link href="/" className="hover:underline">Back</Link>
        </>
    )
}