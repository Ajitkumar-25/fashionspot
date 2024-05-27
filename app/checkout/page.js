import React from "react";

const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">Shipping Details</h2>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address">Address</label>
                  <input id="address" placeholder="Enter your address" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city">City</label>
                  <input id="city" placeholder="Enter your city" />
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    <label htmlFor="state">State</label>
                    <input id="state" placeholder="Enter your state" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="zip">Zip</label>
                    <input id="zip" placeholder="Enter your zip code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">Order Summary</h2>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>$179.94</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p>$5.99</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Taxes</p>
                  <p>$14.40</p>
                </div>

                <div className="flex items-center justify-between font-bold">
                  <p>Total</p>
                  <p>$200.33</p>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <input
                    className="flex-1"
                    placeholder="Promo code"
                    type="text"
                  />
                  <button className="w-full flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-1 text-base font-medium text-white shadow-sm hover:bg-red-700">
                    Apply
                  </button>
                </div>
                <button className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
