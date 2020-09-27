import React, { useState } from "react"
import Modal from "react-modal"

import { Card } from "./Card"
import { CloseModalButton } from "./CloseModalButton"
import Art from "-!svg-react-loader!../../../svg/activities/art.svg"

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "1024px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const LikovnaRadionica = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Card>
        <Art />
        <h2>Ликовна радионица</h2>
        <button onClick={openModal}>Детаљније...</button>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Ликовна радионица"
      >
        <p>
          Играње бојама и облицима утиче на подсвест дјетета и изграђивање
          емоционалне интелигенције.
        </p>
        <ul>
          <li>
            Цртање им омогућава да се слободно изражавају, што је од великог
            значаја у периоду док још не могу ријечима да искажу све мисли и
            осећања;
          </li>
          <li>
            Бавећи се ликовним радом дјеца вјежбају фину моторику шаке, вежбају
            пажњу и концентрацију, стичу осећај за склад боја, а кроз
            експерименталне и научне радионице постају прави мали мисионари
            науке.
          </li>
        </ul>
        <CloseModalButton onClick={closeModal}>Затвори</CloseModalButton>
      </Modal>
    </>
  )
}

export default LikovnaRadionica
