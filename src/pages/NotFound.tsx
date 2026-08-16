import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="font-anton text-9xl text-purple mb-4" style={{ textShadow: '4px 4px 0px #f4c300' }}>
          404
        </h1>
        <h2 className="font-oswald text-text text-3xl font-bold uppercase mb-6">
          Lost in the void
        </h2>
        <p className="font-oswald text-muted text-lg max-w-md mx-auto mb-12">
          Whatever you're looking for, it ain't here. Better head back before things get weird.
        </p>
        <Link to="/" className="neo-button-primary px-8 py-4 text-xl">
          TAKE ME HOME
        </Link>
      </main>

      <Footer />
    </div>
  )
}
