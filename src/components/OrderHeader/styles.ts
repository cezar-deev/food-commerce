
import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
  }

  > div {
    background: none;
    border: none;

    display: flex;
    align-Items: center;
    gap: 0.5rem;

    div {
      text-align: right;

      h3 {
        margin-bottom: 0.123rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
      }

      span {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }

    svg {
      flex-shrink: 0;
      fill: ${({ theme }) => theme.colors.white};
      width: 2.875rem;
      height: 2.875rem;
    }
  }
`
