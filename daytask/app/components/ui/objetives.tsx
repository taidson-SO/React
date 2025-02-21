import { useCallback, useState } from "react";



export default function Objective({objective}: {
    objective: {
        title: string,
        color: string, 
        progress: number,
        status: boolean
    },
    }) {
    
    const [progress, setProgress] = useState(objective.progress);
    const [color, setColor] = useState(objective.color);
    const [status, setStatus] = useState(objective.status);
    
    const handleColorChange = useCallback((newColor: string) => {
        const isValidHex = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color);
            if (isValidHex(newColor)) {
                setColor(newColor);
            } else {
                alert('Cor inválida: ' + newColor);
            }
        }, []
    );

    const handleStatusChange = useCallback((newStatus: boolean) => {
        setStatus(newStatus);
    }, []
);

    const handleProgressChange = useCallback((newProgress: number) => {
        setProgress(newProgress);
    }, []
);

    handleColorChange(color);
    handleStatusChange(status);
    handleProgressChange(progress);

    

    return objective;
}