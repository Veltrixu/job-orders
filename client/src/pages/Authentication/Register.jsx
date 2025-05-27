import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/Input.jsx";
import { useEffect, useState } from "react";

import apiAxios from "../../api/axios.js";

import BG from "../../assets/bg.png";
import Logo from "../../component/Logo.jsx";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await apiAxios.post("/auth/register", form);

      if (response.status === 201) {
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response.data.message);
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
          <h1 className="text-2xl md:text-3xl font-bold mb-5">Register</h1>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="firstname"
                placeholder="First Name:"
                onChange={handleChange}
                value={form.firstname}
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="lastname"
                placeholder="Last Name:"
                onChange={handleChange}
                value={form.lastname}
                required
              />
            </div>
          </div>
          <Input
            type="text"
            name="username"
            placeholder="Username:"
            onChange={handleChange}
            value={form.username}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email:"
            onChange={handleChange}
            value={form.email}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password:"
            onChange={handleChange}
            value={form.password}
            required
          />
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password:"
            onChange={handleChange}
            value={form.confirm_password}
            required
          />
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[var(--primary-color)] hover:underline"
              >
                Log in
              </Link>
            </p>
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] transition-colors w-full sm:w-fit py-2 px-6 rounded text-white font-medium disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
