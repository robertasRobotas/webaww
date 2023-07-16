import React from "react";

const form = () => {
  return (
    <div className="rounded-md bg-white px-8 pb-6 rounded-b shadow-lg duration-300  hover:bg-slate-100 border-2 border-x-stone-200">
      <div x-show="card">
        <div className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number <span className="text-red-500">*</span>
            </label>
            <input
              id="card-nr"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-[#94d4cc] shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                id="card-expiry"
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-[#94d4cc] shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                CVC <span className="text-red-500">*</span>
              </label>
              <input
                id="card-cvc"
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-[#94d4cc] shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                type="text"
                placeholder="CVC"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Name on Card <span className="text-red-500">*</span>
            </label>
            <input
              id="card-name"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-[#94d4cc] shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="card-email"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-[#94d4cc] shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="email"
              placeholder="john@company.com"
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-4">
            <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#329c8f] hover:bg-[#268277] text-white focus:outline-none focus-visible:ring-2">
              Pay $253.00
            </button>
          </div>
          <div className="text-xs text-gray-500 italic text-center">
            You will be charged $253, including $48 for VAT in Italy
          </div>
        </div>
      </div>

      <div x-show="!card" x-cloak>
        <div>
          <div className="mb-4">
            <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#329c8f] hover:bg-[#268277] text-white focus:outline-none focus-visible:ring-2">
              Pay with PayPal - $253.00
            </button>
          </div>
          <div className="text-xs text-gray-500 italic text-center">
            You will be charged $253, including $48 for VAT in Italy
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
