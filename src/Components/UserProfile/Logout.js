import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("authToken");

    // Navigate to the login page (or any other page you want)
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 text-white rounded-md">
      Logout
    </button>
  );
}

export default Logout;
