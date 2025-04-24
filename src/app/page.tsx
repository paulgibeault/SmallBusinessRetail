import type {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Treasure Valley Treats',
  description: 'Your Local Treasure Valley Bakery',
};
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex flex-col justify-center items-center text-center text-white"
        style={{          backgroundImage: `url('https://images.unsplash.com/photo-1608794659345-463e81d5f9b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Treasure Valley Treats
          </h1>
          <Link
            href="/menu"
            className="bg-secondary text-white px-8 py-4 rounded-full border-2 border-white hover:bg-orange-600 transition-colors shadow-lg font-medium"
          >
            See This Week's Menu
          </Link>
        </div>
      </section>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Placeholder sections */}
        <section className="mb-16">
          <p>Content for this week's treats will go here</p>
        </section>
        <section className='mb-8'>
            <p>Content for featured items will go here.</p>
        </section>
      </div>
    </main>
  );
}
