import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email: email.trim().toLowerCase(),
        password: password.trim(), // plaintext only
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.dispatchEvent(new Event("login"));
      navigate("/");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded"/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full p-2 border rounded"/>
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white p-2 rounded">
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
