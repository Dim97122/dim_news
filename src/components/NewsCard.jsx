import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const NewsCard = ({ article }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setupAuthor = (author) => {
    if (author !== null) {
      return (
        <p className="card-text">
          <small className="text-muted">
            Ecrit par :
            {' '}
            <span className="text-primary">
              {article.author}
            </span>
          </small>
        </p>
      )
    } else {
      return <></>;
    }
  }
  return (
    <>
      <div className="card w-50 d-flex justify-content-center align-items-center border bg-dark text-white clickable mx-2" onClick={handleShow}>
        <div className="h-50">
          <img src={article.urlToImage} className="card-img h-100" alt="..." />
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title text-primary">
            {article.title}
          </h5>
        </div>
        <div className="card-footer d-flex flex-column justify-content-center align-items-center">
          {setupAuthor(article.author)}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
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
                <button className="btn btn-outline-primary" onClick>Fermer</button>
              </div>

            </div>
          </Modal.Body>
        </Modal>
      </>
  );
}

export default NewsCard;
