import { defineConfig, Options } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';

function validateDbConfig(config: Options): asserts config is Options {
  const requiredFields: (keyof Options)[] = [
    'host',
    'port',
    'user',
    'password',
    'dbName',
  ];

  for (const field of requiredFields) {
    if (!config[field]) {
      throw new Error(`Missing required database configuration: ${field}`);
    }
  }

  if (isNaN(config.port)) {
    throw new Error('Database port must be a valid number');
  }
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const dbConfig: Options = {
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
};

validateDbConfig(dbConfig);

export default defineConfig({
  ...dbConfig,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: isDevelopment,
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator, EntityGenerator, SeedManager],
});
