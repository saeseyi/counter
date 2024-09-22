import Counter from '../components/Counter';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8 mt-5">Next.js Counter Website</h1>
        <Counter />
      </main>
      <footer className="mt-1 text-center text-gray-500">
        <p>Created with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  )
}