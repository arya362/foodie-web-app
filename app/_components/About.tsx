export default function About()
{
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

                <div className="text-[180px]text-center">
                    <div className="text-[180px] text-center ">🍴</div>
                </div>
                <div>
                    <h2 className="text-5xl font-bold mb-5">
                        About <span className="text-orange-500">Foodie</span>
                    </h2>
                    <p className="text-gray-600 leading-8">Foodie serves fresh and delicious meals made with quality ingredients. We deliver tasty food quickly to your doorstep with excellent customer service.</p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">Learn More</button>
                </div>
            </div>
            
        </section>
    );
}
