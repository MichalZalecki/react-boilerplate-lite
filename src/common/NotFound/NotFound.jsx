import React from "react";
import Status from "../Status/Status";

const NotFound = () => (
  <Status status={404}>
    <div>
      <h1>Not Found</h1>
    </div>
  </Status>
);

export default NotFound;
