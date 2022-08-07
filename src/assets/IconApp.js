import React from "react";
import imge from "../assets/logo192.png";

export default function IconApp(props) {
  return (
    <div>
      <img src={imge} alt="Icon" width={35} className={props.visible +"mx-2"} />
    </div>
  );
}
