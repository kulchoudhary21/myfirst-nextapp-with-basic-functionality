import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found in contact page</h2>
      <p>Could not find requested resource</p>
      <Link href="/contact">Return to conatct page</Link>
    </div>
  );
}
