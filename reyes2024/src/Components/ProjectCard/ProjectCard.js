import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* project card */}
      <div className='row justify-content-center align-items-center'>
        {/* project title and more info button */}
        <div className="col-sm-6 card align-items-center justify-content-center project-card-title">
          <div className='roboto-mono-proj-card'>
            {props.projectTitle}
          </div>
          <button 
            className='btn btn-primary roboto-mono-proj-card' 
            onClick={handleShowModal}>
            more info  
          </button>
        </div>

        {/* summary display*/}
        <div className="col-sm-6 d-flex align-items-center justify-content-center project-card-summary">
          <div className='row roboto-mono-proj-card align-items-center justify-content-center m-2'>
            {props.summary}
          </div>
        </div>
      </div>

      {/* pop up to show more information */}
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.projectTitle}</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{props.moreInfo}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
