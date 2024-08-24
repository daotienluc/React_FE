import { User } from "@nextui-org/react";

function HeaderAdmin() {
  const user = localStorage.getItem("username");
  return (
    <>
      <div className="flex justify-end pr-5 py-3 border-b-1">
        <User
          name={`Welcome ${user}`}
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
