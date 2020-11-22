import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const NewsCard = ({ article, clickHandler }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    clickHandler();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const setupAuthor = (author) => {
    if (author !== null) {
      return (
        <div className="card-footer w-100 mh-25 d-flex flex-column justify-content-center align-items-center">
          <p className="card-text">
            <small className="text-muted">
              Ecrit par :
              {' '}
              <span className="text-primary">
                {article.author}
              </span>
            </small>
          </p>
        </div>
      )
    } else {
      return <></>;
    }
  }
  return (
    <>
      <div className="card w-50 d-flex justify-content-center align-items-center border text-white clickable mx-2" onClick={handleShow}>
        <div className="h-50">
          <img src={article.urlToImage} className="card-img h-100" alt="..." />
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title text-secondary">
            {article.title}
          </h5>
        </div>
        {setupAuthor(article.author)}
      </div>

      <Modal
        show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{article.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column">
              {article.description}
              <div className="d-flex justify-content-between">
                <a href={article.url} className="mt-2">
                  <button className="btn btn-secondary text-white">Voir le site</button>
                </a>
                <button className="btn btn-primary text-white" onClick={handleClose}>Fermer</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
  );
}

export default NewsCard;
