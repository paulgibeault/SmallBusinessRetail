// src/app/treat/[treatId]/page.tsx
import { weeklyMenu, upcomingTreats } from "@/services/menu";
import Image from "next/image";
import Link from "next/link";

interface TreatPageProps {
  params: {
    treatId: string;
  };
}

export default function TreatPage({ params }: TreatPageProps) {
  const { treatId } = params;

  const treat =
    weeklyMenu.find((item) => item.id === treatId) ||
    upcomingTreats.find((item) => item.id === treatId);

  if (!treat) {
    return (
      <div className="p-4 flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Treat not found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4 md:mx-0">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6 text-center">{treat.name}</h1>
          {treat.imageUrl && (
            <div className="mb-6 border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src={treat.imageUrl}
                alt={treat.name}
                width={600}
                height={600}
              />
            </div>
          )}
          <p className="text-lg text-gray-700 text-center">{treat.description}</p>
        </div>
      </div>
    </div>
  );
}