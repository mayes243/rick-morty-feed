"use client";
import { useCharacters } from "@/hooks/useCharacters";
import Image from "next/image";

export default function CharacterGrid() {
  const { data: characters, isLoading } = useCharacters();

  return (
    <div className="w-full">
      <main className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white p-2 rounded shadow animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 mt-2 mx-auto rounded"></div>
              </div>
            ))
          : characters && characters.length > 0
          ? characters.map((character) => (
              <div key={character.id} className="bg-white p-2 rounded shadow">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded"
                  placeholder="blur"
                  blurDataURL={character.image}
                />
                <p className="text-center mt-2 font-semibold text-black">{character.name}</p>
              </div>
            ))
          : !isLoading && (
              <div className="p-4 text-center text-gray-500 col-span-full">
                No characters found.
              </div>
            )}
      </main>
    </div>
  );
}
