import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const displayStyle = {
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  width: "100%",
  border: "0",
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
        <div>
          <iframe
            src={src}
            name="standard"
            seamless
            title="standard-signage"
            style={displayStyle}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Frame;
