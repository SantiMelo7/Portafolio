export default function Links({href, children, disabled}) {

    return ( // md:text-basetext-black/70 md:py-2 md:px-4
        
        <a disabled={disabled} href={href} className="border-[3px] border-cyan-500 rounded-xl 
        
            shadow-xl shadow-gray-500 flex justify-center items-center text-xl text-[#00FFF0]
            
            transition md:hover:scale-110 hover:bg-white/30 sm:w-52
            
            md:gap-x-4 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"

            target="_blank" rel="noopener noreferrer"

        > {children} </a>
        
    )

}