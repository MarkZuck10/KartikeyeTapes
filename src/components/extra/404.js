import { Result } from "antd";
import React from "react";
const NotFound = () => {
  return (
    <div>
      <Result status={404} title="404 - Not Found" />
    </div>
  );
};
export default NotFound;