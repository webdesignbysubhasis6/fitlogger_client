import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/arrow.png';
import LeftArrowIcon from '../assets/icons/leftArrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow"
    display='flex'
    alignItems='center'
    sx={{cursor:"pointer"}}>
      <img src={LeftArrowIcon} alt="right-arrow"/>
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow" display='flex'
    alignItems='center'
    sx={{cursor:"pointer"}}>
      <img src={RightArrowIcon} alt="right-arrow" cursor='pointer' />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
    return (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 20px"
      >
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    ))}
  </ScrollMenu>
)}

export default HorizontalScrollbar;