import { PropTypes } from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { SpinnerComp } from './SpinnerComp';
import { Container, Row } from 'react-bootstrap';

export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <Container>
            <h3 className="my-3">{ category.toString().toUpperCase() }</h3>
            { isLoading && ( <SpinnerComp></SpinnerComp> ) }
            <Row>
                { 
                    images.map(image => ( 
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        /> 
                    )) 
                }
            </Row>
        </Container>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
