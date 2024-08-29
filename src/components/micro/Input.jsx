import React from "react";
import Search from "../../../public/icons/search";

export default function Input() {
  return (
    <>
      <div className="py-6">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
            <div className="flex justify-center items-center">
              <Search />
            </div>
          </div>
          <input
            type="text"
            name="input"
            id="input"
            className="block h-11 w-[32rem] rounded-md border-0 py-1.5 pr-20 dark:bg-[#262626] text-gray-900 text-lg px-10 ring-1 ring-gray-300 focus:ring-tersier focus:text-tersier focus:outline-none focus:dark:ring-tersier focus:dark:text-white dark:ring-0"
            placeholder="search"
          />
        </div>
      </div>
    </>
  );
}
