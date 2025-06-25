import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-blue-50 to-pink-50 rounded-3xl shadow-2xl px-8 py-16 text-center max-w-4xl mx-auto mt-20 mb-20">
      <h1 className="text-black text-4xl sm:text-5xl font-bold mb-6">
        Subscribe for special offers
      </h1>
      <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
        Your next vacation starts here—don’t miss exclusive hotel offers.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-white placeholder-gray-400 px-6 py-3 rounded-lg border border-gray-400 w-full sm:w-auto flex-1"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Notify me
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
