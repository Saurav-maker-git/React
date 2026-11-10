import meal from "../assets/food.png"
export default function Marketing({setCurrentPage}){
    return(
        <div className="flex flex-row gap-10 mt-10">
            {/* Left Panel */}
            <div className="flex-1 flex flex-col px-10 py-20 gap-3 ">
                <span className="text-xs text-gray-900">FRESH IDEAS EVERYDAY</span>
                <div>
                    <h2 className="text-2xl text-gray-900 font-bold">A little inspiration.</h2>
                    <h2 className="text-2xl text-gray-900 font-bold">A lot flavour.</h2>
                </div>
               
                <p className="mt-3 text-gray-900">
                    Find your next "let's make that meal. Simple seasonal recipes for whatever's in your fridge-and on your mind."
                </p>
                <div className="flex flex-row w-full justify-evenly mt-[120px]">
                    <button onClick={()=>{setCurrentPage("learn")}} 
                        className="px-4 py-1 border-gray-950 rounded-md bg-white font-semibold shadow-md cursor-pointer hover:scale-110">Learn more
                    </button>
                    <button onClick={()=>{setCurrentPage("recipe")}} 
                        className="px-4 py-1 border-gray-950 rounded-md bg-yellow-300 font-semibold shadow-md cursor-pointer hover:scale-110">Get started
                    </button>
                </div>
            </div>

            {/* Right Panel */}
            <div className="relative flex-1 flex px-12 justify-end">
                {/* Thali section */}
                <div className=" relative w-full px-4 bg-white h-[450px] shadow-md  rounded-md rounded-tl-[60px] overflow-hidden">
                    <img 
                        src={meal} 
                        alt="food img" 
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute  w-fit left-1/2 -translate-x-1/2 hover:scale-110 bottom-3 px-6 py-4 bg-yellow-50 flex flex-col border-gray-500 rounded-md shadow">
                        <span className="text-xs">ON THE TABLE TODAY</span>
                        <h2 className="text-2xl">Full vegetarian plate</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}