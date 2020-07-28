import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Dialog, DialogButtons, Button } from "components";
import "./WinDialog.css";

function WinDialog(props) {
  const { className, ...restProps } = props;

  return (
    <Dialog
      {...restProps}
      className={classNames("WinDialog", className)}
      title={<h1 className="WinDialog__Title">You won!</h1>}
    >
      <DialogButtons>
        <Button variant="primary">Play Again</Button>
        <Button variant="primary" size="big">
          Exit
        </Button>
      </DialogButtons>
    </Dialog>
  );
}

WinDialog.propTypes = {
  className: PropTypes.string,
};

export default WinDialog;
