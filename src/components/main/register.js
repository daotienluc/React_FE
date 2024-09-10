import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleRegister = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          username,
          password,
          email,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-36 p-5 bg-white shadow-lg">
      <h2 className="text-3xl font-bold">Welcome</h2>
      <div className="w-full mb-6 md:mb-0">
        <Input
          className="mt-5"
          type="text"
          variant="underlined"
          label="UserName"
          placeholder="Enter your UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          className="mt-5"
          variant="underlined"
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
      </div>
      <Button
        onClick={HandleRegister}
        className="w-full mt-5 bg-blue-500 text-white"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default Register;
