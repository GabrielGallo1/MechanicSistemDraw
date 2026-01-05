import { useState } from 'react';
import Background from './components/Background';
import ModalClient from './components/modals/modalRegisterClient';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Background onOpenModal={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <ModalClient onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default App;
