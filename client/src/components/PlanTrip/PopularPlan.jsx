import React from "react";
import PopularPlanLists from "./PopularPlanLists";
function PopularPlan() {
  return (
    <div className="gap-4 flex flex-col items-center">
      <div className="mt-3 flex flex-col items-center">
        <h1 className="font-sans font-medium text-2xl">Our popular plans</h1>

        <nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-slate-100 shadow-md rounded-md lg:px-8 lg:py-3 mt-10 ">
          <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
            <div class="hidden lg:block">
              <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 cursor-pointer ">
                <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:text-green-600">
                  Holiday Packages
                </li>
                <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:text-green-600">
                  HoneyMoon Packages
                </li>
                <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:text-green-600">
                  Lexury Packages
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
        <PopularPlanLists/>
  <PopularPlanLists/>
  <PopularPlanLists/>
  <PopularPlanLists/>
        
        </div>

    </div>
  );
}

export default PopularPlan;
