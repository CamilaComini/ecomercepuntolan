import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import { Botones } from './Botones';

export const Item = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }} onClick={() => navigate(`/item/${product.id}`)}>
            <Card.Img variant="top"  className="card-img" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Subtitle>
						Precio: $ {product.price}
				</Card.Subtitle>
                <Card.Text className="mb-1">
						Categoria: {product.category}
				</Card.Text>
                <Button
						className="mb-2"
						variant="outline-secondary"
						to={`/item/${product.id}`}
						size="sm"
					>
						Info
					</Button>
					<Botones item={product} />
            </Card.Body>
        </Card>
    );
};