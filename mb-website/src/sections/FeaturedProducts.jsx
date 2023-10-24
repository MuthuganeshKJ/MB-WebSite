import ProductCard from "../components/ProductCard"

const FeaturedProducts = () => {
  return (
    <div className="margin padding bg-blue-100 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 items-center justify-center">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

    </div>
  )
}

export default FeaturedProducts