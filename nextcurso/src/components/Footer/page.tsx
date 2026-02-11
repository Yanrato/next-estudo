import Link from "next/link";


export default function Footer() {
  return (
     
  <footer className={
        'text-center pb-16 text-gray-500'}>
          <p>
            Copyright &copy; {new Date().getFullYear()} - 
            <Link href="/"> The Blog</Link>
          </p>
    </footer>

  );

}