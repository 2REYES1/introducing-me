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
        <div className="col-sm-6 d-flex align-items-center justify-content-center project-card-title">
          <div className="row align-items-center justify-content-center">
            <p className='roboto-mono-proj-card text-center roboto-headers-proj-card'>
              {props.projectTitle}
            </p>
            <button 
              className='roboto-mono-proj-card roboto-body-text-proj-card project-card-btn' 
              onClick={handleShowModal}>
              more info  
            </button>
          </div>
        </div>

        {/* summary display*/}
        <div className="col-sm-6 d-flex align-items-center justify-content-center project-card-summary">
          <p className='row roboto-mono-proj-card align-items-center justify-content-center m-2 roboto-body-text-proj-card'>
            {props.summary}
          </p>
        </div>
      </div>

      {/* pop up to show more information */}
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.projectTitle}</h5>
              </div>

              <div className="modal-body">
                  <p>
                    more info:
                  </p>
                  {/* map through props.moreInfo to format each information. */}
                  {props.moreInfo && props.moreInfo.map((info, index) => (
                    <p key={index}># {info}</p>  // Format as a heading
                  ))}

                  <p>
                    contributions:
                  </p>
                  {/* map through props.contributions to format each contribution */}
                  {props.contributions && props.contributions.map((cont, index) => (
                    <p key={index}># {cont}</p>
                  ))}

                  <p>
                    languages and tools:
                  </p>
                  {/* map through props.languagesAndTools to format each language and tool */}
                  {props.languagesAndTools && props.languagesAndTools.map((lt, index) => (
                    <p key={index}># {lt}</p>
                  ))}
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
