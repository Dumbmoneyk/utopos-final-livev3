import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>UTOPOS | Unlock the Codex</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">UTOPOS</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">The Codex has awakened. Begin your seeker path to discover what lies beyond.</p>
        <Link href="/access">
          <a className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg text-lg font-medium">Take the Seeker Quiz</a>
        </Link>
      </main>
    </div>
  )
}