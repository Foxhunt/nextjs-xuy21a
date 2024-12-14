import * as migration_20241209_104040 from './20241209_104040';
import * as migration_20241214_174704 from './20241214_174704';

export const migrations = [
  {
    up: migration_20241209_104040.up,
    down: migration_20241209_104040.down,
    name: '20241209_104040',
  },
  {
    up: migration_20241214_174704.up,
    down: migration_20241214_174704.down,
    name: '20241214_174704'
  },
];
