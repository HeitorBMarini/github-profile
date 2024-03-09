'use client'

import { useState } from "react";

import RepositoryCard from "../components/RepositoryCard";

import { BiSolidError } from "react-icons/bi";
import { GithubProfileType } from "../types/GitHubProfileType";
import { GithubReposType } from "../types/GitHubReposType";
import UserProfile from "../components/userProfile";
import Loading from "../components/Loading";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const [user, setUser] = useState<GithubProfileType | null>(null);

  const [repos, setRepos] = useState<GithubReposType[]>([]);

  const [loading, setLoading] = useState(false)

  async function handleSearchUser()  {
    
    if (!searchInput) {
      setUser(null);
      return;
    }

  
    try{
      setLoading(true);

      const response = await fetch(
      `https://api.github.com/users/${searchInput}`
      );
    
      const data : GithubProfileType = await response.json();
    
      setUser(data);
  
      const responseRepos = await fetch(
      `https://api.github.com/users/${data.login}/repos`);
    
      const dataRepos : GithubReposType[] = await responseRepos.json();
  
      setRepos(dataRepos.slice(0, 6));

    } catch (error){
      console.log(error);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* A barra de pesquisa e o botão, agora dentro de uma div centralizada para manter a consistência */}
      <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="text-black p-2 w-80 rounded-lg border-2 border-gray-300"
        />
        <button  onClick={handleSearchUser} className="ml-4 h-12 px-4 py-2 rounded-lg bg-green-800 text-white text-base font-bold cursor-pointer border-2 border-black hover:opacity-90"
       >
          Pesquisar
        </button>
      </div>

      { loading ? (
      <Loading/>
      ):  user?.name ?(

      <div className="flex justify-between w-full mt-8">
        <UserProfile profile={user}/>
        <div className="flex flex-col gap-4 w-full max-w-4xl ml-auto">
        <div className="grid grid-cols-2 gap-4 place-items-center md:flex-col">

            {repos.map((repo) => (
              <RepositoryCard repo={repo} key={repo.id}/>
            ))}
            
           
          </div>
        </div>
      </div>
    ) : (
     
      <div className="flex flex-col items-center justify-center w-full mt-8">
        <BiSolidError size={100} className="text-red-700" />
        <h3 className="text-gray-500 text-2xl font-bold">Nenhum usuário encontrado</h3>
      </div>
    )}
    </div>
  );
}
