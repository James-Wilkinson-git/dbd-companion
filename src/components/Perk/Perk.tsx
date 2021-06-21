import React, { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./Perk.scss";
import { IPerk, ICharacter } from "../../containers/Perks/Perks";

export const Perk: FC<IPerk> = ({ name, description, icon, character }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="perkThumb" onClick={handleShow}>
        <span className="perkIcon">
          <img src={"/images/perks/" + icon} alt="{name}" />
        </span>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {name} - a {character?.name} perk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={"/images/perks/" + icon}
            alt="{name}"
            className="mb-3 float-left"
            width="90"
            height="90"
          />
          {description}
        </Modal.Body>
      </Modal>
    </>
  );
};
