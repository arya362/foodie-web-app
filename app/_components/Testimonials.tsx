export default function Testimonials()
{
    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center">Happy Customers</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-12 px-6">
                <div className="bg-gray-100 p-6 rounded-2xl shadow">
                    <p className="text-gray-600">"Amazing food and super fast delivery!"</p>
                    <h3 className="font-bold mt-4">⭐⭐⭐⭐⭐</h3>
                    <p>- Rahul</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl shadow">
                    <p className="text-gray-600">"Fresh ingredients and excellent service.</p>
                    <h3 className="font-bold mt-4">⭐⭐⭐⭐⭐</h3>
                    <p>- Anjali</p>
                </div>
            </div>
        </section>
    );
}