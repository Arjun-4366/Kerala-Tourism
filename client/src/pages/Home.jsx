import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Main from "../components/HomePage/Main";
import Destinations from "../components/HomePage/Destinations";
import Recommended from "../components/HomePage/Recommended";
import Loading from "../components/common/Loading";
import HowToPlan from "../components/HomePage/HowToPlan";

function Home({ loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <main>
            <Main />
            <div>
              <Destinations />
              <HowToPlan/>
              {/* <Recommended /> */}
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
