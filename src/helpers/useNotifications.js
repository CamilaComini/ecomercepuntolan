import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useNotifications = () => {
	const notiToastSuccess = () => {
		toast.success('Producto agregado', {
			position: 'top-center',
			autoClose: 1000,
			hideProgressBar: true,
			theme: 'dark',
			transition: Slide,
		});
	};

	const notiToastCompra = () => {
		toast.warn('Su pedido se esta procesando', {
			position: 'bottom-center',
			autoClose: 1500,
			hideProgressBar: false,
			theme: 'dark',
			transition: Slide,
		});
	};

	const notiToastWarn = () => {
		toast.warn(
			'Ya se encuentra en carrito. \nSe ha modificado la cantidad seleccionada',
			{
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
				theme: 'dark',
				transition: Slide,
			}
		);
	};
	const notiToastError = () => {
		toast.error('Producto eliminado', {
			position: 'bottom-center',
			autoClose: 1000,
			hideProgressBar: true,
			theme: 'dark',
			transition: Slide,
		});
	};

	const notiToastNoDatos = () => {
		toast.error(
			'Complete y/o ingrese datos validos para realizar la compra',
			{
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				theme: 'dark',
				transition: Slide,
			}
		);
	};
	return {
		notiToastSuccess,
		notiToastWarn,
		notiToastError,
		notiToastNoDatos,
		notiToastCompra,
	};
};

export default useNotifications;