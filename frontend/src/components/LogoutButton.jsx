import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  return (
    <button
      className="btn-ghost btn-sm"
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("is_admin");
        navigate("/login");
      }}
    >
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  );
}
