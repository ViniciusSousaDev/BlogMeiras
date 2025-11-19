import Link from 'next/link'

export default function LayoutHeader(){
  return (
    <header className="bg-green-800 text-white">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Blog Palmeiras</Link>
      </div>
    </header>
  )
}
