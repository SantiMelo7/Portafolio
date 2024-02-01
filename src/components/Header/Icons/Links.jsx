export default function Links({href, children, disabled}) {

    return ( // md:text-basetext-black/70 md:py-2 md:px-4
        
        <a disabled={disabled} href={href} className="border border-gray-700 rounded-md shadow-md shadow-gray-300
            
            flex justify-center items-center text-md transition md:hover:scale-110 hover:bg-white/20 ml-2

            md:gap-x-4 md:mt-1 sm:px-2 sm:gap-x-4 sm:mt-4 sm:hover:scale-90"

            target="_blank" rel="noopener noreferrer"

        > {children} </a>
        
    )

}