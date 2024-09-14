import { Button, Input } from "@nextui-org/react";
import React from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const variants = ["underlined"];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          username,
          password,
          role,
        }
      );
      if (response.data.token) {
        localStorage.setItem(
          process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME,
          response.data.token
        );
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      setError("Username hoặc mật khẩu không đúng");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-36 p-5 bg-white shadow-lg">
      <h2 className="text-3xl font-bold">Welcome</h2>
      {variants.map((variant) => (
        <div key={variant} className=" w-ful mb-6 md:mb-0 ">
          <Input
            type="text"
            variant={variant}
            label="UserName"
            value={username}
            placeholder="EnterEnter your UserName"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <Input
            className="mt-5"
            variant={variant}
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <p className="text-red-500">{error}</p>
        </div>
      ))}
      <Button
        onClick={handleLogin}
        className="w-full mt-5 bg-blue-500 text-white"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
