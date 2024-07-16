import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <>
          
            <div className="fixed inset-0 bg-black opacity-90 z-50" onClick={onClose}></div>
            
           
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg relative  w-[1000px] h-[700px] mx-4">
                  
                    <button
                        className=" bg-red-500 absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        onClick={onClose}
                        aria-label="Close Modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    
                   
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('cart-root')
    );
};

export default Modal;
