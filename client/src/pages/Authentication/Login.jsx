import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/Input.jsx";
import apiAxios from "../../api/axios.js";
import BG from "../../assets/bg.png";
import Logo from "../../component/Logo.jsx";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await apiAxios.post("/auth/login", form);

      if (response.status === 200) {
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen min-h-screen">
      <div
        className="grid md:grid-cols-2 gap-10 grid-cols-1 items-center justify-center min-h-screen p-4 md:p-12 lg:p-20 bg-cover"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="flex justify-center items-center md:justify-start">
          <Logo />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 md:p-6 w-full md:w-screen m-auto max-w-md md:mr-auto md:ml-0"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-5">Login</h1>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <Input
            type="text"
            name="username"
            placeholder="Username:"
            value={form.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password:"
            value={form.password}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <p className="text-sm text-[var(--label-gray)]">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-[var(--primary-color)] hover:underline"
              >
                Create an account
              </Link>
            </p>
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] transition-colors w-full sm:w-fit py-2 px-6 rounded text-white font-medium disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
