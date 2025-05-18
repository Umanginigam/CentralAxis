import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border-top-color w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-9 md:py-4">
        <div className="flex items-center gap-2">
          <img
            alt="Logo"
            loading="lazy"
            width="36"
            height="36"
            decoding="async"
            src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
            srcSet="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75 1x, https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75 2x"
            style={{ color: "transparent" }}
          />
          <p className="text-sm text-white">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
