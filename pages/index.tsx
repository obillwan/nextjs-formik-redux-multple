import Link from "next/link";

export default function Home() {
  console.log("Hello world");
  return (
    <>
      <h1>Home</h1>
      <h4>
        <Link href="/refillPageContainer">
          <a>Open Refill Page Container</a>
        </Link>
      </h4>
    </>
  );
}
