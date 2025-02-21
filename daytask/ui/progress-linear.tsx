import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ObjectiveProgress(props: LinearProgressProps & { value: number, color_value: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: props.color_value }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({progress, color}: {progress: number, color: string}) {
  
  return (
    <Box sx={{ width: '100%' }}>
      <ObjectiveProgress value={progress} color_value = {color}/>
    </Box>
  );
}
