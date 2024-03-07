import { MapContext } from '../context/mapContext';
import { useContext } from 'react';

export default function useMapContext() {
  return useContext(MapContext);
}
