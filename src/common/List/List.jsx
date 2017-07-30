import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const { items } = props;
  return (
    items.map(item => <li key={item}><a href={`https://github.com/${item}`}>{item}</a></li>)
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
