import React from 'react'

function Checkout() {
    return (
        <div m-auto>
            <h1 className='font-bold text-3xl flex justify-center m-6'>Checkout<br></br>
            </h1>
            <div className='flex text-2xl justify-center space-x-20'>
                <div class="relative mb-4 ">
                    <label for="email" class="leading-7 text-xl ">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-xl">Phone</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

            </div>
            <div className='flex text-2xl justify-center space-x-20'>
                <div class="relative mb-4 ">
                    <label for="email" class="leading-7 text-xl ">Address</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-xl">Phone</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

            </div>

        </div>
    )
}

export default Checkout