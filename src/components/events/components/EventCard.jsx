"use client";

import Image from "next/image";

export const EventCard = ({ image, name, location, date, participants }) => {
  const isParticipants = participants.length > 0;

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
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <div className="text-gray-400">{location}</div>
          <div className="text-sm">{date}</div>
        </div>
        <div>
          <div className="text-xs mt-4 text-yellow-600 pt-4 border-t border-gray-100">
            Participants:
          </div>
          {isParticipants ? (
            <div className="flex mt-2 gap-1 items-center">
              {participants.map(({ id, name }) => {
                const participantsName = name;
                const nameShort = participantsName.slice(0, 3);
                return (
                  <div className="avatar" key={id} title={participantsName}>
                    {nameShort}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-gray-300 text-sm py-3">No participant</div>
          )}
        </div>
      </div>
    </div>
  );
};
