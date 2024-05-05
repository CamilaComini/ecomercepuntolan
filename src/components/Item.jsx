import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import { Botones } from './Botones';

export const Item = ({ id, pictureUrl, description , price, category, title }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} className="card-img" />
                <Card.Body>
                    <Card.Title>
                        {title} {category}
                    </Card.Title>
                    <Card.Subtitle>
                        Precio: $ {price}
                    </Card.Subtitle>
                    <Card.Text className="mb-1">
                        Categoria: {description}
                    </Card.Text>

                    <Button
                        className="mb-2"
                        variant="outline-secondary"
                        to={`/item/${id}`}
                        as={NavLink}
                        size="sm"
                    >
                        Info
                    </Button>
                    <Botones item={{ title,id, pictureUrl, description , price, category }} />
                </Card.Body>
            </Card>
        </>
    );
};
