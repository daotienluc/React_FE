import { User } from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";

function HeaderAdmin() {
  const token = localStorage.getItem("LL-token-react");
  let username = "";

  if (token) {
    const decoded = jwtDecode(token);
    username = decoded.username;
  }
  return (
    <>
      <div className="flex justify-end pr-5 py-3 border-b-1 fixed w-full right-0 z-10 bg-gray-50">
        <User
          name={`Welcome ${username}`}
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
    </>
  );
}

export default HeaderAdmin;
