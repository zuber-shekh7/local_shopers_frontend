import React from "react";
import { HiStatusOffline } from "react-icons/hi";

const OfflineContainer = () => {
  return (
    <main className="container">
      <section>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="flex justify-center">
              <HiStatusOffline className="h-32 w-32 md:h-48 md:w-48" />
            </div>
            <h1>Connect to the Internet</h1>
            <h6>You're offline. Check your connection.</h6>
            <button className="px-3 py-2 bg-indigo-600 rounded-lg text-white uppercase hover:bg-indigo-700">
              retry
            </button>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
};

export default OfflineContainer;
