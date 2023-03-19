import styled from "styled-components"
import { Accordion, Card, ProgressBar } from "../components"
import { DataFromFAQ } from "../mockData/Data"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const ContainerTitle = styled.h3`
  font-size: 21px;
  text-align: center;
  color: var(--color-primary);
  padding: 2rem 0rem;
`
const ContainerDescription = styled.p`
  color: var(--color-light);
  font-size: 16px;
  text-align: center;
`

const Title = styled.div`
  margin: 2.5rem 0;
  width: 100%;
`

export default function Roadmap() {
  return (
    <Container>
      <Title>
        <ContainerTitle>
          Complete React Developer Roadmap in 2023
        </ContainerTitle>
        <ContainerDescription>
          Step by step guide t become a React developer by learning the
          important topics
        </ContainerDescription>
      </Title>

      <Card
        cardTitle='Phase 1'
        cardDescription='Make your PC ready to start your React Journey'
        buttonLabel='View Guide'
      />
      <Card
        cardTitle='Phase 1'
        cardDescription='Make your PC ready to start your React Journey'
        buttonLabel='View Guide'
      />
      <ProgressBar />

      <Accordion Data={DataFromFAQ} handleClick={() => null} />
    </Container>
  )
}
