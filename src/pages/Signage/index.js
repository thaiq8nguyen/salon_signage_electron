import React, { useEffect, useState } from "react";
import { getHours, getMinutes } from "date-fns";
import Frame from "../../components/Frame";
const Signage = () => {
  const [src, setSrc] = useState(
    "https://salon-signage-fe.herokuapp.com/signage"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (getHours(now) === 18 && getMinutes(now) === 2) {
        setSrc("");
        setSrc("https://salon-signage-fe.herokuapp.com/signage");
      }
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Frame src={src} />
    </>
  );
};

export default Signage;
