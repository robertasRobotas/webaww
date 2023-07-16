import React from "react";

const services = () => {
  return (
    <div
      className="shadow-lg max-w-5xl mx-auto border-2  border-x-stone-200 rounded-md hover:bg-slate-100 duration-150"
      x-data="{ annual: true }"
    >
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-4 mt-2">
        Plans
      </h2>
      <div className="flex justify-center">
        <div className="flex items-center space-x-3 mb-8">
          <div className="text-sm text-gray-500 font-medium min-w-[120px] text-right">
            Monthly
          </div>
          <div className="relative select-none w-[44px]">
            <input
              type="checkbox"
              id="toggle"
              className="peer sr-only"
              x-model="annual"
            />
            <label className="block overflow-hidden cursor-pointer h-6 rounded-full bg-gray-400 peer-checked:bg-[#268277]">
              <span
                className="absolute bg-white block rounded-full w-5 h-5 top-0.5 left-0.5 right-1/2 transition-all duration-150 ease-out"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Pay annually</span>
            </label>
          </div>
          <div className="text-sm text-gray-500 font-medium min-w-[120px]">
            Annually <span className="text-green-500">(-20%)</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="relative col-span-full rounded-sm">
          <div
            className="absolute top-0 left-0 right-0 h-0.5 bg-[#268277]"
            aria-hidden="true"
          ></div>
          <div className="px-5 pt-5 pb-6">
            <header className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-[#268277] to-[#63b0a7] mr-3">
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                </svg>
              </div>
              <h3 className="text-lg text-gray-800 font-semibold">Plus</h3>
            </header>
            <div className="text-sm mb-2">
              Ideal for individuals that need a custom solution with custom
              tools.
            </div>
            <div className="text-gray-800 font-bold mb-4">
              <span className="text-2xl">$</span>
              <span className="text-3xl" x-text="annual ? '74' : '79'">
                74
              </span>
              <span className="text-gray-500 font-medium text-sm">/mo</span>
            </div>
            <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5  transition duration-150 ease-in-out bg-[#268277] focus:outline-none focus-visible:ring-2 hover:bg-[#268277] text-white w-full">
              Upgrade
            </button>
          </div>
          <div className="px-5 pt-4 pb-5">
            <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
              What's included
            </div>
            <ul>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Lorem ipsum dolor sit amet</div>
              </li>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Quis nostrud exercitation</div>
              </li>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Lorem ipsum dolor sit amet</div>
              </li>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Quis nostrud exercitation</div>
              </li>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Lorem ipsum dolor sit amet</div>
              </li>
              <li className="flex items-center py-1">
                <svg
                  className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <div className="text-sm">Quis nostrud exercitation</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
