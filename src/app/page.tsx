'use client'

import Image from "next/image";
import Link from "next/link";
import { useToast } from "../hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const handleClick = () => {
    toast({ title: "Item added!", description: "This item has been added to the cart" });
  };

  return (
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden ">
            <Image
                src="https://picsum.photos/800/300" // Replace with actual hero image
                alt="Delicious baked goods"
                fill
                style={{objectFit: "cover"}}
                
                className="brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">This Week's Treats</h1>
              <p className="text-lg md:text-xl">Discover this week's selection of delicious, locally-made baked goods!</p>
              <button
                className="bg-tvt-primary text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-tvt-accent"
                onClick={() =>
                  toast({ title: "Treats added!", description: "This week's treat have been added to the cart" })
                }
              >
                See This Week's Treats
              </button>
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured Item 1 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                  src="https://picsum.photos/400/300" // Replace with actual image
                  alt="Featured Baked Good 1"                  
                  width={400}
                  height={300}
                  style={{objectFit: "cover"}}/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Delicious Cake</h3>
                <p className="text-gray-700">A scrumptious cake made with seasonal ingredients.</p>
                <button
                  className="bg-tvt-secondary text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-tvt-accent"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Reserve Now
                </button>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                  src="https://picsum.photos/400/301" // Replace with actual image
                  alt="Featured Baked Good 2"                  
                  width={400}
                  height={300}
                  style={{objectFit: "cover"}}/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Amazing Cookie</h3>
                <p className="text-gray-700">An amazing cookie made with seasonal ingredients.</p>
                <button
                  className="bg-tvt-secondary text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-tvt-accent"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Reserve Now
                </button>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                  src="https://picsum.photos/400/302" // Replace with actual image
                  alt="Featured Baked Good 3"                  
                  width={400}
                  height={300}
                  style={{objectFit: "cover"}}/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Tasty Bread</h3>
                <p className="text-gray-700">A tasty bread made with seasonal ingredients.</p>
                <button
                  className="bg-tvt-secondary text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-tvt-accent"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">About Treasure Valley Treats</h2>
          <p className="text-gray-700">
            We are a woman-owned, local bakery in the Treasure Valley, committed to providing delicious baked goods with gluten-free and vegan options.
          </p>
        </section>

        {/* Community Snippet */}
        <section>
          <h2 className="text-xl font-semibold mb-2">From Our Blog</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Check out our latest blog post for updates, seasonal ingredient spotlights, and more!</p>
            <Link href="/blog" className="text-tvt-primary hover:text-tvt-accent">
              Read More
            </Link>
          </div>
        </section>
      </div>
  );
}

