
const NavBar=()=>{

    return(
        <div className="h-10 bg-white flex items-center text-[18px] font-bold">
            <div className="ml-10 flex items-center gap-10">
                <div className="h-6flex justify-center items-center">
                    <a href="/" className="hover:text-red-500 focus:text-purple-500 visited:text-gray-500">Home</a>
                </div>
                <div className="h-6 flex justify-center items-center">
                    <a href="/challenges" className="hover:text-red-500 focus:text-purple-500 visited:text-gray-500">Challenges</a>
                </div>
                <div className="h-6 flex justify-center items-center">
                    <a href="/leaderboard" className="hover:text-red-500 focus:text-purple-500 visited:text-gray-500">LeaderBoard</a>
                </div>
                <div className="h-6 flex justify-center items-center">
                    <a href="/playground" className="hover:text-red-500 focus:text-purple-500 visited:text-gray-500">PlayGround</a>
                </div>
            </div>
        </div>
    );
}
export default NavBar;