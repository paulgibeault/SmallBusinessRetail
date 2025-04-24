import dynamic from 'next/dynamic';
import React from 'react';

const DynamicDayPicker = dynamic(() => import('react-day-picker').then((mod) => mod.DayPicker), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface CalendarWrapperProps {
  modifiers: any;
  modifiersStyles: any;
}

const CalendarWrapper: React.FC<CalendarWrapperProps> = ({ modifiers, modifiersStyles }) => {
  return (
    <DynamicDayPicker 
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      captionLayout="dropdown"
      className="mx-auto"
    />
  );
};

export default CalendarWrapper;