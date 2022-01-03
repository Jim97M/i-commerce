import React from 'react'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
         }


    return (
        <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e)=>setUsername(e.target.value)}
            />
         
            <input 
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}/>
            <button>Login</button>
        </div>
    );
};

export default Login
