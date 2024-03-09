'use client'

import { useState } from "react";

import RepositoryCard from "../components/RepositoryCard";

import { BiSolidError } from "react-icons/bi";

export default function SearchUser() {
  const [user, setUser] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      {/* A barra de pesquisa e o botão, agora dentro de uma div centralizada para manter a consistência */}
      <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          className="text-black p-2 w-80 rounded-lg border-2 border-gray-300"
        />
        <button className="ml-4 h-12 px-4 py-2 rounded-lg bg-green-800 text-white text-base font-bold cursor-pointer border-2 border-black hover:opacity-90">
          Pesquisar
        </button>
      </div>
      
      {/* Layout principal para UserProfile e RepositoryCard */}
      <div className="flex justify-between w-full mt-8">
        <UserProfile />
        <div className="flex flex-col gap-4 w-full max-w-xs ml-auto">
          <div className="grid grid-cols-2 gap-4 place-items-center md:grid-cols-1">
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
          </div>
        </div>
      </div>
      
      {/* Div centralizada para o ícone e mensagem de erro */}
      <div className="flex flex-col items-center justify-center w-full mt-8">
        <BiSolidError size={100} className="text-red-700" />
        <h3 className="text-gray-500 text-2xl font-bold">Nenhum usuário encontrado</h3>
      </div>
    </div>
  );
}
