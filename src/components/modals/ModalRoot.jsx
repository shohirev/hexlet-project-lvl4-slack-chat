import React from 'react';
import { useSelector } from 'react-redux';
import { getModalState } from '../../features/selectors.js';
import AddChannel from './AddChannel.jsx';
import RenameChannel from './RenameChannel.jsx';
import RemoveChannel from './RemoveChannel.jsx';

const modals = {
  addingChannel: AddChannel,
  renamingChannel: RenameChannel,
  removingChannel: RemoveChannel,
};

const ModalRoot = () => {
  const { type } = useSelector(getModalState);
  if (type) {
    const Modal = modals[type];
    return <Modal />;
  }
  return null;
};

export default ModalRoot;
