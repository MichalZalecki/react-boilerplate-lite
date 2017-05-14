import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const Status = ({ status, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = status; // eslint-disable-line no-param-reassign
      return children;
    }}
  />
);

Status.propTypes = {
  status: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Status;
