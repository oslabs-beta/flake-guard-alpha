#!/usr/bin/env node
declare const exec: any;
declare const fs: any;
declare const path: any;
declare function loadConfig(): any;
declare const configObj: any;
declare let runTimes: number;
declare const filename: string;
declare const command: string;
declare const runTest: () => Promise<string>;
declare const flakeGuard: (iterations: number) => Promise<void>;
