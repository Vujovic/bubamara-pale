import React, { useState } from "react"
import Modal from "react-modal"

import { Card } from "./Card"
import { CloseModalButton } from "./CloseModalButton"
import Meeting from "-!svg-react-loader!../../../svg/activities/meeting.svg"

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

const RazvojGovora = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Card>
        <Meeting />
        <h2>Развој говора, комуникације и стваралаштва</h2>
        <button onClick={openModal}>Детаљније...</button>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Развој говора, комуникације и стваралаштва"
      >
        <ul>
          <strong>До три године</strong>
          <li>
            Подржавање говорне комуникације као зрелијег сазнајног оквира
            дјетета и сигналног система за учење и развој;
          </li>
          <li>
            Подстицање и богаћење говора као квалитетнијег сигналног система за
            учење и као средства за стицање сазнања, успостављање интеракције са
            окружењем;
          </li>
          <li>
            Стварање повољних услова за формирање почетних сазнања о појавама и
            појмовима у окружењу кроз практичне активности и у животном
            контексту.
          </li>
        </ul>
        <ul>
          <strong>До шест година</strong>
          <li>
            Подржавање развоја говора према развојним могућностима у погледу
            усвајања гласовне структуре говора, синтаксе и елементарних
            књижевно-језичких норми српског (матерњег) језика у усменом говору,
            богаћења рјечника и говорног искуства;
          </li>
          <li>
            Развој способности служења говором као сигналним системом за
            сазнавање и учење (постављање питања и тражења одговора), као
            средством комуницирања са околином изражавањем мисли и осјећања,
            прибављања информација о садржајима учења;
          </li>
          <li>
            Оспособљавање дјеце за служење говором као организованим симболичким
            системом (вербалним и невербалним) споразумијевања;
          </li>
          <li>
            Развој способности слушања и разумијевања говорних и других порука,
            спремности за флексибилну прераду говорних сигнала у мишљење и
            креативне говорне творевине (изражавање мисли и осјећања на
            креативан начин);
          </li>
          <li>
            Смисао за групну солидарност и сарадњу као комуникацијску врлину и
            компетенцију, оспособљеност за учествовање у акцијама групе;
          </li>
          <li>
            Развијање способности и мотива за доживљавање, разумијевање и
            коришћење умјетничких медија;
          </li>
          <li>
            Систематски утицај на стваралаштво као особину личности која је
            конструктивна, продуктивна и осјетљива на људе и ствари око себе,
            способна да машта и креативно дјелује на своје окружење;
          </li>
          <li>
            Побољшавање процеса еманципације (посебно самосталности,
            иницијативности, отворености према искуству, адаптабилности на
            изазове социјалног и материјалног окружења) активног односа према
            стварима, људима, појавама и догађајима у окружењу;
          </li>
        </ul>
        <CloseModalButton onClick={closeModal}>Затвори</CloseModalButton>
      </Modal>
    </>
  )
}

export default RazvojGovora
