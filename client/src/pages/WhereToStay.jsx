import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Accommodations from "../components/WhereToStay/Accommodations";
import Loading from "../components/common/Loading";

function WhereToStay({ loading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Accommodations />
          <Footer />
        </div>
      )}
    </>
  );
}

export default WhereToStay;
