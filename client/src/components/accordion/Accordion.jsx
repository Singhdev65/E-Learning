import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"
import { AccordionSection, Container, Dropdown, Wrap } from "./styles"

export default function Accordion({ Data, handleClick }) {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data?.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p onClick={() => handleClick(item.answer)}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}
