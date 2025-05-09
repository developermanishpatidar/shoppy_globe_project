import axios from "axios";
import { useEffect, useState } from "react";
import '../style.css'
import ProductsItem from "./ProductsItem";

const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('');

    // Call Api to get product detail
    useEffect(()=> {
        const getProducts = async () => {
            try {
                let resp =  await axios.get("https://dummyjson.com/products")
                setProducts(resp.data.products)
            } catch (error) {
                console.log(error)
            }    
        }
        getProducts();
    },[])

    // Filter the product data using title 
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
        return matchesSearch;
    });

    return (
        <>
            <input
                type="text"
                placeholder="Search by product title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => <ProductsItem key={product.id} product={product} />)
                    ) : (
                    <p>No Products Found.</p>
                )}
            </div>
        </>
    );
}

export default ProductsList;