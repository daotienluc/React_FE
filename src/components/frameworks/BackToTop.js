import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Thêm sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm cuộn trang về đầu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return isVisible ? (
    <Link
      className="w-12 h-12 bg-black fixed right-4 bottom-4 justify-center rounded-md"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
    </Link>
  ) : null;
}

export default BackToTop;
