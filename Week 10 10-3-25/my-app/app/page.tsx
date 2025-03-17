import Image from "next/image";
import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      {/* <header className="flex justify-end h-[10vh] bg-blue-500">
        <nav className="">
          Menu 1 | Menu 2
        </nav>
      </header> */}
      {/* <Header /> */}
      <main>
        <h1 className="text-2xl text-blue-600">Hello</h1>
        <div className="flex justify-between">
          <Image src=".\next.svg" alt="logo" width={200} height={200} />
          <Image src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png" alt="external" width={200} height={200} />
        </div>
        <p className="bg-pink-100 border-2 border-blue-500 p-4 mt-4 rounded-lg text-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi nobis, quisquam pariatur rem ipsam expedita fuga eos a eius?
        </p>
        <p className="bg-pink-100 border-2 border-blue-500 p-4 mt-4 rounded-lg text-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur eaque minus modi quisquam nobis temporibus in dicta hic tempora.
        </p>
        <br />
        <br />
        <Link href="/cat" className="hover:underline">Cat</Link>
        <Link href="/dog" className="ml-5 hover:underline">Dog</Link>

      </main>
      {/* <Footer /> */}
      {/* <footer className="h-[60px] bg-gray-100 text-center">
        Footer
      </footer> */}
    </>
  );
}
