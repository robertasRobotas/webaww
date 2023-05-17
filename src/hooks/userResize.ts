import { useEffect, useState } from "react";

const useDisableTransitionOnResize = () => {
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    const handleResizeStart = () => {
      setResizing(true);
    };

    const handleResizeEnd = () => {
      setTimeout(() => {
        setResizing(false);
      }, 100); // delay may vary depending on your needs
    };

    window.addEventListener("resize", handleResizeStart);
    window.addEventListener("resize", handleResizeEnd);

    return () => {
      window.removeEventListener("resize", handleResizeStart);
      window.removeEventListener("resize", handleResizeEnd);
    };
  }, []);

  return resizing;
};

export default useDisableTransitionOnResize;
