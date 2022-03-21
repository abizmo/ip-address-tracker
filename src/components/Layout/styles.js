import styled from 'styled-components';

import bgImage from 'assets/images/pattern-bg.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr min-content;
  gap: 0px 0px;
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h1`
  color: var(--clr-100);
  font-size: var(--fs-900);
  font-weight: 700;
  line-height: 1.1em;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Header = styled.div`
  background: url(${bgImage}) center/cover no-repeat;
  padding: 1.5rem 1.5rem 0;
  position: relative;

  @media (min-width: 80rem) {
    padding-top: 2rem;
  }
`;
