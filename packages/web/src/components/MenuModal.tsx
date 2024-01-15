import { Menu } from "../common/types";
import Modal from "react-modal";

interface MenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  menu: Menu;
}

const MenuModal = ({ isOpen, onRequestClose, menu }: MenuModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Menu Details Modal"
      className="menu-modal"
      overlayClassName="menu-modal-overlay"
    >
      <div>
        <h2>{menu?.name}</h2>
        <p>Price: ${menu?.fullPrice}</p>
      </div>
    </Modal>
  );
};

export default MenuModal;
