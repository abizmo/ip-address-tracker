import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  background-color: var(--clr-100);
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  position: absolute;
  width: calc(100% - 48px);
`;

export const Label = styled.h2`
  color: var(--clr-400);
  font-size: var(--fs-100);
  font-weight: 700;
  letter-spacing: 0.16em;
  margin-bottom: .5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Detail = styled.p`
  font-size: var(--fs-500);
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;
`;
