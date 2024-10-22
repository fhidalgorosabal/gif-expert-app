import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

export const SpinnerComp = () => {
  return (
    <Row className="justify-content-md-center">
        <Col md="auto" className='my-5'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>                    
        </Col>
    </Row>
  );
};
