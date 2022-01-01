import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h4>
        <Link href="/selectBirdAndSize">
          <a>Open test with multiple selects</a>
        </Link>
      </h4>
      </>
  )
}
