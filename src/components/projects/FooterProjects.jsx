import { useEffect, useState } from "react";

export default function FooterProjects({ id, children }) {
  const [marginTop, setMarginTop] = useState("0px");

  const getMarginTop = (id) => {
    switch (id) {
      case 1:
        return "0px";
      case 2:
        return "2.2rem";
      case 3:
        return "5.4rem";
      case 4:
        return "4.3rem";
      case 5:
        return "4.2rem";
      case 6:
        return "8.8rem";
      case 7:
        return "6rem";
      default:
        return "0px";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMarginTop(getMarginTop(id));
      } else {
        setMarginTop("0px");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  return (
    <footer style={{ marginTop }} className="footer-projects">
      {children}
    </footer>
  );
}
