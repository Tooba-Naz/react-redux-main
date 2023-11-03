import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Index";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "../../Components/Button/Index";
import Banner from "../../Components/Banner/Index";


const Home = () => {
    const [products, setProducts] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('Data.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const toggleFavorite = (product) => {
        if (favorites.includes(product)) {
            setFavorites(favorites.filter((item) => item !== product));
        } else {
            setFavorites([...favorites, product]);
        }
    };



    return (
        <>
            <Navbar favoritesCount={favorites.length} />
             <Banner/>
            <div className="flex items-center justify-center pt-44">
                <div className="grid grid-cols-4 gap-5">
                    {products.slice(0, showAllProducts ? products.length : 4).map((product, index) => (
                        <div key={index} className="px-2 relative">
                            <div className="flex items-center justify-center bg-[#F5F5F5] w-[270px] h-[250px] rounded relative">
                                <img src={product.image} alt={product.title} />
                                {product.discountInPercentage > 0 &&
                                    <div className="bg-[#DB4444] w-[55px] h-[26px] text-white absolute top-2 left-2">
                                        <p className="flex items-center justify-center rounded">{product.discountInPercentage}%</p>
                                    </div>
                                }
                                <div className="absolute top-2 right-2 pl-2 pt-2 bg-white h-9 w-9 rounded-full">
                                    {favorites.includes(product) ? (
                                        <span>
                                            <AiFillHeart
                                                color="red"
                                                size={'20'}
                                                className="flex items-center justify-center bottom-4"
                                                onClick={() => toggleFavorite(product)}
                                            />
                                        </span>
                                    ) : (
                                        <span>
                                            <AiOutlineHeart
                                                size={'20'}
                                                className="flex items-center justify-center"
                                                onClick={() => toggleFavorite(product)}
                                            />
                                        </span>
                                    )}
                                </div>
                            </div>
                            <h3 className="font-medium text-[16px] pt-2 font-family">{product.title}</h3>
                            <p>
                                <span className="text-[#DB4444]">${product.newPrice}</span>
                                {product.discountInPercentage > 0 &&
                                    <span className="text-[#000000] pl-3 line-through text-opacity-50"> ${product.oldPrice}</span>
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center pt-28 pb-7">
                <Button onClick={() => setShowAllProducts(!showAllProducts)}>
                    {showAllProducts ? "Show Less Products" : "View All Products"}
                </Button>
            </div>
        </>
    );
}

export default Home;
