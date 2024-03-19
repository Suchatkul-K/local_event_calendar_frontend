import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import EventLikeAndDislike from './EventLikeAndDislike';
import createFeedback from '../../../api/feedback';
import { validateFeedback } from '../validation/validate-feedback-event';

export default function EventModalFeedback() {
  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const { eventId } = useParams();

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
    setInput({});
    setError({});
    document.getElementById('my_modal_2').close();
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const validateError = validateFeedback(input);
      if (Object.keys(validateError).length > 0) {
        setError(validateError);
        return;
      }
      await createFeedback(eventId, input);
      toast.success('Send Feedback complete');
      document.getElementById('my_modal_2').close();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <form onSubmit={handleOnSubmit} className='flex justify-end gap-4 pr-4'>
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
            <textarea
              placeholder='type here ...'
              className='textarea textarea-bordered leading-6 textarea-md w-full h-[8rem] text-[0.9rem]'
              name='content'
              value={input?.content || ''}
              onChange={handleChange}
            />
          </div>
          {error?.content && (
            <div className='text-end w-full pr-2'>
              <small className='text-red-500 pl-[0.5rem] text-end w-full'>
                {error?.content}
              </small>
            </div>
          )}

          <div className='font-semibold text-end px-2 pt-3'>
            Do you like this Event?
          </div>
          <div>
            <EventLikeAndDislike
              input={input}
              handleClickLike={handleClickLike}
              handleClickDislike={handleClickDislike}
              like={like}
              dislike={dislike}
              error={error}
            />
          </div>

          <div className='modal-action'>
            <div />
            <div method='dialog' className=' flex gap-4'>
              <button type='submit' className='btn bg-primary text-white '>
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
    </form>
  );
}
