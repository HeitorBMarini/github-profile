import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/userProfile";
import { GithubProfileType } from "./types/GitHubProfileType";
import { GithubReposType } from "./types/GitHubReposType";


export default async function Home() {
  const response = await fetch(
    "https://api.github.com/users/HeitorBMarini"
  );

  const data : GithubProfileType = await response.json();

  const responseRepos = await fetch(
  `https://api.github.com/users/${data.login}/repos`);

  const dataRepos : GithubReposType[] = await responseRepos.json();

  return (
    <main className="flex flex-col md:flex-row justify-between w-full">
      <UserProfile isMyProfile profile={data}/>
      <div className="flex flex-col gap-4 w-full px-2 md:px-0">
        <div className="flex justify-end mr-0 md:mr-6 mt-4"> 
          <Link href={'/search-users'} className="inline-block w-full sm:w-auto" passHref>
            <button className="w-full h-12 px-4 py-2 rounded-lg bg-green-800 text-white text-base font-bold cursor-pointer border-2 border-black hover:opacity-90">
              Encontrar Usuários
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 place-items-center">
          {dataRepos.slice(0, 6).map((repo) => (
            <RepositoryCard repo={repo} key={repo.id}/>
          ))}
        </div>
      </div>
    </main>
  );
  
  
}
