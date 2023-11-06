import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input/Index";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../Redux/cartSlice";
import { getLike } from "../../Redux/cartSlice";

const NavBar = ({ favoritesCount, setSearchQuery }) => {
    const { items, totalquantity,fav, totalLike } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [items])
    useEffect(() => {
        dispatch(getLike());
    }, [fav])
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <header>
            <nav>
                <div className="shadow grid grid-cols-3">
                    <div className="h-10 flex items-center justify-center pr-20 pt-5">
                        <h1 className="text-xl font-bold">Exclusive</h1>
                    </div>
                    <div>
                        <div className="flex h-16 px-10 items-center">
                            <div className="flex space-x-4 items-center">
                                <Link className="text-black" to={'/'}>
                                    Home
                                </Link>
                                <Link className="text-black pl-5" to={'/products'}>
                                    Products
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 relative flex flex-wrap items-stretch">
                        <Input
                            id={'search'}
                            type={'search'}
                            placeholder={'What are you looking for?'}
                            varient={"Primary"}
                            onChange={handleSearch}
                        />
                        <button>
                            <div className="absolute inset-y-0 left-0 flex pl-52 items-center pointer-events-none">
                                <BsSearch />
                            </div>
                        </button>
                        <div className="pl-10 pt-2 relative">
                            <div className="flex items-center space-x-1">
                                <AiOutlineHeart size={'25'} />
                                <span className="bg-red-500 h-4 w-4 text-sm rounded-full text-white flex items-center justify-center absolute top-1 right-[-4px]">
                                {totalLike}
                                </span>
                            </div>
                        </div>
                        <div className="pl-8 pt-2">
                            <Link to={'/cart'}>  <AiOutlineShoppingCart size={'25'} />
                                <span className="bg-red-500 h-4 w-4 text-sm rounded-full text-white flex items-center justify-center absolute top-5 ml-4">
                                    {totalquantity}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
