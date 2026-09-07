export default function Navbar()
{
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                <h1 className="text-3xl font-bold text-orange-500">
                  🍔 Foodie
                  </h1>  
                  <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    </ul>
                  <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
                    Order Now
                  </button>
            </div>
        </nav>
    );
}