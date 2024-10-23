import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { SpinnerComp } from './SpinnerComp';
import { handleDownload } from '../helpers/handleDownload';
import { handleShare } from '../helpers/handleShare';
import { Col, Card, Button, ButtonGroup } from 'react-bootstrap';

export const GifItem = ({title, url}) => {
  const [isLoading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  
  return (
    <Col>
      <Card className="mb-2" style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Subtitle className="text-center">
            {title}
          </Card.Subtitle>           
        </Card.Header>
        <Card.Body>
          { isLoading && ( <SpinnerComp></SpinnerComp> ) }
          <Card.Img 
            variant="top" 
            src={ url } 
            alt={ title }
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={handleImageLoad}
          />        
        </Card.Body>
        <Card.Footer>
          <ButtonGroup className="float-end">
            <Button variant="light" onClick={ () => handleDownload(title, url) } size="sm">
              Descargar
            </Button>
            <Button variant="success" onClick={ () => handleShare(title, url) } size="sm">
              Compartir
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Col>
  )
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired
};
