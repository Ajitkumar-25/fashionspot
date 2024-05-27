import React from "react";

const Orders = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-lg title-font text-gray-500 tracking-widest">
                Fashion Spot
              </h1>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: 987654
              </h1>
              <p className="leading-relaxed mb-4">
                Your Order has been Successfully Placed
              </p>
              <div className="flex mb-4">
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Item
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Total
                </a>
              </div>

              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Tshirt baggy look</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500"> laoptop Sticker</span>
                <span className="ml-auto text-gray-900">2</span>
                <span className="ml-auto text-gray-900">899</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Hoodie black elegant</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">699</span>
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Subtotal: $306
                </span>
                <button className="flex mt-4 w-[9rem] mx-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Track Order
                </button>
                
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
