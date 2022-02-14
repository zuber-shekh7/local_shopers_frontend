import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      {/* hero section */}
      <section className="grid grid-cols-1">
        <div className="grid-span-1 p-20 space-y-4 mx-auto text-center">
          <h1 className="text-indigo-500 text-5xl md:text-7xl lg:text-9xl font-extrabold">
            Local Shoppers
          </h1>
          <h4 className="text-xl md:text-3xl lg:text-5xl text-gray-600 mt-5">
            Online Store For Locals, By Locals
          </h4>
          <div>
            <Link
              href="/"
              className="inline-block py-3 px-4 text-xl hover:bg-indigo-400 bg-indigo-500 rounded-lg text-white shadow-lg"
            >
              Start selling online
            </Link>
          </div>
        </div>
      </section>
      {/* categories section */}
      <section>
        <div className="space-y-10 p-10 lg:p-20 bg-gray-100">
          <h2 className="text-center text-2xl lg:text-4xl text-black">
            Sell Across Different Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4">
            <div className="mb-5">
              <img
                className="w-full h-64 object-cover rounded-lg hover:opacity-80 cursor-pointer transition"
                src="https://media.istockphoto.com/photos/background-of-damaged-mobile-phones-a-bunch-of-broken-smartphones-picture-id1328097097?b=1&k=20&m=1328097097&s=170667a&w=0&h=BCI3sVAdkr_bRlrg8oOVEn-brmety3sImmuV0Uiy620="
                alt="Electronics Category"
              />
              <h3 className="text-3xl mt-4 text-gray-800 text-center">
                Electronics
              </h3>
            </div>
            <div className="mb-5">
              <img
                className="w-full  h-64 object-cover rounded-lg hover:opacity-80 cursor-pointer"
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Fashion Category"
              />
              <h3 className="text-3xl mt-4 text-gray-800 text-center">
                Fashion
              </h3>
            </div>
            <div className="mb-5">
              <img
                className="w-full  h-64 object-cover rounded-lg hover:opacity-80 cursor-pointer"
                src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Grocery Category"
              />
              <h3 className="text-3xl mt-4 text-gray-800 text-center">
                Grocery
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* sell online section */}
      <section>
        <section className="text-center p-20 space-y-4">
          <h2 className="text-4xl">Sell Online</h2>
          <h4 className="text-2xl text-gray-500">
            Create your online store within 10 minutes.
          </h4>
          <div>
            <Link
              href="/"
              className="inline-block py-3 px-4 text-xl hover:bg-indigo-400 bg-indigo-500 rounded-lg text-white shadow-lg"
            >
              Create your business now
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HomePage;
