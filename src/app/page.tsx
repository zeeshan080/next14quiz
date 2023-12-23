import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Link href="/attempt">Attempt Quiz</Link>
          <Link href="/create">Create Quiz</Link>
        </div>
      </div>
    </main>
  )
}
