import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ position = "top-right", autoClose = 2500 }) => {
    return (
        <ToastContainer
            position={position}
            autoClose={autoClose}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme='dark'
        />
    );
};

Notification.propTypes = {
    position: PropTypes.string,
    autoClose: PropTypes.number
};

export default Notification;