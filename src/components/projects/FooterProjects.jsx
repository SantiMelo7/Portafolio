import { useEffect, useState } from "react";

export default function FooterProjects({ id, getMarginTop, children }) {
  const [marginTop, setMarginTop] = useState("0px");

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
  }, [id, getMarginTop]);

  return (
    <footer style={{ marginTop }} className="footer-projects">
      {children}
    </footer>
  );
}
