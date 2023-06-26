import React, { useRef, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='nav flex items-center bg-yellow-400 h-20'>
      <form className="flex items-center">
        <label htmlFor="default-search" className="sr-only mr-4">Search</label>
        <input
          type="search"
          id="default-search"
          className="flex w-full p-2 pr-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-black space-x-3 ml-3"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 ml-2 space-x-3"
        >
          Search
        </button>
      </form>
      <ul className='flex items-center space-x-5 font-bold py-3 px-2 ml-40'>
        <li><a href='/' className='text-black hover:text-blue-500 pb-2'>Home</a></li>
        <li><a href='/Electronics' className='text-black hover:text-blue-500'>Electronics</a></li>
        <li><a href='/Clothes' className='text-black hover:text-blue-500'>Clothes</a></li>
        <li><a href='/Groceries' className='text-black hover:text-blue-500'>Groceries</a></li>
        <li><a href='/kids' className='text-black hover:text-blue-500'>Kids</a></li>
      </ul>
      <div className='flex items-center ml-auto mr-5'>
        <button className='bg-blue-700 rounded-xl text-white px-3 py-2 text-sm'>
          Login
        </button>
        <span className="mr-2"></span>
        <button className='bg-blue-700 rounded-xl text-white px-3 py-2 text-sm'>
          SignUp
        </button>
        <span className="mr-2"></span> 
        <div className='cursor-pointer' onClick={toggleCart}>
          <button> 
            <BsCart/> 
          </button>
        </div>
      </div>
      <div ref={ref} className={`sidebar w-1/3 h-5/6 rounded-xl absolute bg-yellow-100 right-0 top-0 font-bold transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-blue-700'>
          <AiFillCloseCircle />
        </span>
        <span className='flex item-center justify-center mt-3 text-xl'>Shopping Cart</span>
        <br></br>
        <ol className='list-decimal mx-7 font-semibold'>
          {Object.keys(cart).length === 0 && (
            <div className="m-1 text-center">No Items in Cart.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="hover:text-black">
                <div className='item flex my-5'>
                  <div className='w-2/3 font-semibold'>
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className='flex font-semibold justify-content mx-5'>
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className='my-1 mx-2  text-blue-700'
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className='my-1 mx-2  text-blue-700'
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className='flex justify-center item-center mt-20 text-xs'>
          <button className='bg-blue-700 hover:bg-blue-900 mr-3 rounded-xl text-white px-3 py-3 flex justify-center items-center h-fit w-25'>
            <a href='/Clothes'>Checkout</a>
          </button>
          <button onClick={clearCart} className='bg-blue-700 hover:bg-blue-900 mr-3 rounded-xl text-white px-3 py-3 flex justify-center items-center h-fit w-fit'>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
