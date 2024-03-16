import React from 'react';
import { DislikeIcon, LikeIcon } from '../../../icons';

export default function EventLikeAndDislike({
  handleClickLike,
  like,
  dislike,
  handleClickDislike,
  error,
}) {
  return (
    <>
      <div className='flex gap-4 justify-end p-4'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col items-center'>
            <button
              type='button'
              onClick={handleClickLike}

              // className='border-2 border-gray-300 rounded-[100%] p-1'
            >
              <LikeIcon fill={like ? '#0071db' : '#696969'} />{' '}
            </button>
            <span className='font-medium'>like</span>
          </div>
          <div className='flex flex-col items-center'>
            <button
              type='button'
              onClick={handleClickDislike}
              // className='border-2 border-gray-300 rounded-[100%] p-1'
            >
              <DislikeIcon fill={dislike ? '#c90000' : '#696969'} />{' '}
            </button>
            <span className='font-medium'>dislike</span>
          </div>
        </div>
      </div>
      {error?.isLike && (
        <div className='text-end w-full pr-2'>
          <small className='text-red-500 pl-[0.5rem] text-end w-full'>
            {error?.isLike}
          </small>
        </div>
      )}
    </>
  );
}
