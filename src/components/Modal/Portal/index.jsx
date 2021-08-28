
 import ReactDOM from 'react-dom';

 const PortalModal = ({ children }) => {
  const portal = document.querySelector('#modal-root');
  return ReactDOM.createPortal(children, portal);

 };

 export default PortalModal;