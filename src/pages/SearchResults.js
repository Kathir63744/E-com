"use client"
import { useSearchParams, Link } from "react-router-dom"
import { IndianRupee } from "lucide-react"
import { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    name: "Ethnic Saree",
    salePrice: 1500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Handcrafted Vase",
    salePrice: 1200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Silver Necklace",
    salePrice: 3500,
    image: "https://via.placeholder.com/150",
  },
  // add more products here
]

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase() || ""
  const [results, setResults] = useState([])

  useEffect(() => {
    // Filter products whose name includes the search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    )
    setResults(filtered)
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <p className="text-gray-600 mb-6">
        Showing results for: "<span className="font-medium">{query}</span>"
      </p>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
              <div className="flex items-center mb-2">
                <IndianRupee size={14} />
                <span className="font-bold ml-1">{item.salePrice.toLocaleString("en-IN")}</span>
              </div>
              <Link
                to={`/product/${item.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
