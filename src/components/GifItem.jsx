import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { SpinnerComp } from './SpinnerComp';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const GifItem = ({title, url}) => {
  const [isLoading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  
  return (
    <Col>
      <Card className="mb-2" style={{ width: '18rem' }}>
        { isLoading && ( <SpinnerComp></SpinnerComp> ) }
        <Card.Img 
          variant="top" 
          src={ url } 
          alt={ title }
          style={{ display: isLoading ? 'none' : 'block' }}
          onLoad={handleImageLoad}
        />
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
