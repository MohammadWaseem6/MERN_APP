import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        address:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                address: credentials.address
            })
        });

        const result = await response.json();
        console.log(result);
    };


    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-900">
            <form onSubmit={handleSubmit} className="bg-teal-700 h-[600px] w-[500px] rounded-sm flex flex-col items-center">
                <h1 className="text-4xl font-bold text-white text-center mt-10">Sign Up</h1>
                <div className="mt-10 w-full flex flex-col items-center space-y-4">
                    <div className="w-[300px] flex flex-col">
                        <label className="text-white mb-2">Name</label>
                        <input
                            className="w-full h-[40px] px-2 rounded"
                            onChange={handleChange}
                            name="name"
                            value={credentials.name}
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="w-[300px] flex flex-col">
                        <label className="text-white mb-2">Email</label>
                        <input
                            className="w-full h-[40px] px-2 rounded"
                            onChange={handleChange}
                            name="email"
                            value={credentials.email}
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="w-[300px] flex flex-col">
                        <label className="text-white mb-2">Password</label>
                        <input
                            className="w-full h-[40px] px-2 rounded"
                            onChange={handleChange}
                            name="password"
                            value={credentials.password}
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="w-[300px] flex flex-col">
                        <label className="text-white mb-2">Address</label>
                        <input
                            className="w-full h-[40px] px-2 rounded"
                            onChange={handleChange}
                            name="address"
                            value={credentials.address}
                            type="text"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                </div>
                <button className="bg-red-500 text-white font-semibold mt-8 px-6 py-2 rounded hover:bg-red-600 transition duration-300">Submit</button>
                <Link to="/login" className="bg-gray-900 text-white mt-2 px-6 py-2 rounded hover:bg-purple-600 transition duration-300 font-bold">Already a User</Link>
            </form>
        </div>
    );
}

export default SignUp;
