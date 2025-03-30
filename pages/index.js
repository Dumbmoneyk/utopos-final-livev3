import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>UTOPOS | Unlock the Codex</title>
      </Head>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-4">🔥 UTOPOS 🔥</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Begin your journey into the Codex.
        </p>
        <Link href="/access" passHref>
          <a className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg text-lg font-medium">
            Take the Seeker Quiz
          </a>
        </Link>
      </div>
    </>
  )
}
