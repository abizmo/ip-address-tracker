import { useSelector } from 'react-redux';
import {
  Card, Detail, DetailContainer, Label,
} from './styles';

function Details() {
  const {
    ip, location, timezone, isp,
  } = useSelector(({ tracker }) => tracker);

  return (
    <Card>
      <DetailContainer>
        <Label>IP Address</Label>
        <Detail>{ip}</Detail>
      </DetailContainer>
      <DetailContainer>
        <Label>Location</Label>
        <Detail>{location}</Detail>
      </DetailContainer>
      <DetailContainer>
        <Label>Timezone</Label>
        <Detail>
          UTC
          {' '}
          {timezone}
        </Detail>
      </DetailContainer>
      <DetailContainer>
        <Label>ISP</Label>
        <Detail>{isp}</Detail>
      </DetailContainer>
    </Card>
  );
}

export default Details;
