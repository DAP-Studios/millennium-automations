const Footer = () => {
  return (
    <footer className="bg-primary/95 text-white/80 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; 2024 Millennium Automation System. All Rights Reserved.
            </p>
            <p className="text-xs mt-1 text-white/60">
              Built with excellence for the future of industry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <img
              src="dap.png"
              alt="DAP Tech"
              className="h-8 sm:h-10 opacity-90"
            />
            <div className="text-center sm:text-left">
              <p className="text-sm mb-1">
                Website by{" "}
                <span className="text-[#471202] font-bold">
                  DAP Tech Solutions
                </span>
              </p>
              <p className="text-xs sm:text-sm">
                Created by Deep Parmar{" "}
                <a
                  href="tel:+919725362234"
                  className="text-[#020748] font-bold hover:underline transition-colors"
                >
                  +91 9725362234
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
