import { Divider } from "antd";
import React from "react";

export const CustomDivider = ({
  width = "50%",
  align = "center",
  className = "my-3",
  text = "",
  ...props
}) => {
  return (
    <div className="is-flex" style={{ justifyContent: align, width: "100%" }}>
      <div style={{ width }}>
        <Divider className={`${className}`} {...props}>
          {text}
        </Divider>
      </div>
    </div>
  );
};
