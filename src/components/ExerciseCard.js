import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Typography , Box} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <Box borderTop='4px solid #007AFF'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Button
        sx={{ml:'21px',color:'#fff',background:'#007AFF',
            fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'
        }}>
            {exercise.bodyPart}
        </Button>
        <Button
        sx={{ml:'21px',color:'#fff',background:'#5B86E5',
            fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'
        }}>
            {exercise.target}
        </Button>
        <Typography ml="21px" color="#000" fontWeight="bold"
        mt="11px" pb="10px" textDecoration="none" textTransform="capitalize" fontSize="22px">{exercise.name}</Typography>
        </Box>
    </Link>
  )
}

export default ExerciseCard