import React, { useState } from "react"
import Modal from "react-modal"

import { Card } from "./Card"
import { CloseModalButton } from "./CloseModalButton"
import Song from "-!svg-react-loader!../../../svg/activities/song.svg"

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

const MuzikaPles = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Card>
        <Song />
        <h2>Музика и плес</h2>
        <button onClick={openModal}>Детаљније...</button>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Музика и плес"
      >
        <p>
          Предшколско детињство је период развоја свих потенцијала и дjечје
          потребе за покретом и игром. Дијете кроз покрет и плес изражава своју
          потребу за кретањем, креативношћу, осећај за ритам , темпо,музику.
          Кроз игру и покрет дијете стиче и богати разноврсна искуства, овладава
          простором, његује сопствени сензибилитет, сарађује са другима и
          развија своју креативност и машту.
        </p>
        <ul>
          <li>
            Кроз плесне активности развијати позитивну слику о себи, својим
            могућностима владања простором;
          </li>
          <li>Задовољавање дјечије потребе за кретањем;</li>
          <li>Развој плесне културе код дјеце;</li>
          <li>Увођење различитих облика кретања са и без музике;</li>
          <li>Развој оријентације у простору;</li>
          <li>Развој и координација покрета;</li>
          <li>Развијање и неговање плесног бон-тона;</li>
          <li>Развој сарадње и толеранције;</li>
        </ul>
        <CloseModalButton onClick={closeModal}>Затвори</CloseModalButton>
      </Modal>
    </>
  )
}

export default MuzikaPles
