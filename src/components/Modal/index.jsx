import React, { useEffect } from 'react';
import PortalModal from './Portal';
import { Overlay, Dialog } from './styles';

const Modal = ({children, open, onClose}) => {
 
  useEffect(() => {
    function onEsc (e) {
       if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);
  
  if ( !open ) return null;
//para ativar o evento onClose na div overlay
   function onOverlayClick(){
       onClose();
   };
//para encerrar o evento onClose na div Dialog do centro
   function onDialogClick(e){
     e.stopPropagation();
   };
  
    return (
      <PortalModal>
          <Overlay onClick={onOverlayClick}>
              <Dialog onClick={onDialogClick} > {children} </Dialog>
          </Overlay>
      </PortalModal>
  )
};

export default Modal;