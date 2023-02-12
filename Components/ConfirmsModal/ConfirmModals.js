import React from 'react';

const ConfirmModals = ({title,message,closeModale,sucesseceModal, modalData,confirmDelete }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>sucesseceModal( modalData)}  htmlFor="confirm-modal" className="btn">{confirmDelete }</label>
                        <button onClick={closeModale} className='btn btn-o
                        '>cencel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModals;