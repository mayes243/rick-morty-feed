"use client";
import { useCharacters } from "@/hooks/useCharacters";
import Image from "next/image";

export default function CharacterGrid() {
    const { data: characters, isLoading } = useCharacters();

    if (isLoading) return <div className="p-4">Loading characters...</div>;

    return (
        <div className="w-full">
            <main className="w-full p-4 grid grid-cols-4 gap-4">
                {characters && characters.map((character) => (
                    <div key={character.id} className="bg-white p-2 rounded shadow">
                        <Image
                            src={character.image}
                            alt={character.name}
                            width={200}
                            height={200}
                            className="w-full h-auto rounded"
                            priority={false}
                        />
                        <p className="text-center mt-2">{character.name}</p>
                    </div>
                ))}
            </main>
        </div>
    );
}
