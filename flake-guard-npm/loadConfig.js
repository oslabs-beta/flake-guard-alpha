const path = require('path');
const fs = require('fs');

/* This function parses the default config object and then overrides the default with any user-designated properties */
function loadConfig() {
  const defaultConfigPath = path.join(
    __dirname,
    './default.json'
  );
  let config = JSON.parse(
    fs.readFileSync(defaultConfigPath, 'utf8')
  );

  // Override with user's config settings if available
  const userConfigPath = path.join(process.cwd(), 'fg.config.json');
  if (fs.existsSync(userConfigPath)) {
    const externalConfig = JSON.parse(
      fs.readFileSync(userConfigPath, 'utf8')
    );
    config = {...config, ...externalConfig};
  }

  return config;
}

module.exports = { loadConfig };