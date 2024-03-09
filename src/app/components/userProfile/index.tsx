
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GithubProfileType } from "@/app/types/GitHubProfileType";


interface IProps{
   isMyProfile?: boolean;
   profile: GithubProfileType;
}

export default function UserProfile({isMyProfile, profile}: IProps) {
  return (
    <div className="flex flex-col items-center w-96 p-4 rounded-lg text-white">
      <Image
        src={profile.avatar_url}
        width={249}
        height={249}
        alt="avatar"
        className="rounded-full"
      />

      {isMyProfile && <div className="rounded-full mt-4 p-2 bg-blue-600">Meu perfil</div>}

      <h1 className="text-xl font-bold mt-4">{profile.name}</h1>

      <span className="mt-4">{profile.login}</span>
      <p className="text-center">
       {profile.bio}
      </p>

      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        <span className="flex items-center space-x-2">
          <FaLocationDot size={20} className="text-gray-400" />
          <h2 className="text-sm">{profile.location}</h2>
        </span>

        <span className="flex items-center space-x-2">
          <MdEmail size={20} className="text-slate-500 cursor-pointer" />
          <a
            href="mailto:heitor.marini07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            heitor.marini07@gmail.com
          </a>
        </span>

        <span className="flex items-center space-x-2">
          <FaWhatsapp size={20} className="text-green-500 cursor-pointer" />
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5511999657980&text&app_absent=0"
            rel="noreferrer"
            target="_blank"
            className="text-sm"
          >
            (11) 99965-7980
          </a>
        </span>

        <span className="flex items-center space-x-2">
          <AiOutlineInstagram
            size={20}
            className="text-rose-500 cursor-pointer"
          />
          <a
            href="https://www.instagram.com/heitor.marini195/"
            rel="noreferrer"
            target="_blank"
            className="text-sm"
          >
            heitor.marini195
          </a>
        </span>
      </div>
    </div>
  );
}
