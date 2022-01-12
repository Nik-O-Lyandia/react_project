import { useRef } from 'react';
import style from './Inputs.module.css';

const Inputs = ({ onMsgSubmit }) => {
  const msgRef = useRef();

  const sendMsgBtnOnClick = () => {
    onMsgSubmit(msgRef.current.value);
    msgRef.current.value = '';
  };

  return (
    <div className={style.inputs}>
      <textarea
        className={style.msgField}
        placeholder="message..."
        ref={msgRef}
        onKeyDown={(e) => e.key === 'Enter' && e.ctrlKey && sendMsgBtnOnClick()}
      ></textarea>
      <button
        type="button"
        className={style.sendBtn}
        onClick={sendMsgBtnOnClick}
      >
        Send
      </button>
    </div>
  );
};

export default Inputs;
