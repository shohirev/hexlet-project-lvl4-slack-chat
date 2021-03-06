import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSocketAPI } from '../../hooks/index.jsx';
import { getModalState } from '../../features/selectors.js';

const RemoveChannel = ({ onHide }) => {
  const { t } = useTranslation();
  const { removeChannel } = useSocketAPI();

  const { id } = useSelector(getModalState).modalProps;

  const handleSubmit = () => {
    onHide();
    removeChannel({ id });
  };

  return (
    <Modal show centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.remove.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-around">
        <p className="lead">{t('modals.remove.insurance')}</p>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="mr-2"
            onClick={onHide}
          >
            {t('modals.remove.cancelBtn')}
          </Button>
          <Button variant="danger" type="submit" onClick={handleSubmit}>
            {t('modals.remove.removeBtn')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
