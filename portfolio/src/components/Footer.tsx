const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <nav className="flex gap-6 text-sm">
            {["Home", "About", "Portfolio", "Blog", "Contact"].map((l) => (
              <a key={l} href="#" className="text-background/60 hover:text-background transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <span className="text-xs text-background/40">© 2025 Fizra Amir. All rights reserved.</span>
        </div>
        <h2 className="font-display text-6xl sm:text-7xl lg:text-9xl font-bold italic text-background/10 text-center select-none">
          Fizra Amir
        </h2>
      </div>
    </footer>
  );
};

export default Footer;