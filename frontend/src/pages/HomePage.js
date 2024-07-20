import SignUp from '../components/signup';
import UI from '../images/ui.png';

const HomePage=()=>{
    return(
        <div>
            <div className="bg-black p-10 mb-10 m-10 flex items-center justify-center flex-wrap">
                <div className="bg-red-500 text-[20px] h-60 w-60 rounded-3xl shadow-2xl shadow-slate-700 m-4 flex justify-center items-center hover:w-64 hover:h-64 hover:m-2 hover:text-[21px]">
                    <h1>Practice CSS</h1>
                </div>
                <div className="bg-blue-500 text-[20px] h-60 w-60 rounded-3xl shadow-2xl shadow-slate-700 m-4 flex justify-center items-center hover:w-64 hover:h-64 hover:m-2 hover:text-[21px]">
                    <h1>Practice HTML</h1>
                </div>
                <div className="bg-green-500 text-[20px] h-60 w-60 rounded-3xl shadow-2xl shadow-slate-700 m-4 flex justify-center items-center hover:w-64 hover:h-64 hover:m-2 hover:text-[21px]">
                    <h1>Complete Challenges</h1>
                </div>
                <div className="bg-yellow-500 text-[20px] h-60 w-60 rounded-3xl shadow-2xl shadow-slate-700 m-4 flex justify-center items-center hover:w-64 hover:h-64 hover:m-2 hover:text-[21px]">
                    <h1>Create Challenges</h1>
                </div>
            </div>
            <div className="bg-green-200 h-full flex flex-col justify-center items-center md:flex-row gap-2">
                <img alt='img' className='max-w-[700px] p-10' src={UI}/>
                <div className='h-full pt-10 pb-10 flex flex-col justify-center items-center gap-8'>
                    <h className=" md:text-3xl">Sign up for free to join the main contest</h>
                    <SignUp/>
                </div>
            </div>
        </div>
    );
}
export default HomePage;