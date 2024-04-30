import { ProgressBar } from 'react-bootstrap';

export const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
            <h1>Cargando</h1>
            <ProgressBar animated now={100} variant="info" className="ms-2" style={{ width: '150px' }} />
        </div>
    );
};
