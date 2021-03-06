import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 34.5rem;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  border-radius: 1rem 0 0 1rem;
  flex: 1;
  font-family: var(--ff-400);
  font-size: var(--fs-400);
  line-height: 1.1em;
  letter-spacing: 0.015em;
  padding-left: 1.5rem;
  padding-right: 1rem;

  &:hover, &:focus, &:focus-visible {
    cursor: pointer;
    outline: none;
  }
`;

export const Submit = styled.button
  .attrs({ type: 'submit' })`
    background-color: var(--clr-900);
    border: none;
    border-radius: 0 1rem 1rem 0;
    height: 58px;
    width: 58px;
  
    &:hover, &:focus {
      background-color: var(--clr-700);
      cursor: pointer;
    }
  `;
