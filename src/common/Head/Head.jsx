import { Children } from "react";
import { createPortal } from "react-dom";
import ExecutionEnvironment from "exenv";
import { renderToStaticMarkup } from "react-dom/server";

let aggr = {};

const Head = ({ children }) => {
  if (!ExecutionEnvironment.canUseDOM) {
    Head.collect(children);
    return null;
  }
  return createPortal(children, document.querySelector("head"));
};

Head.toStaticMarkup = () => {
  const html = Object.keys(aggr).map(key => renderToStaticMarkup(aggr[key])).join("");
  aggr = {};
  return html;
};

Head.collect = (children) => {
  Children.map(children, (c) => {
    if (c.type === "title") {
      aggr[c.type] = c;
    }
  });
};

export default Head;
