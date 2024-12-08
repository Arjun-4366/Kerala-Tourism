"use client";
import React from "react";
import Layout from "../components/layout";
import { ImBlocked } from "react-icons/im";
import { CgUnblock } from "react-icons/cg";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

function Users() {
  const [isBlocked, setIsBlocked] = useState(false);
  return (
    <Layout>
 
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Name
                </p>
              </th>

              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Contact
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <input
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Search users here..."
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">John Michael</p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  john.michael@example.com
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">8943749235</p>
              </td>
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">John Michael</p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  john.michael@example.com
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">8943749235</p>
              </td>
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">John Michael</p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  john.michael@example.com
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">8943749235</p>
              </td>
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">John Michael</p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  john.michael@example.com
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">8943749235</p>
              </td>

              <div className="flex justify-center items-center gap-4 p-2">
                {isBlocked ? (
                  <CgUnblock
                    className="text-5xl text-slate-400"
                    onClick={() => setIsBlocked(!isBlocked)}
                  />
                ) : (
                  <ImBlocked
                    className="text-4xl text-slate-400 cursor-pointer"
                    onClick={() => setIsBlocked(!isBlocked)}
                  />
                )}
                <MdOutlineDelete className="text-5xl text-slate-400 cursor-pointer" />
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Users;
