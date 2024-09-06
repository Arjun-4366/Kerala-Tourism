import React, { useEffect } from "react";
import PlanPage from "../components/PlanTrip/PlanPage";
import Loading from "../components/common/Loading";

function PlanMyTrip({loading}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className>
          <PlanPage />
        </div>
      )}
    </>
  );
}

export default PlanMyTrip;
