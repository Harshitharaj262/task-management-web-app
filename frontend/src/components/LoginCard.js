import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; 



export default function LoginCard() {
  const [isSignup, setIsSignup] = useState(false); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({}); 
  const [loading, setLoading] = useState(false)

  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 

    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      formErrors.email = "Please enter a valid email.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    }

    if (isSignup) {
      if (!username) {
        formErrors.username = "Username is required.";
      }

      if (!confirmPassword) {
        formErrors.confirmPassword = "Confirm Password is required.";
      } else if (password !== confirmPassword) {
        formErrors.confirmPassword = "Passwords do not match.";
      }
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); 
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      let response

      const apiUrl = isSignup
        ?`${process.env.REACT_APP_BASE_URL}/user/signup`
        : `${process.env.REACT_APP_BASE_URL}/user/login`;
        const data = isSignup
        ? { username, email, password }
        : { email, password };

        response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Something went wrong");
        }
  
        const result = await response.json();
        const token = result.token;
      login(token);
      navigate("/dashboard");
      
    } catch (error) {
      setErrors({ general: error.message });
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isSignup ? "Sign Up" : "Login"}
          </h2>
          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignup && (
              <div>
                <label htmlFor="username" className="block font-medium">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  className="w-full p-2 border rounded"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            {isSignup && (
              <div>
                <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="w-full p-2 border rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            )}
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-blue-600 text-white rounded"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            {isSignup ? "Already have an account?" : "Don't have an account?"} 
            <button
              className="text-blue-600 hover:underline ml-1"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
