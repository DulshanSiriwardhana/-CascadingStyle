import axios from "axios";
import { useState } from "react";

const SignUp=()=>{
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const register=async()=>{
        alert(username);
        alert(email);
        alert(password);
        if(username && email && password){
            const name = username;
            const about = "";
            try{
                const registeredUser = await axios.post('http://localhost:4000/User/',{
                    name,
                    email,
                    about,
                    password
                });
                setUser(registeredUser);
                alert("User registered");
            }
            catch(error) {
                alert("Error user registration");
            }
        }
        else{
            alert("Complete the registration form");
        }
    }

    const handleSubmit=()=>{
        register();
        localStorage.setItem('user', JSON.stringify(user));
    };
    return(
        <div className='p-10 shadow-2xl h-[500px] bg-yellow-500 rounded-xl flex justify-center items-center'>
            <div className='w-72 h-[400px] flex flex-col justify-center items-center gap-10'>
                <div className='bg-red-500 rounded-lg flex justify-between w-full p-2'>
                    <h1>User Name</h1>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className='rounded-full'></input>
                </div>
                <div className='bg-green-500 rounded-lg flex justify-between w-full p-2'>
                    <h1>Email</h1>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-full'></input>
                </div>
                <div className='bg-blue-500 rounded-lg flex justify-between w-full p-2'>
                    <h1>Password</h1>
                    <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} className='rounded-full'></input>
                </div>
                <div>
                    <button onClick={handleSubmit} className='bg-white p-2 rounded-2xl hover:bg-purple-400 focus:bg-red-500'>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default SignUp;