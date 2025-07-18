import { ryb2rgb } from 'rybitten';
import { cubes } from 'rybitten/cubes';

// Expose RYBitten functions to the global window object for the UI
(window as any).rybittenConvert = {
  ryb2rgb: (coords: [number, number, number], gamutName: string) => {
    const cubeData = cubes.get(gamutName);
    const cube = cubeData ? cubeData.cube : undefined;
    return ryb2rgb(coords, { cube });
  },
  
  // Also expose the available gamuts
  getAvailableGamuts: () => {
    const gamutList: { [key: string]: string } = {};
    cubes.forEach((value, key) => {
      gamutList[key] = `${value.title} by ${value.author} (${value.year})`;
    });
    return gamutList;
  }
};