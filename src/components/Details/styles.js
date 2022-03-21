import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  background-color: var(--clr-100);
  border-radius: 1rem;
  bottom: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  left: 50%;
  max-width: 69.5rem;
  padding: 1.5rem;
  position: absolute;
  transform: translate(-50%, 50%);
  width: calc(100% - 48px);

  @media (min-width: 80rem) {
    align-items: stretch;
    flex-direction: row;
    gap: 0;
    padding: 2rem 0;

    &>*+* {
      border-left: 1px solid var(--clr-400);
    }
  }
`;

export const DetailContainer = styled.div`
  @media (min-width: 80rem) {
    flex: 1;
    padding: 0 2rem;
  }
`;

export const Label = styled.h2`
  color: var(--clr-400);
  font-size: var(--fs-100);
  font-weight: 700;
  letter-spacing: 0.16em;
  margin-bottom: .5rem;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 80rem) {
    text-align: left;
  }
`;

export const Detail = styled.p`
  font-size: var(--fs-500);
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;

  @media (min-width: 80rem) {
    text-align: left;
  }
`;
