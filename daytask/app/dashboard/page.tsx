'use client';

import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Paper  from '@mui/material/Paper';
import MenuPopupState from '@/ui/menu';
import Avatar from '@mui/material/Avatar'; 
import Image from 'next/image';
import daytask from '@/public/daytask.png';
import AnualProgress from '@/ui/progress-cicle';
import ObjectiveProgress from '@/ui/progress-linear';
import { ObjectivesOder } from '../actions/objectivesOrder';
import CalculateAnualProgress from '../actions/CalculateAnualProgress';
import ColorPickerTitle from '../components/ui/colorPickerTitle';
import SimpleListMenu from '@/ui/select-menu';

export default function DashboardPage() {  

    
    // progress in percentage. Change value to update from the database.
    // const [progressDb, setProgress] = useState({
    //     obejective_1: 40,
    //     objective_2: 50,
    //     objective_3: 100,
    // });

    const progress = {
        obejective_1: 40,
        objective_2: 50,
        objective_3: 100,
    }
    
    
    // colors for each objective and anual progress. Change value to update dynamically.
    const [progressColor, setProgressColor] = useState({
        objective_1: "#eb4008",
        objective_2: "#eb4008",
        objective_3: "#eb4008",
        anual: "#eb4008"
    });

    const isValidHex = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

    const handleColorChange = useCallback((objective: keyof typeof progressColor) => (newColor: string) => {
        if (isValidHex(newColor)) {
        
            setProgressColor(prev => ({
                ...prev,
                [objective]: newColor
            }));
        }else{
            alert('Cor inválida: ' + newColor);
        }
    }, []
);

    const objectivesProgress = [
        {color: progressColor.objective_1, progress: progress.obejective_1}, 
        {color: progressColor.objective_2,progress:progress.objective_2}, 
        {color: progressColor.objective_3, progress: progress.objective_3}
    ];

    const objectivesOrder = ObjectivesOder({objectives: objectivesProgress});

    const anualProgress = CalculateAnualProgress({objectives: objectivesProgress});
    objectivesOrder.push({color: progressColor.anual, progress: anualProgress});

    
    return (
        <>
            <Box className='flex flex-row justify-between mx-3 mt-2 md:mx-10'>
                <Avatar alt='avatar image' src='/curriculum.png' sx={{ width:100, height:100}}/>
                <MenuPopupState/>
            </Box>
            <Box className='flex flex-col w-screen md:w-auto md:flex-row md:mx-10'>
                <Box className='w-1/2 m-auto max-w-[300px] flex-1'>
                    <Image 
                        src={daytask}
                        alt="dashboard"
                    />
                </Box>
            
                <Paper className='flex-1 m-4 p-4 h-151 w-332 align-middle' style={{backgroundColor:"var(--background)"}} elevation={3} >
                    <Box className='flex flex-row justify-between'>
                        <Box className='text-center flex-1'>
                            <AnualProgress 
                                objectives={ objectivesOrder } 
                                anual_progress={anualProgress}
                                colorChange={handleColorChange('anual')}
                                /> 
                        </Box>
                        <Box className='flex-1 flex-col w-full text-xs antialiased'>
                            <div>
                                <ColorPickerTitle title='Objetivo I' 
                                color={progressColor.objective_1}
                                onColorChange={handleColorChange('objective_1')}/>
                                <ObjectiveProgress progress={progress.obejective_1} color = {progressColor.objective_1}/>
                            </div>
                            <div>
                                <ColorPickerTitle title='Objetivo II' 
                                color={progressColor.objective_2}
                                onColorChange={handleColorChange('objective_2')}/>
                                <ObjectiveProgress progress={progress.objective_2} color={progressColor.objective_2}/>
                            </div>
                            <div>
                                <ColorPickerTitle title='Objetivo III' 
                                color={progressColor.objective_3}
                                onColorChange={handleColorChange('objective_3')}/>
                                <ObjectiveProgress progress={progress.objective_3} color={progressColor.objective_3}/>
                            </div>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Paper className='m-4 p-4' style={{backgroundColor:"var(--background)"}} elevation={3} >
                <Box className='flex flex-col w-full'>
                    <Box className='w-min'>
                        <SimpleListMenu options={["objetivo I", "Objetivo II", "Objetivo III"]}/>
                    </Box>
                </Box>
            </Paper>
      </>
    );
}