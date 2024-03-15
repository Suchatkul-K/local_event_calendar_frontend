import { useState } from 'react';
import EventLikeAndDislike from './EventLikeAndDislike';

export default function EventModalFeedback() {
  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const [input, setInput] = useState([]);
  console.log('input', input);

  const handleClickLike = (e) => {
    setLike(true);
    setDislike(false);
    setInput({ ...input, isLike: true });
  };
  const handleClickDislike = (e) => {
    setLike(false);
    setDislike(true);
    setInput({ ...input, isLike: false });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setDislike(null);
    setLike(null);
    setInput([]);
    document.getElementById('my_modal_2').close();
  };

  return (
    <div className='flex justify-end gap-4 pr-4'>
      <button
        className='btn hover:scale-105 bg-primary  text-white'
        type='button'
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        Give Feedback
      </button>

      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box '>
          <h3 className='font-bold text-xl w-fit mx-auto pb-4'>Feedback</h3>
          <div>
            {/* <p className='font-semibold pt-4 pl-2 pb-2 text-[1rem]'>
              Your feedback
            </p> */}
            <textarea
              placeholder='type here ...'
              className='textarea textarea-bordered leading-6 textarea-md w-full h-[8rem] text-[0.9rem]'
              name='content'
              value={input?.content || ''}
              onChange={handleChange}
            />
          </div>
          <div className='font-semibold text-end px-2 pt-3'>
            Do you like this Event?
          </div>
          <div
          //   className='flex gap-4 justify-end p-4'
          >
            <EventLikeAndDislike
              input={input}
              handleClickLike={handleClickLike}
              handleClickDislike={handleClickDislike}
              like={like}
              dislike={dislike}
            />
          </div>

          <div className='modal-action'>
            <div />
            <div method='dialog' className=' flex gap-4'>
              <button type='button' className='btn bg-primary text-white '>
                send
              </button>
              <button
                type='button'
                className='btn  hover:bg-red-100 focus:bg-red-200'
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
