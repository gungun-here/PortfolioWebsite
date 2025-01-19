export default function Projects() {
    return (
        <div className="grid grid-cols-2 font-my">
            <div className="h-full w-full relative group cursor-pointer">
                <img
                    src="todo.png"
                    alt="To Do Project"
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex justify-center items-center">
                    <button className="bg-white text-black px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                    </button>
                </div>
            </div>

            <div className="h-full w-full relative group cursor-pointer">
                <img
                    src="linkedinclone.png"
                    alt="LinkedIn Clone Project"
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex justify-center items-center">
                    <button className="bg-white text-black px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                    </button>
                </div>
            </div>
        </div>
    );
}
