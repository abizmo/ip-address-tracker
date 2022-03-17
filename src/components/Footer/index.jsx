import { FooterContainer, Link } from './styles';

function Footer() {
  return (
    <FooterContainer>
      Challenge by
      {' '}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</Link>
      .
      Coded by
      {' '}
      <Link href="https://www.abizmo.dev">Abián Izquierdo</Link>
      .
    </FooterContainer>
  );
}

export default Footer;
