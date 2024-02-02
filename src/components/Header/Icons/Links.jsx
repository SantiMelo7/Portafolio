export default function Links({href, children, disabled}) {

    return ( // md:text-basetext-black/70 md:py-2 md:px-4
        
        <a disabled={disabled} href={href} className="border-[3px] border-gray-200 rounded-md shadow-xl shadow-gray-900
            
            flex justify-center items-center text-md transition md:hover:scale-110 hover:bg-white/30

            md:gap-x-4 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-100"

            target="_blank" rel="noopener noreferrer"

        > {children} </a>
        
    )

}