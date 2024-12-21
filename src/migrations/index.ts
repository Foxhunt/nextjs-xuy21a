import * as migration_20241221_022339_migration from './20241221_022339_migration';

export const migrations = [
  {
    up: migration_20241221_022339_migration.up,
    down: migration_20241221_022339_migration.down,
    name: '20241221_022339_migration'
  },
];
