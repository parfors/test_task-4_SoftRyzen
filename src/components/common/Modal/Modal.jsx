import SimpleSlider from 'components/Slider/Slider';
import { ModalWindow } from './Modal.styled';

export default function Modal({ HandlerClick, id }) {
  return (
    <ModalWindow>
      <SimpleSlider HandlerClick={HandlerClick} id={id} />
    </ModalWindow>
  );
}
