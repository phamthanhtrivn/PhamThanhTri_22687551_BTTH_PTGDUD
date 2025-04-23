import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/loginSlice";

const App = () => {
  const { user, isLoggedIn } = useSelector((state) => state.login);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      setUsername("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        {isLoggedIn ? (
          <>
            <h1 className="text-2xl font-bold mb-4">
              Xin chào, {user || ""}!
            </h1>
            <button
              onClick={() => dispatch(logout())}
              className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition"
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-6">Đăng nhập</h1>
            <input
              type="text"
              placeholder="Tên người dùng..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={handleLogin}
              className="w-full px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
