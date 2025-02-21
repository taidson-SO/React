export default function CalculateAnualProgress({objectives}: {objectives: {color: string, progress: number}[]}): number {

    let progress = 0;
    
    objectives.forEach(objective => {
        progress += objective.progress/objectives.length;
    });
    
    return parseFloat(progress.toPrecision(3));
}