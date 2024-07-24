import { ConfigObj } from "./types";
import * as path from 'path';
import * as fs from 'fs';

describe("ConfigObj Interface", () => {
  it("should create a valid ConfigObj", () => {
    const configObj: ConfigObj = {
      runs: 5,
      user: "testUser",
      apiKey: "abc123",
    };

    expect(configObj.runs).toBe(5);
    expect(configObj.user).toBe("testUser");
    expect(configObj.apiKey).toBe("abc123");
  });
});

describe("Load Config", () => {
  let config: ConfigObj;
  let defaultConfigPath: string;
  let userConfigPath: string;

  beforeAll(() => {
    defaultConfigPath = path.join(__dirname, '../config/default.json');
    userConfigPath = path.join(process.cwd(), 'fg.config.json');
    config = JSON.parse(fs.readFileSync(defaultConfigPath, 'utf8'));
  });

  it("should successfully load the config", () => {
    expect(defaultConfigPath).toBeTruthy();
    expect(config).toBeTruthy();
  });

  describe("Overrides default config obj with user changes", () => {
    beforeAll(() => {
      if (fs.existsSync(userConfigPath)) {
        const externalConfig: object = JSON.parse(
          fs.readFileSync(userConfigPath, 'utf8')
        );
        config = { ...config, ...externalConfig } as ConfigObj;
      }
    });

    it("should apply user config overrides", () => {
      if (fs.existsSync(userConfigPath)) {
        const externalConfig: ConfigObj = JSON.parse(
          fs.readFileSync(userConfigPath, 'utf8')
        );
        const expectedConfig = { ...config, ...externalConfig };
        expect(config).toEqual(expectedConfig);
      }
    });
  });
});
