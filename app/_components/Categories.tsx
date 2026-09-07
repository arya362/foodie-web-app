export default function Categories()
{
    const categories=[
        "🍔 Burger",
        "🍕 Pizza",
        "🍟 Fries",
        "🍸 Drinks",

    ];
    return (
        <section className="py-8">
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category)=>(
                    <button key={category}
                    className="bg-orange-100 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}