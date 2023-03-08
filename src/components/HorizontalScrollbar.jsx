import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
 const { scrollPrev } = useContext(VisibilityContext);

 return (
  <Typography onClick={() => scrollPrev()} className='right-arrow'>
   <img src={LeftArrowIcon} alt='right-arrow' />
  </Typography>
 );
};

const RightArrow = () => {
 const { scrollNext } = useContext(VisibilityContext);

 return (
  <Typography onClick={() => scrollNext()} className='left-arrow'>
   <img src={RightArrowIcon} alt='right-arrow' />
  </Typography>
 );
};

const HorizontalScrollbar = ({ data }) => {
 return (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
   {data.map((item) => (
    <Box
     sx={{ m: '10px 40px' }}
     key={item.id || item}
     //  itemId={item.id || item}
     //  title={item.id || item}
    >
     <BodyPart item={item} />
    </Box>
   ))}
  </ScrollMenu>
 );
};

export default HorizontalScrollbar;
