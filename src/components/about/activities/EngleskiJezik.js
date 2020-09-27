import React, { useState } from "react"
import Modal from "react-modal"

import { Card } from "./Card"
import { CloseModalButton } from "./CloseModalButton"
import Global from "-!svg-react-loader!../../../svg/activities/global.svg"

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

const EngleskiJezik = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Card>
        <Global />
        <h2>Часови енглеског језика</h2>
        <button onClick={openModal}>Детаљније...</button>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Часови енглеског језика"
      >
        <p>
          Циљ је да дјеца развију позитиван став према учењу енглеског језика, а
          знање стичу кроз игру, пјесму, кориштењем помагала за учење и
          мултимедијалних садржаја у пријатној и креативној атмосфери.
        </p>
        <ul>
          <li>
            Уити поздравити, представити се именом, рећи своју доб и адресу
            становања;
          </li>
          <li>
            Представити чланове породице, именовати просторе у кући и
            припадајући намјештај;
          </li>
          <li>
            Набројити игре и играчке којима се игра у вртићу и код куће, у игри
            и другим активностима користити појмове на енглеском језику;
          </li>
          <li>
            Учити поставити питања, затражити нешто и захвалити на добивеном,
            препознати опасну ситуацију, тражити помоћ на енглеском језику;
          </li>
          <li>
            Судјеловати у разговору: одговорити на питања која се односе на
            свакодневне активности;
          </li>
          <li>
            Учити именовати основне установе у граду (школа, вртић, болница,
            кино, пријевозна средства ... њихову функцију и занимања);
          </li>
          <li>Бројати на енглеском језику, именовати боје;</li>
          <li>
            Упознати обичаје и знаменитости Велике Британије и земаља енглеског
            говорног подручја;
          </li>
        </ul>
        <CloseModalButton onClick={closeModal}>Затвори</CloseModalButton>
      </Modal>
    </>
  )
}

export default EngleskiJezik
