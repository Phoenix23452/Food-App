import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50';
const OVERLAY_STYLES = 'fixed inset-0 bg-black opacity-70 z-50';

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div className={OVERLAY_STYLES} />
      <div className={MODAL_STYLES}>
        <button className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart_root')
  );
}