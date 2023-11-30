"use client";

import Image from "next/image";

export const EventCard = ({ image, name, location, date }) => {
  return (
    <div className="border border-gray-200 hover:shadow-medium transition-all rounded-xl">
      <div>
        <Image
          src={"/event-thumb.png"} // temporary using static
          width={700}
          height={100}
          alt="Picture of the author"
          className="rounded-tl-xl rounded-tr-xl object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="text-gray-400">{location}</div>
        <div className="text-sm">{date}</div>
      </div>
    </div>
  );
};
