import {
  Button,
  CardContainer,
  CardDescription,
  CardTitle,
  ButtonContainer
} from "./styles"

export default function Card(props) {
  const { Icon, cardTitle, cardDescription, buttonLabel } = props
  return (
    <CardContainer>
      {Icon && <Icon />}
      <CardTitle>{cardTitle}</CardTitle>
      <CardDescription>{cardDescription}</CardDescription>
      <ButtonContainer>
        <Button>Mark as Done</Button>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </CardContainer>
  )
}
