import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const result = await response.json();
      console.log(result);
      alert("successfully Logged in")
      navigate("/");

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <form onSubmit={handleSubmit} className="bg-teal-700 h-[450px] w-[500px] rounded-sm flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white text-center mt-10">Login</h1>
        <div className="mt-10 w-full flex flex-col items-center space-y-4">
          <div className="w-[300px] flex flex-col">
            <label className="text-white mb-2">Email</label>
            <input
              className="w-full h-[40px] px-2 rounded"
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-[300px] flex flex-col">
            <label className="text-white mb-2">Password</label>
            <input
              className="w-full h-[40px] px-2 rounded"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="bg-red-500 text-white font-semibold mt-8 px-6 py-2 rounded hover:bg-red-600 transition duration-300">
          Login
        </button>
        <Link to="/signup" className=" text-white mt-2 px-6 py-2 rounded hover:bg-purple-600 transition duration-300 font-bold">New User</Link>
      </form>

    </div>
  );
};

export default Login;
