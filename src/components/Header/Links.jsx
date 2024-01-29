export default function Links({href}) {

    return (
        
        <a href={href} className={`
            
            border border-gray-300 rounded-full 
            flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4
            text-xs md:text-basetext-black/70 transition hover:scale-110 hover:bg-white/10`}

            target="_blank"
            rel="noopener noreferrer"

        >
            <slot />
            
        </a>
        
    )

}