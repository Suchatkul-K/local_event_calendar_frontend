import React from 'react';
import { DislikeIcon, LikeIcon } from '../../../icons';

export default function EventFeedbackContainer({ event }) {
  const { EventFeedback } = event;

  return (
    <div className='px-[1rem] flex flex-col gap-1 pb-[2rem]'>
      <span className='font-semibold py-2 text-[1.2rem] '>EventFeedback</span>
      {EventFeedback.map((el) => (
        <div className='flex gap-2'>
          {el.isLike === true ? (
            <LikeIcon fill='#0071db' />
          ) : (
            <DislikeIcon fill='#c90000' />
          )}
          <span>{el.content}</span>
        </div>
      ))}
    </div>
  );
}
