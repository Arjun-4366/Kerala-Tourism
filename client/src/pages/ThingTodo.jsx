import React, { useEffect } from "react";
import Activities from "../components/ThingsTodo/Activities";
import Footer from "../components/common/Footer";
import Loading from "../components/common/Loading";

function ThingTodo({ loading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Activities />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ThingTodo;
