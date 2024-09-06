import React, { useEffect } from "react";
import ExperienceKerala from "../components/ExperienceKerala/ExperienceKerala";
import Footer from "../components/common/Footer";
import Loading from "../components/common/Loading";

function Experience({loading}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
      <ExperienceKerala />
      <Footer />
    </div>
      )}
    </>

  );
}

export default Experience;
