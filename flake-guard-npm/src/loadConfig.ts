import {ConfigObj} from './types';
import * as path from 'path';
import * as fs from 'fs';

/* This function parses the default config object and then overrides the default with any user-designated properties */
export function loadConfig(): ConfigObj {
  const defaultConfigPath: string = path.join(
    __dirname,
    '../config/default.json'
  );
  let config: ConfigObj = JSON.parse(
    fs.readFileSync(defaultConfigPath, 'utf8')
  );

  // Override with user's config settings if available
  const userConfigPath: string = path.join(process.cwd(), 'fg.config.json');
  if (fs.existsSync(userConfigPath)) {
    const externalConfig: object = JSON.parse(
      fs.readFileSync(userConfigPath, 'utf8')
    );
    config = {...config, ...externalConfig};
  }

  return config;
}
