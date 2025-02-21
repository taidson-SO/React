import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress, {
  circularProgressClasses
} from '@mui/material/CircularProgress';
import ColorPickerTitle from '@/app/components/ui/colorPickerTitle';



// Inspired by the former Facebook spinners.
export default function AnualCircularProgress({objectives, anual_progress, colorChange}: {objectives: {color: string, progress: number}[], anual_progress: number, colorChange: (color: string) => void}) {
    
    const [displayProgress, setDisplay] = React.useState(false);
    
    const anualProgress = anual_progress;
    const size_lg = 80;
    const size_sm = size_lg*0.84;
    const move_center_axis = (size_lg- size_sm)/2;

    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant="determinate"
                    sx={() => ({
                        color: "#ccc",
                    })}
                    size={size_lg}
                    thickness={4}
                    value={100}
                /> 

                {displayProgress && (

                   <CircularProgress
                   variant="determinate"
                   sx={() => ({
                       color: "#aaa",
                       position: 'absolute',
                       left: move_center_axis,
                       top: move_center_axis,
                       [`& .${circularProgressClasses.circle}`]: {
                           strokeLinecap: 'round',
                        },
                    })}
                    size={size_sm}
                    thickness={4}
                    value={100}
                    />
                )}
                    
                    {objectives.map((objective, index) => (
                        objective.color != objectives[objectives.length -1].color && displayProgress && (
                            <CircularProgress
                            key={index}
                            variant="determinate"
                            sx={() => ({
                                color: objective.color,
                                position: 'absolute',
                                left: move_center_axis,
                                top: move_center_axis,
                                [`& .${circularProgressClasses.circle}`]: {
                                    strokeLinecap: 'round',
                                },
                            })}
                            size={size_sm}
                            thickness={4}
                            value={objective.progress}
                            />
                        )
                    ))}
                


                <CircularProgress
                    variant="determinate"
                    sx={() => ({
                        color: objectives[objectives.length - 1].color,
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                    },
                    })}
                    size={size_lg}
                    thickness={4}
                    value={anualProgress}
                    />

                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                    variant="caption"
                    component="div"
                    onDoubleClick={() => displayProgress ? setDisplay(false) : setDisplay(true)}
                    sx={{ color: 'var(--foreground)' }}
                    >{`${anualProgress}%`}</Typography>
                </Box>
            </Box>
            <Box>

                <ColorPickerTitle 
                    title='Anual'
                    color={objectives[objectives.length -1].color}
                    onColorChange={colorChange}
                />
            </Box>
        </>
    );
}

