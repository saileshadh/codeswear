import React from 'react'

function order() {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Name</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order#253612</h1>
                            <p className="leading-relaxed mb-4">Your order are here.</p>
                            <div className='flex'>
                                <span className='ml-start' >Items</span>
                                <span className='ml-auto' >Quantity</span>
                                <span className='ml-auto' >Amount</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">T-shirt</span>
                                <span className='ml-auto' >1</span>
                                <span className="ml-auto text-gray-900">899</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Bottle</span>
                                <span className='ml-auto' >5</span>
                                <span className="ml-auto text-gray-900">299</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Mouse</span>
                                <span className='ml-auto'>3</span>
                                <span className="ml-auto text-gray-900">400</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Rs 899.00</span>
                                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Confirm</button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default order