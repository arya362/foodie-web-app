import Image from "next/image";
import Link from "next/link";
export default function Hero()
{

return (
    
    
        <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-10 px-8 py-20">
            <div>
                <p
                className="text-orange-500 font-semibold text-lg">
                    🍕 Fresh & Delicious

                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Enjoy The Best <br />
                    <span className="text-orange-500">Food <br /></span>
                    In Your <br /> City
                </h1>
                <p className="mt-6 text-gray-600 text-lg">
                    Fresh Ingredients, tasty meals and fast delivery right to your doorstep.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 hover:scale-105 transition duration-300">
                        Order Now
                    </button>
                    <Link href="#menu">
                    <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition duration-300">
                        View Menu
                    </button>
                    </Link>
                </div>
            </div>
            <div className="text-[150px] text-center animate-bounce">
                🍔

            </div>
        </div>
);
}