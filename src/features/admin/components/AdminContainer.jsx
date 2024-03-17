import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../hooks/useAdmin';
import EventCardGanX from '../../../global_components/EventCardGanX';
import Button from '../../../global_components/Button';
import { ArrowIcon } from '../../../icons';
import {
  createHighlight,
  deleteHighlight,
  getHighlight,
} from '../../../api/highlight';

function AdminContainer() {
  const adminObj = useAdmin();
  const navigate = useNavigate();
  const { events, loading, setLoading, fetchEvents } = adminObj;
  const [isHightLight, setIsHightLight] = useState();

  const handleAddHightLight = async (eventId) => {
    try {
      setLoading(true);
      await createHighlight(eventId);
      toast.success('Add success highlight');
      fetchEvents();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteHightLight = async (eventId) => {
    try {
      setLoading(true);
      await deleteHighlight(eventId);
      toast.success('remove highlight');
      fetchEvents();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchHightLight = async () => {
    try {
      setLoading(true);
      const hightLight = await getHighlight();
      setIsHightLight(hightLight.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHightLight();
  }, []);

  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <div className=' p-4 flex flex-col gap-4'>
      <button
        type='button'
        className='self-end flex items-center gap-2 border border-primary p-2 rounded-full text-[0.8rem] '
        onClick={() => navigate('/dashboard')}
      >
        dashboard{' '}
        <span>
          <ArrowIcon />
        </span>
      </button>
      <div className='border text-[2rem] font-semibold px-4 rounded-lg'>
        Event
      </div>
      {/* event box */}
      <div className='flex flex-col  rounded-lg p-2 gap-4 '>
        {/* event list */}

        {events?.map((event) => (
          <div className='border rounded-lg p-4 flex flex-col ' key={event.id}>
            <EventCardGanX event={event} />
            {!event.HighlightEvent ? (
              <div className='self-end pt-4'>
                <Button
                  onClick={() => handleAddHightLight({ eventId: event.id })}
                >
                  Add highlight
                </Button>
              </div>
            ) : (
              <div className='self-end pt-4'>
                <button
                  className='bg-red-500 rounded-lg px-[0.5rem] py-[0.2rem] font-medium text-white'
                  onClick={() => handleDeleteHightLight(event.id)}
                  type='button'
                  aria-label='Save'
                >
                  Remove Highlight
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminContainer;
