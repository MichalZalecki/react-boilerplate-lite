import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const RedirectWithStatus = ({ status, from, to }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = status; // eslint-disable-line no-param-reassign
      return <Redirect from={from} to={to} />;
    }}
  />
);

RedirectWithStatus.propTypes = {
  status: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default RedirectWithStatus;
