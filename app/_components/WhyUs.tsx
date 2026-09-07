export default function WhyUs() {
    const features = [
        {
            icon:"🚚",
            title:"Fast Delivery",
            description:"Get your food delivered quickly to your doorstep.",
        },
        {
            icon:"🥗",
            title:"Fresh Ingredients",
            description:"We use only fresh and healthy ingredients.",
        },
        {
            icon:"⭐",
            title:"Best Quality",
            description:"Enjoy delicious food prepared with care.",
        }
    ];
    return (
        <section id="why-us" className="py-20 bg-orange-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center">
                    Why Choose <span className="text-orange-500">Foodie?</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {features.map((item)=>
                    (
                        <div key={item.title} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                            <div className="text-5xl text-center">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-center mt-5">{item.title}</h3>
                            <p className="text-gray-600 text-center mt-3">
                                {item.description}
                            </p>
                            </div>
                    ))}
                </div>
            </div>

        </section>
);
}