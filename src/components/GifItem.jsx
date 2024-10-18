import { PropTypes } from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const GifItem = ({title, url}) => {
  return (
    <Col>
      <Card className="mb-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ url } alt={ title }/>
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          {/* TODO: <Button variant="primary">Guardar</Button> */}
        </Card.Body>
      </Card>
    </Col>
  )
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired
};
