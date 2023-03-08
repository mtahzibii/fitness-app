import { createContext, useState } from 'react';

const BodyContext = createContext();

export const BodyProvider = ({ children }) => {
 const [bodyPart, setBodyPart] = useState('all');
 const [exercises, setExercises] = useState([]);
 const [exerciseDetail, setExerciseDetail] = useState('');
 const [bodyParts, setBodyParts] = useState([]);
 const [search, setSearch] = useState('');
 const [exerciseVideos, setExerciseVideos] = useState([]);

 return (
  <BodyContext.Provider
   value={{
    bodyPart,
    setBodyPart,
    search,
    setSearch,
    exercises,
    setExercises,
    exerciseDetail,
    setExerciseDetail,
    bodyParts,
    setBodyParts,
    exerciseVideos,
    setExerciseVideos,
   }}
  >
   {children}
  </BodyContext.Provider>
 );
};

export default BodyContext;
