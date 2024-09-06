import React, { useState } from "react";
import Form from "./Form";

function PlanPage() {
  return (
    <div className="mt-40 w-full">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10">
        <h1 className="font-sans font-medium text-3xl">PLAN MY KERALA TRIP</h1>
        <h5 className="font-sans font-medium mt-2">
          Get the Best Holiday Planned by Experts!
        </h5>
        <p className="p-3 bg-lime-50 mt-3">
          Explore the list of the best tourist destinations in Kerala. Discover
          the best in Backwaters, Tea Plantations, Wildlife Sanctuaries,
          Waterfalls, Ayurveda - Yoga Centers, Cultural - Historical places in
          Kerala! Our master group can tailor make your itinerary including your
          favourite accommodation, activities and destination for bespoke Kerala
          sightseeing plan. Browse our tour packages and get free itinerary
          proposals and activity recommendations for your next Kerala visit!
        </p>
      </div>
      <Form />
    </div>
  );
}

export default PlanPage;
