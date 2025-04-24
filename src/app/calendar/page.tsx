"use client"
import React from 'react';
import { upcomingTreats } from '@/services/menu';
import { format } from 'date-fns';
import Link from 'next/link';

const UpcomingTreatsCalendar: React.FC = () => {
  return ( 
    <div className="container mx-auto p-4 flex flex-col items-center space-y-8">
      <h1 className="text-5xl font-bold text-center">Upcoming Treats</h1>
        <div className="w-full md:w-3/4">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTreats.map((treat) => (
                <Link key={treat.id} href={`/treat/${treat.id}`} className='w-full'>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 border border-primary hover:scale-105 transition-transform duration-300 cursor-pointer w-full flex flex-col space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl">
                      {treat.name}
                    </h3>
                  </div>
                  
                  <div>
                    <span className="font-bold text-gray-800">
                      {format(new Date(treat.date), 'MMMM dd, yyyy')}
                    </span>
                  </div>
                  
                  <div>
                      <p className="text-gray-700">
                      {treat.description}
                      </p>
                </div>
              </div>
                </Link>
            ))}
        </div>
        </div>
    </div>
  );
};

export default UpcomingTreatsCalendar;