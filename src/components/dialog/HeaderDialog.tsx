import { MdClose } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import IconButton from "../button/IconButton";

interface HeaderDialogProps {
  onClose: () => void;
}

export default function HeaderDialog({ onClose }: HeaderDialogProps) {

  return (
  <div className="flex items-center justify-between">
    <div className="flex items-center w-20">
      <img src={logo} alt="Logo" className="w-full h-auto" />
    </div>
    <IconButton onClick={onClose} variant='gunmetal' icon={<MdClose />} />
  </div>
  );
}
  