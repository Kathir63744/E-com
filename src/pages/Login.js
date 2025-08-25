import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios"; // ✅ import axios instance
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Sparkles,
  Crown,
  Gift,
  Heart,
  TrendingUp,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // ✅ save JWT token
      navigate("/"); // redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: <Crown className="w-5 h-5" />,
      title: "Exclusive Member Deals",
      description: "Access to premium discounts up to 80% OFF",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Early Access",
      description: "Be the first to shop new arrivals & flash sales",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Personalized Experience",
      description: "Curated recommendations just for you",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Reward Points",
      description: "Earn points on every purchase & redeem rewards",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mb-6 shadow-2xl">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-3">
                Welcome Back! 👋
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Sign in to unlock exclusive deals and personalized shopping
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 font-medium rounded-lg">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-900"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all font-medium shadow-lg hover:shadow-xl"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all font-medium shadow-lg hover:shadow-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 h-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Signing In...
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Sign In</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm font-medium text-gray-500 bg-gradient-to-r from-gray-50 to-white">
                or continue with
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl hover:bg-white hover:scale-105 transition-all font-medium shadow-lg hover:shadow-xl group">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl hover:bg-white hover:scale-105 transition-all font-medium shadow-lg hover:shadow-xl group">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-700">Facebook</span>
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Shopping Experience
              </div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Unlock Exclusive
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Member Benefits
                </span>
              </h2>
              <p className="text-xl opacity-90 font-medium leading-relaxed">
                Join millions of happy customers and enjoy premium shopping with
                unbeatable deals, personalized recommendations, and exclusive
                member-only perks.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <div className="text-yellow-300">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-white/80 font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black mb-2">50M+</div>
                <div className="text-white/80 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">4.9★</div>
                <div className="text-white/80 font-medium">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">24/7</div>
                <div className="text-white/80 font-medium">Support</div>
              </div>
            </div>

            {/* Trust */}
            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="flex items-center text-white/80">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-medium">Secure & Safe</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Verified Products</span>
              </div>
              <div className="flex items-center text-white/80">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
