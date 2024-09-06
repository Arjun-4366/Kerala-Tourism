import React, { useState } from "react";

import Help from "./Help";

function Form() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between">
      <form className="w-full md:w-4/6 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Travel Information Form
        </h2>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700">Trip Type</label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>-select-</option>
              <option>Honeymoon</option>
              <option>Family Vacation</option>
              <option>Casual Vecation</option>
              <option>Bachelor Party</option>
              <option>Adventure Tour</option>
              <option>Business Trip</option>
              <option>Team Outings</option>
              <option>Others</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700">Nationality</label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>France</option>
              <option>India</option>
              <option>China</option>
              <option>Japan</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700">Arrival Date</label>
            <input
              type="date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700">Departure Date</label>
            <input
              type="date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700">Adult Count</label>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700">Kids Count</label>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700">City of Arrival</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700">City of Departure</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mb-4 px-3">
          <label className="block text-gray-700">Comments</label>
          <textarea className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>

        <div className="text-center px-3">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
      <Help />
    </div>
  );
}

export default Form;
