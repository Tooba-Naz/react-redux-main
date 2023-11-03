import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavBar from "../../Components/Header/Index";
import { Button } from "../../Components/Button/Index";
import {addItemToCart} from "../../Redux/cartSlice";
import { moveAll } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";


const Products = ({ favoritesCount }) => {

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch =useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Data.json');
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);
    const handleAddToCart = (product) => {
        dispatch(addItemToCart (product));
      };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleMoveAllToCart = () => {
        filteredProducts.forEach((product) => {
          dispatch(addItemToCart(product));
        });
      };


    return (
        <><NavBar favoritesCount={favoritesCount} setSearchQuery={setSearchQuery} />
            <div className="grid grid-cols-2 pt-14">
                <div className="flex items-start justify-start">
                    <h1 className="font-normal text-[20px] pl-44">Total Product ({products.length})</h1>
                </div>
                <div className="flex items-end justify-end pr-20">
                    <Button
                        varient="allToCart"
                        onClick={handleMoveAllToCart}
                    >
                        Move All To Cart
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center pt-6 pb-7">
                <div className="grid grid-cols-4 gap-5">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="px-2 relative pt-9">
                            <div className="flex items-center justify-center bg-[#F5F5F5] w-[270px] h-[200px] rounded relative">
                                <img src={product.image} alt={product.title} />
                                {product.discountInPercentage > 0 &&
                                    <div className="bg-[#DB4444] w-[55px] h-[26px] text-white absolute top-2 left-2">
                                        <p className="flex items-center justify-center rounded">{product.discountInPercentage}%</p>
                                    </div>
                                }
                            </div>
                            <div>
                                <Button
                                    varient="addToCart"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <AiOutlineShoppingCart size={'20'} className="mr-3" />
                                    Add To Cart
                                </Button>
                            </div>
                            <h3 className="font-medium text-[16px] pt-2">{product.title}</h3>
                            <p>
                                <span className="text-[#DB4444]">${product.newPrice}</span>
                                {product.discountInPercentage > 0 &&
                                    <span className="text-[#000000] pl-3 line-through text-opacity-50"> ${product.oldPrice}</span>
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div></>
    );
}

export default Products;