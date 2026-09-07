export default function SearchBar()
{
    return(
        <div className="max-w-6xl mx-auto px-8 mt-10">
            <input type="text" placeholder="🔍 Search your favourite food..." className="w-full border-2 border-orange-300 rounded-xl p-4 focus:outline-none focus:border-orange-500"/>
        </div>
    );
}