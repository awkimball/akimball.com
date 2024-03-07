import { Link } from "../../lib/definitions"

import Image from "next/image";

export default function LinksButton( { name, imageSrc, url } : Link ) {
    return (
        <a className="border-2 border-slate-500 rounded-xl flex flex-col w-64 min-h-64 sm:min-h-48 sm:w-48 m-4 md:m-4 hover:brightness-50 hover:drop-shadow-lg" href={url}>
            <div className="flex-1 basis-3/4 relative grayscale">
                <Image 
                    className="p-5 object-contain"
                    src={imageSrc}
                    alt={name + " link image"}
                    fill
                />
            </div>
            <div className="flex basis-1/4 p-1 justify-center items-center text-xl border-t-2 border-slate-500">{name}</div>
        </a>    
    )
}