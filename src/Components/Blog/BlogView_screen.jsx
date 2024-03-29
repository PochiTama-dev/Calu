import React from "react";
import Footer from "../Footer/Footer";
import CTN from "../CTN/CTN";
import BlogView from "./BlogView";

const BlogView_Screen = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <div>
        <BlogView />
        <section>
          <CTN />
          <Footer />
        </section>
      </div>
    );
  }
  return (
    <div >
      <BlogView />
      <section>
        <CTN />
      </section>

      <Footer />
    </div>
  );
};

export default BlogView_Screen;
