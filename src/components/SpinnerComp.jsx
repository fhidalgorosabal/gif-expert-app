import { Row, Col, Spinner } from 'react-bootstrap';

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
