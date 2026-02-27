import deltaLogo from "@/assets/delta.png";

const DeltaBadge = () => {
  return (
    <a 
      href="https://www.deltaww.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-3 left-4 md:bottom-4 md:left-6 lg:bottom-6 lg:left-8 z-40"
      title="Delta Electronics - Authorized Partner"
    >
      <div className="backdrop-blur-xl bg-white/5 hover:bg-white/15 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 ease-out flex flex-row items-center gap-2 sm:gap-3 cursor-pointer transform hover:scale-105 active:scale-95">
        <img 
          src={deltaLogo} 
          alt="Delta Electronics" 
          className="h-5 sm:h-6 md:h-7 lg:h-8 flex-shrink-0 drop-shadow-md" 
        />
        <span className="hidden sm:inline text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap drop-shadow-sm">
          Delta Partner
        </span>
      </div>
    </a>
  );
};

export default DeltaBadge;
