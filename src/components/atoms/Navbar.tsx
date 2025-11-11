export const Navbar = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b border-neutral-100 bg-white/50 backdrop-blur-md">
      <div className="flex w-full flex-1 items-center justify-between px-8 md:max-w-360">
        <p className="text-xl font-bold text-emerald-800">
          Wellness<strong className="px-1 text-7xl leading-0">.</strong>
          IA
        </p>
      </div>
    </header>
  );
};
