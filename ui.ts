import { ryb2rgb } from 'rybitten';
import { cubes } from 'rybitten/cubes';
import { utils } from 'rampensau';

// Define the rybittenConvert interface
interface RybittenConvert {
  ryb2rgb: (coords: [number, number, number], gamutName: string) => number[];
  getAvailableGamuts: () => { [key: string]: string };
}

// Define the rampensau utils interface  
interface RampensauUtils {
  harveyHue: (h: number) => number;
}

// Expose RYBitten functions to the global window object for the UI
declare global {
  interface Window {
    rybittenConvert: RybittenConvert;
    rampensauUtils: RampensauUtils;
  }
}

window.rybittenConvert = {
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

// Expose rampensau utils
window.rampensauUtils = {
  harveyHue: utils.harveyHue
};