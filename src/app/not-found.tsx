
import { TbError404Off } from "react-icons/tb";

export default function NotFound(){
    return(
      <div className="flex flex-col items-center justify-center w-full mt-6">
      <TbError404Off size={400} className="text-blue-700" /> 
      <h3 className="text-gray-500 text-2xl font-bold">
        404 - Not Found      </h3>
        <p className="mt-4 text-gray-600 text-xl">Voltar para  <a href="/" 
        className="text-blue-500 hover:text-blue-300">Home</a>.</p>
    </div>
    )
}