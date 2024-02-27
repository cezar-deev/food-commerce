import styled from "styled-components";

export const Container = styled.main`
  background : ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;

  table {
    width: 100%;
    border-spacing: 0 0 ;
    border-collapse: collapse;
  }

  th {
    padding: 0 1rem 0.5rem 1rem;

    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-align: left;

    &:nth-child(2) {
      padding-left: 2rem;
    }
  }

  td {
    padding: 1.5rem 1rem 1.5rem 1rem;
    padding-top: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};

    h4 {
      margin-bottom: 0.5rem;
      font-weight: 400;
      font-size: 1.125rem;
    }

    > span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }



`
