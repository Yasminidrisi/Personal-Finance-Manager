// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log("Signing up with", name, email, password, confirmPassword);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-200">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-blue-700">Sign Up</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
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
//           </div>
//           <div>
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-600">
//           Already have an account?  
//           <Link to="/" className="text-blue-500 hover:underline">Login</Link>
//           {/* <a href="Login.jsx" className="text-blue-500">Login</a> */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); // ✅ For redirection

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent form reload

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            console.log("Signup Response:", data); // Log response

            if (data.success) {
                alert("Signup successful! Redirecting to login...");
                navigate("/"); // ✅ Redirect to login page
            } else {
                alert("Signup failed: " + (data.message || "Something went wrong"));
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Error signing up. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-blue-700">Sign Up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account?  
                    <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate(); // ✅ For redirection

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         try {
//             const response = await fetch("http://localhost:5000/api/auth/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ name, email, password }),
//             });

//             const data = await response.json();
//             console.log("Signup Response:", data);

//             if (data.success) {
//                 alert("Signup successful! Redirecting to login...");
//                 navigate("/login");
//             } else {
//                 alert("Signup failed: " + (data.message || "Something went wrong"));
//             }
//         } catch (error) {
//             console.error("Signup error:", error);
//             alert("Error signing up. Please try again.");
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-md p-6 space-y-6 bg-white shadow-md rounded-lg">
//                 <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//                 <form onSubmit={handleSignup} className="space-y-4">
//                     <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//                     <button type="submit">Sign Up</button>
//                 </form>
//                 <p>Already have an account? <Link to="/">Login</Link></p>
//             </div>
//         </div>
//     );
// };

// export default Signup;

