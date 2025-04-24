// src/app/menu/page.tsx
// src/app/menu/page.tsx
import { weeklyMenu, WeeklyMenuItem } from "@/services/menu";
import Link from "next/link";
import { GiGrain } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

export default function MenuPage() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-12 text-primary">This Week's Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {weeklyMenu.map((item) => (
          <div
            key={item.id}>
            <Link href={`/treat/${item.id}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover object-center flex-grow"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <p className="font-semibold text-2xl text-secondary">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    {item.dietaryLabels.includes("GF") && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-green-500 bg-green-100 text-green-800 gap-1">
                          <GiGrain
                              className="text-green-700"
                              size={16}
                              title="Gluten Free"
                          />
                          GF
                      </span>
                    )}
                    {item.dietaryLabels.includes("Vegan") && (
                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-green-700 bg-green-100 text-green-800 gap-1">
                           <FaLeaf
                                 className="text-green-700"
                                 size={16}
                                 title="Vegan"
                             />
                           Vegan
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}