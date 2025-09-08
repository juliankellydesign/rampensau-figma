import { ryb2rgb } from 'rybitten';
import { cubes } from 'rybitten/cubes';
import { colorUtils } from 'rampensau';
window.rybittenConvert = {
    ryb2rgb: (coords, gamutName) => {
        const cubeData = cubes.get(gamutName);
        const cube = cubeData ? cubeData.cube : undefined;
        return ryb2rgb(coords, { cube });
    },
    // Also expose the available gamuts
    getAvailableGamuts: () => {
        const gamutList = {};
        cubes.forEach((value, key) => {
            gamutList[key] = `${value.title} by ${value.author} (${value.year})`;
        });
        return gamutList;
    },
    // Get the cube for a specific gamut
    getGamutCube: (gamutName) => {
        const cubeData = cubes.get(gamutName);
        return cubeData ? cubeData.cube : undefined;
    }
};
// Expose rampensau utils
window.rampensauUtils = {
    harveyHue: colorUtils.harveyHue
};
