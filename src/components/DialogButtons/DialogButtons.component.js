import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./DialogButtons.css";

function DialogButtons(props) {
  const { className, children, ...restProps } = props;

  return (
    <div {...restProps} className={classNames("DialogButtons", className)}>
      {children}
    </div>
  );
}

DialogButtons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default DialogButtons;
