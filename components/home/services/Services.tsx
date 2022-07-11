import * as S from './Services.styles'
import Accordion from './Accordion'

const Services = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.InnerContainer spaceAsMargin>
          <S.Title>
            Furrow is an integrated, full-service creative studio offering video production, creative development, and
            post-production services.
          </S.Title>
          <S.Description>
            Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling. Whether
            it’s working directly with you, an agency partner, or putting the finishing touches on something special,
            we’re ready to dig in and get our hands dirty—are you?
          </S.Description>
        </S.InnerContainer>
      </S.LeftSide>
      <S.RightSide>
        <S.InnerContainer spaceAsMargin>
          <Accordion />
        </S.InnerContainer>
      </S.RightSide>
    </S.Container>
  )
}

export default Services
