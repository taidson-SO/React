export function ObjectivesOder({objectives}: {objectives : {color: string, progress: number}[]}): {color: string, progress: number}[] {
    
    const order = objectives.sort((a, b) => { return b.progress - a.progress });

    console.log(order);
    console.log(objectives);
    // return [objectives[0], objectives[1], objectives[2]];
    return order;
}