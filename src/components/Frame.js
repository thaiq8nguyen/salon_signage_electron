import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
const displayStyle = {
  position: "fixed",
  top: "0px",
  bottom: "0px",
  right: "0px",
  width: "100%",
  border: "none",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  zIndex: "999999",
  height: "100%"
};

const Frame = ({ src }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!src) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [src]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <iframe
          src={src}
          name="standard"
          seamless
          title="standard-signage"
          style={displayStyle}
        ></iframe>
      )}
    </div>
  );
};

export default Frame;
