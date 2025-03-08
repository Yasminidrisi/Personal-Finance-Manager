// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     console.log("Logging in with", email, password);
// //   };

// const loginUser = async () => {
//   const response = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           email: "user@example.com",
//           password: "yourpassword"
//       })
//   });

//   const data = await response.json();
//   console.log("Login Response:", data); // Log response

//   if (data.token) {
//       localStorage.setItem("token", data.token); // Save token
//       console.log("Token saved:", localStorage.getItem("token")); // Verify storage
//   } else {
//       console.error("Login failed, no token received!");
//   }
// };


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-200">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
           
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
           
//            <Link to="resetpassword" className="text-blue-500 hover:underline">Forget Password?</Link>
//           </div>
//           <button 
//             type="submit"
//             className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
          
//         </form>
//         <p className="text-sm text-center text-gray-600">
//           Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
//           {/* <a href="Signup.jsx" className="text-blue-500">Sign up</a> */}
//         </p>
//       </div>
//     </div>
//   );
// // };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Used for redirection after login

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form reload

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Login Response:", data); // Log response

            if (data.token) {
                localStorage.setItem("token", data.token); // ✅ Save token
                console.log("Token saved:", localStorage.getItem("token")); // ✅ Verify storage
                alert("Login successful!"); // Show success message
                navigate("/dashboard"); // ✅ Redirect to dashboard
            } else {
                alert("Login failed: " + (data.message || "Invalid credentials"));
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Link to="/resetpassword" className="text-blue-500 hover:underline">Forget Password?</Link>
                    </div>
                    <button 
                        type="submit"
                        className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
