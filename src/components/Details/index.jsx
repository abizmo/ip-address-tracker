import { useSelector } from 'react-redux';
import { Card, Detail, Label } from './styles';

function Details() {
  const {
    ip, location, timezone, isp,
  } = useSelector(({ tracker }) => tracker);

  return (
    <Card>
      <div>
        <Label>IP Address</Label>
        <Detail>{ip}</Detail>
      </div>
      <div>
        <Label>Location</Label>
        <Detail>{location}</Detail>
      </div>
      <div>
        <Label>Timezone</Label>
        <Detail>
          UTC
          {' '}
          {timezone}
        </Detail>
      </div>
      <div>
        <Label>ISP</Label>
        <Detail>{isp}</Detail>
      </div>
    </Card>
  );
}

export default Details;
