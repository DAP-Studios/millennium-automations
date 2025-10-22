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
          <div className="flex items-center gap-2">
            <span className="text-sm">Powered by</span>
            <img
              src="https://www.deltaww.com/images/logo.svg"
              alt="Delta Electronics"
              className="h-6 opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
