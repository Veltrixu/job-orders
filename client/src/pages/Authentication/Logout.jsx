import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiAxios from "../../api/axios.js";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await apiAxios.post("/auth/logout");

        if (response.status === 200) {
          navigate("/auth/login");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Logout error:", error);
        navigate("/auth/login");
      }
    };

    logout();
  }, [navigate]);

  return null;
}

export default Logout;
