const foods = [
    {
        icon:"🍔", name:"Chineese Burger", price:"$8.99"},
        { icon:"🍕", name:"Pepperoni Pizza",price:"$12.99"},
        {icon:"🍝",name:"Italian Pasta",price:"$10.99"},
    
];
export default function FoodCard() {
    return (
        <section id="menu" className="py-24 bg-gray-50">
            
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold text-center">
                    Popular<span className="text-orange-500">Foods</span>
                </h2>
                <p className="text-center text-gray-500 mt-3">Fresh and delicious meals loved by our customers.</p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {foods.map((food)=>(<div key={food.name}className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
                        <div className="text-7xl text-center">{food.icon}</div>
                        <h3 className="text-2xl font-bold mt-5 text-center">{food.name}</h3>
                        <div className="flex justify-center mt-3">
                            ⭐⭐⭐⭐⭐ ❤️
                            </div>
                            <p className="text-center mt-3">{food.price}</p>
                            <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition duration-300">Order Now</button>
                            </div>))}
                </div>
            </div>
        </section>
    );
}