import styled from '@emotion/styled'
import { Mq } from '../styles/settings/theme'

const mdFontSize = (props) => {
  if (props.largeText) return '1.1875rem'
  if (props.smallText) return '0.9375rem'

  return '1.0625rem'
}

const mdLineHeight = (props) => {
  if (props.largeText) return '1.9375rem'
  if (props.smallText) return '1.5625rem'

  return '1.6875rem'
}

export const Paragraph = styled.p`
  margin-bottom: ${(props) => (props.noMargin ? '0' : '1rem')};
  font-size: ${(props) => (props.largeText ? '1.0625rem' : '0.9375rem')};
  line-height: ${(props) => (props.largeText ? '1.6875rem' : '1.5625rem')};
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};

  ${Mq.md} {
    font-size: ${mdFontSize};
    line-height: ${mdLineHeight};
  }
`

export const H1 = styled.h1`
  font-size: 1.7rem;
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};

  ${Mq.md} {
    font-size: 2.6rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.4rem;
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};

  ${Mq.md} {
    font-size: 2rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};

  ${Mq.md} {
    font-size: 1.75rem;
  }
`

export const H4 = styled.h4`
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};
  font-size: 1rem;

  ${Mq.md} {
    font-size: 1.2rem;
  }
`

export const H5 = styled.h5`
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};
  font-size: 0.8rem;

  ${Mq.md} {
    font-size: 1rem;
  }
`

export const H6 = styled.h6`
  color: ${(props) => (props.whiteText ? props.theme.colors.white : props.theme.colors.black)};
  font-size: 0.6rem;

  ${Mq.md} {
    font-size: 0.8rem;
  }
`
