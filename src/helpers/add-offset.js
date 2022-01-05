export function addOffset(map){
    console.log('obset');
    const offsetY = map.getSize().y * 0.23;
    map.panBy([0,-offsetY],{animate:false})
}