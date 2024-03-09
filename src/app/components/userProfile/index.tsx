import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GithubProfileType } from "@/app/types/GitHubProfileType";

interface IProps {
  isMyProfile?: boolean;
  profile: GithubProfileType;
}

export default function UserProfile({ isMyProfile, profile }: IProps) {
  return (
    <div className="flex flex-col items-center w-96 p-4 rounded-lg text-white">
      <Image
        src={profile.avatar_url}
        width={249}
        height={249}
        alt="avatar"
        className="rounded-full"
      />

      {isMyProfile && (
        <div className="rounded-full mt-4 p-2 bg-blue-600">Meu perfil</div>
      )}

      <h1 className="text-xl font-bold mt-4">{profile.name}</h1>

      <span className="mt-4">{profile.login}</span>
      <p className="text-center">{profile.bio}</p>

      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        <span className="flex items-center space-x-2">
          <FaLocationDot size={20} className="text-gray-400" />
          <p className="text-center">{profile.location}</p>
        </span>
      </div>
    </div>
  );
}
