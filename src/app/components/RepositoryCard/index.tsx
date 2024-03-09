import { GithubReposType } from "@/app/types/GitHubReposType";

interface IProps {
  repo: GithubReposType;
}


export default function RepositoryCard({repo} : IProps) {
    return (
      <div className="flex flex-col h-40 rounded-md border border-cyan-800 bg-slate-900 p-6 
      gap-3 overflow-hidden md:flex-col">
        <h3 className="text-blue-600 text-xl font-bold truncate">{repo.name}</h3>
        <p className="text-gray-500 text-lg font-normal 
        overflow-hidden text-ellipsis">{repo.description}</p>
      </div>
    );
  }
  