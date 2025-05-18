import React, { useState } from "react";


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

const toggleDropdown = (name) => {
  setOpenDropdown((prev) => (prev === name ? null : name));
};
const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <header className="sticky top-0 z-40 w-full justify-center border-b border-border bg-background/60 backdrop-blur-xl transition-all font-sans ">
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-6" style={{ maxWidth: "unset" }}>
        {/* Left side (logo + title) */}
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex gap-6 md:gap-10 items-center">
            {/* Logo Desktop */}
            <a className="hidden md:flex items-center space-x-2" href="/">
              <img
                src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
                srcSet="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75 1x, https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75 2x"
                width="36"
                height="36"
                alt="Logo"
                className="text-transparent"
              />
              <div className="text-2xl font-semibold">CentralAxis</div>
            </a>

            {/* Logo Mobile */}
            <a className="flex md:hidden items-center space-x-2" href="/">
              <img
                src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
                srcSet="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75 1x, https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75 2x"
                width="36"
                height="36"
                alt="Logo"
                className="text-transparent"
              />
              <span className="font-bold">CentralAxis</span>
            </a>
          </div>

          {/* Dropdown Menus (Desktop Only) */}
          <div className="hidden items-center space-x-6 lg:flex">
            {/* DCIM Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                Data Center Infrastructure Management
                <span className="ml-1">▼</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-64 rounded-md border bg-background shadow-lg ring-1 ring-border ring-opacity-5 transition-all duration-200 ease-in-out z-50">
                <div className="py-1 flex flex-col">
                  {[
                    ["Monitoring Devices", "https://www.centralaxis.com/dc-management/monitoring"],
                    ["Asset Tracking", "https://www.centralaxis.com/dc-management/asset-management"],
                    ["Network Management", "https://www.centralaxis.com/dc-management/networking"],
                    ["Change Management", "https://www.centralaxis.com/dc-management/change-management"],
                    ["Colocation Management", "https://www.centralaxis.com/dc-management/colocation"],
                    ["Data Center Planner", "https://www.centralaxis.com/dc-management/dc-planner"],
                    ["Firmware Management", "https://www.centralaxis.com/dc-management/firmware"],
                    ["IP Address Management", "https://www.centralaxis.com/dc-management/ipam"],
                    ["Customer Portal", "https://www.centralaxis.com/dc-management/customer-portal"],
                    ["Custom Insights", "https://www.centralaxis.com/dc-management/insights"],
                    ["Custom Data Center Solutions", "https://www.centralaxis.com/dc-management/custom-solutions"]
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block px-4 py-2 text-sm font-semibold hover:text-foreground/80">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Intelligence Solutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                Intelligence Solutions
                <span className="ml-1">▼</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-64 rounded-md border bg-background shadow-lg ring-1 ring-border ring-opacity-5 transition-all duration-200 ease-in-out z-50">
                <div className="py-1">
                  {[
                    ["Digital Twins", "https://www.centralaxis.com/intelligence/digital-twins"],
                    ["Smart Power Mapping", "https://www.centralaxis.com/intelligence/power-mapping"],
                    ["Predictive Failure and Alerting", "https://www.centralaxis.com/intelligence/predictive-failure"],
                    ["Smart Control Systems", "https://www.centralaxis.com/intelligence/control-systems"],
                    ["Automated Discovery", "https://www.centralaxis.com/intelligence/discovery"]
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block px-4 py-2 text-sm font-semibold  hover:text-foreground/80">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Center Compliance Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                Data Center Compliance
                <span className="ml-1">▼</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-64 rounded-md border bg-background shadow-lg ring-1 ring-border ring-opacity-5 transition-all duration-200 ease-in-out z-50">
                <div className="py-1">
                  {[
                    ["DCOI Compliance", "https://www.centralaxis.com/compliance/dcoi"],
                    ["(EU) 2023/1791", "https://www.centralaxis.com/compliance/eu-2023-1791"],
                    ["EN 50600", "https://www.centralaxis.com/compliance/en-50600"],
                    ["LEED Certification", "https://www.centralaxis.com/compliance/leed"],
                    ["ISO/IEC 30134-2", "https://www.centralaxis.com/compliance/iso-iec-30134-2"],
                    ["(EPA) ENERGY STAR", "https://www.centralaxis.com/compliance/energy-star"],
                    ["European Commission JRC", "https://www.centralaxis.com/compliance/ec-jrc"]
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block px-4 py-2 text-sm font-semibold hover:text-foreground/80">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sustainability Blog Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                Sustainability Blog
                <span className="ml-1">▼</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-64 rounded-md border bg-background shadow-lg ring-1 ring-border ring-opacity-5 transition-all duration-200 ease-in-out z-50">
                <div className="py-1">
                  {[
                    ["Energy Efficiency", "https://www.centralaxis.com/energy-solutions/pue-tracking"],
                    ["Stranded Energy Map", "https://www.centralaxis.com/energy-solutions/environmental-product-declaration"],
                    ["Environmental Product Declaration", "https://www.centralaxis.com/energy-solutions/renewables-integration"],
                    ["Power Resource Management", "https://www.centralaxis.com/energy-solutions/power-resource-managment"]
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block px-4 py-2 text-sm font-semibold hover:text-foreground/80">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}  // <-- Add this
            className="dark:border-dark-border col-start-3 flex items-center justify-center gap-2 justify-self-end rounded border border-border p-2 lg:hidden lg:h-7"
            style={{ marginLeft: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide-menu"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              width="24"
              height="24"
            >
              <line
                x1="4"
                x2="20"
                y1="6"
                y2="6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="4"
                x2="20"
                y1="12"
                y2="12"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="4"
                x2="20"
                y1="18"
                y2="18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      {isMobileMenuOpen && (
  <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-4">

    {/* Mobile DCIM Dropdown */}
    <div>
      <button
        className="w-full flex justify-between items-center text-lg font-medium"
        onClick={() => toggleDropdown("dcim")}
      >
        Data Center Infrastructure Management
        <span>{openDropdown === "dcim" ? "▲" : "▼"}</span>
      </button>
      {openDropdown === "dcim" && (
        <div className="mt-2 pl-4 space-y-2 text-text-tertiary dark:text-dark-text-tertiary ">
          {[
            ["Monitoring Devices", "https://www.centralaxis.com/dc-management/monitoring"],
            ["Asset Tracking", "https://www.centralaxis.com/dc-management/asset-management"],
            ["Network Management", "https://www.centralaxis.com/dc-management/networking"],
            ["Change Management", "https://www.centralaxis.com/dc-management/change-management"],
            ["Colocation Management", "https://www.centralaxis.com/dc-management/colocation"],
            ["Data Center Planner", "https://www.centralaxis.com/dc-management/dc-planner"],
            ["Firmware Management", "https://www.centralaxis.com/dc-management/firmware"],
            ["IP Address Management", "https://www.centralaxis.com/dc-management/ipam"],
            ["Customer Portal", "https://www.centralaxis.com/dc-management/customer-portal"],
            ["Custom Insights", "https://www.centralaxis.com/dc-management/insights"],
            ["Custom Data Center Solutions", "https://www.centralaxis.com/dc-management/custom-solutions"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="block text-sm text-foreground/80 hover:underline">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>

    {/* Mobile Intelligence Solutions Dropdown */}
    <div>
      <button
        className="w-full flex justify-between items-center text-lg font-medium"
        onClick={() => toggleDropdown("intelligence")}
      >
        Intelligence Solutions
        <span>{openDropdown === "intelligence" ? "▲" : "▼"}</span>
      </button>
      {openDropdown === "intelligence" && (
        <div className="mt-2 pl-4 space-y-2 text-text-tertiary dark:text-dark-text-tertiary ">
          {[
            ["Digital Twins", "https://www.centralaxis.com/intelligence/digital-twins"],
            ["Smart Power Mapping", "https://www.centralaxis.com/intelligence/power-mapping"],
            ["Predictive Failure and Alerting", "https://www.centralaxis.com/intelligence/predictive-failure"],
            ["Smart Control Systems", "https://www.centralaxis.com/intelligence/control-systems"],
            ["Automated Discovery", "https://www.centralaxis.com/intelligence/discovery"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="block text-sm text-foreground/80 hover:underline">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
    {/* Mobile Data Center Compliance Dropdown */}
    <div>
      <button
        className="w-full flex justify-between items-center text-lg font-medium"
        onClick={() => toggleDropdown("dcc")}
      >
        Data Center Compliance
        <span>{openDropdown === "dcc" ? "▲" : "▼"}</span>
      </button>
      {openDropdown === "dcc" && (
        <div className="mt-2 pl-4 space-y-2 text-text-tertiary dark:text-dark-text-tertiary ">
          {[
            ["DCOI Compliance", "https://www.centralaxis.com/compliance/dcoi"],
            ["(EU) 2023/1791", "https://www.centralaxis.com/compliance/eu-2023-1791"],
            ["EN 50600", "https://www.centralaxis.com/compliance/en-50600"],
            ["LEED Certification", "https://www.centralaxis.com/compliance/leed"],
            ["ISO/IEC 30134-2", "https://www.centralaxis.com/compliance/iso-iec-30134-2"],
            ["(EPA) ENERGY STAR", "https://www.centralaxis.com/compliance/energy-star"],
            ["European Commission JRC", "https://www.centralaxis.com/compliance/ec-jrc"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="block text-sm text-foreground/80 hover:underline">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
    {/* Mobile Sustainability Blog Dropdown */}
    <div>
      <button
        className="w-full flex justify-between items-center text-lg font-medium"
        onClick={() => toggleDropdown("Sustainability")}
      >
        Sustainability Blog
        <span>{openDropdown === "Sustainability" ? "▲" : "▼"}</span>
      </button>
      {openDropdown === "Sustainability" && (
        <div className="mt-2 pl-4 space-y-2 text-text-tertiary dark:text-dark-text-tertiary  ">
          {[
            ["Energy Efficiency", "https://www.centralaxis.com/energy-solutions/pue-tracking"],
            ["Stranded Energy Map", "https://www.centralaxis.com/energy-solutions/environmental-product-declaration"],
            ["Environmental Product Declaration", "https://www.centralaxis.com/energy-solutions/renewables-integration"],
            ["Power Resource Management", "https://www.centralaxis.com/energy-solutions/power-resource-managment"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="block text-sm text-foreground/80 hover:underline">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>

    

    
  </div>
)}

    </header>
);
};

export default Navbar;
