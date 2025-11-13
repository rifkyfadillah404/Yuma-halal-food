const Header = ({ isMobile, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.jpg" alt="Yuma Halal Food" className="h-12 w-12 object-cover rounded-full" />
          <div>
            <h1 className="text-xl font-bold text-primary">YUMA HALAL FOOD</h1>
            <p className="text-xs text-gray-600">Halal Food & Family Trip</p>
          </div>
        </div>
        
        {!isMobile && (
          <nav className="flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium transition">Home</button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-primary font-medium transition">Menu</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium transition">Tentang Kami</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary font-medium transition">Kontak</button>
          </nav>
        )}
        
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition font-medium">
          Pesan Sekarang
        </button>
      </div>
    </header>
  )
}

export default Header
