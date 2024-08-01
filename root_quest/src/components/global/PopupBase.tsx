// components/Popup.tsx
import { useEffect, useRef } from 'react';
import { IPopup } from '../../interfaces/IPopups';

function Popup({ onClose, children }: IPopup){
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 absolute z-50 text-hulk"> 
      <div ref={popupRef} className="rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default Popup;
