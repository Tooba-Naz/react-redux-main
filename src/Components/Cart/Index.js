import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "../Header/Index";
import { Button } from "../Button/Index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  {getCartTotal} from "../../Redux/cartSlice";
import  {removeCartItems} from "../../Redux/cartSlice";

const Cart = () => {
    const [quantities, setQuantities] = useState([0]);
    const dispatch = useDispatch();
    const {items, totalquantity, totalPrice} = useSelector((state) => state.cart);
    useEffect(()=>{
        dispatch(getCartTotal());
     },[items])

    const incrementQuantity = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
    };

    const decrementQuantity = (index) => {
        const updatedQuantities = [...quantities];
        if (updatedQuantities[index] > 0) {
            updatedQuantities[index] -= 1;
            setQuantities(updatedQuantities);
        }
    };
   
    const removeTocart = () => {
      dispatch(removeCartItems());
  }

    return (
        <>
            <NavBar />
            <div className=" ml-32  mt-10">
                <div className="w-[1170px] h-[72px] shadow grid grid-cols-4" >
                    <div> <h1 className="flex items-center justify-center mt-5"> Product</h1></div>
                    <div> <h1 className="flex items-center justify-center mt-5"> Price</h1></div>
                    <div> <h1 className="flex items-center justify-center mt-5">  Quantity</h1></div>
                </div>
                {items.map((data, index) => (
                    <div key={index}>
                    <div className="w-[1170px] h-[72px] shadow  grid grid-cols-4 mt-14" >
                        <div className="flex items-center justify-center "> <img src={data.image} alt="image" style={{width:"50px", height:"50px"}}/>
                        <h1 className="flex items-center justify-center"> {data.title}</h1>
                        </div>
                        <div> <h1 className="flex items-center justify-center mt-5"> {data.newPrice}</h1></div>
                        <div className="flex items-center justify-center mt-3"> {quantities.map((quantity, index) => (

                            <div className="w-[72px] h-[44px] ">
                                <div className="flex items-center justify-center border border-black ">

                                    <span>{data.quantity}</span>
                                    <div className="relative">
                                        <button onClick={() => incrementQuantity(index)}>
                                            <span className="absolute top-0 left-2">
                                                <IoMdArrowDropup />
                                            </span>
                                        </button>
                                        <button className={""} onClick={() => decrementQuantity(index)}>
                                            <span className="absolute bottom-0 left-2">
                                                <IoMdArrowDropdown />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))} </div>
                    </div>
                    </div>
                ))}

                <div className="grid grid-cols-2">
                    <div className="pt-7 pb-10">
                        <Link to="/products"> <Button
                            varient="allToCart"

                        >
                            Return To Products
                        </Button>
                        </Link>
                    </div>
                    <div className="flex justify-end items-end pr-48 pt-7 pb-10">
                        <Button
                            varient="allToCart"
                            className={"w-[186px]"}
                            onClick={removeTocart}
                        >
                            Remove All
                        </Button>
                    </div>

                </div>

                <div className="h-[300px] w-[400px] bg-white border border-black ">
                    <h1 className="text-xl font-semibold pt-5 pl-5">Cart Total</h1>

                    <div className="ml-3 w-[370px] border border-b-black grid grid-cols-2">
                        <div>
                            <h1 className="text-lg font-normal pt-5">Subtotal:</h1>
                        </div>
                        <div>
                            <h1 className="text-lg font-normal pt-5 ml-28 ">{totalPrice}</h1>
                        </div>
                    </div>
                    <div className="ml-3 w-[370px] border border-b-black grid grid-cols-2">
                        <div>
                            <h1 className="text-lg font-normal pt-5">Shipping:</h1>
                        </div>
                        <div>
                            <h1 className="text-lg font-normal pt-5 ml-28 ">0</h1>
                        </div>
                    </div>

                    <div className="ml-3 w-[370px]  grid grid-cols-2">
                        <div>
                            <h1 className="text-lg font-normal pt-5">Total:</h1>
                        </div>
                        <div>
                            <h1 className="text-lg font-normal pt-5 ml-28 ">{totalPrice}</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-7 pb-10">
                        <Button>Download Receipt</Button>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Cart;
