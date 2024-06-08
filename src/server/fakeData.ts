export const fakeData = [
    {
      "numFailedTestSuites": 1,
      "numFailedTests": 1,
      "numPassedTestSuites": 0,
      "numPassedTests": 2,
      "numPendingTestSuites": 0,
      "numPendingTests": 0,
      "numRuntimeErrorTestSuites": 0,
      "numTodoTests": 0,
      "numTotalTestSuites": 1,
      "numTotalTests": 3,
      "openHandles": [],
      "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesRemovedList": [],
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "uncheckedKeysByFile": [],
        "unmatched": 0,
        "updated": 0
      },
      "startTime": 1717272079292,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 1397,
              "failureMessages": [],
              "fullName": "E2E test Initial page load loads page successfully",
              "location": null,
              "status": "passed",
              "title": "loads page successfully"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 891,
              "failureMessages": [
                "Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: \"MegaMarket Loyalty Car\"\nReceived: \"MegaMarket Loyalty Cards\"\n    at toBe (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:32:21)\n    at call (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator.tryCatch (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator._invoke [as next] (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
              ],
              "fullName": "E2E test Initial page load loads page successfully-FAIL",
              "location": null,
              "status": "failed",
              "title": "loads page successfully-FAIL"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 896,
              "failureMessages": [],
              "fullName": "E2E test Initial page load displays a usable input field for locations",
              "location": null,
              "status": "passed",
              "title": "displays a usable input field for locations"
            }
          ],
          "endTime": 1717272084550,
          "message": "  ● E2E test › Initial page load › loads page successfully-FAIL\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: \"MegaMarket Loyalty Car\"\n    Received: \"MegaMarket Loyalty Cards\"\n\n      30 |       await page.waitForSelector('#header');\n      31 |       const title = await page.$eval('#header', el => el.innerText);\n    > 32 |       expect(title).toBe('MegaMarket Loyalty Car');\n         |                     ^\n      33 |     });\n      34 |\n      35 |     // Tests for usable input field\n\n      at toBe (__tests__/puppeteer.js:32:21)\n      at call (__tests__/puppeteer.js:2:1)\n      at Generator.tryCatch (__tests__/puppeteer.js:2:1)\n      at Generator._invoke [as next] (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n",
          "name": "/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js",
          "startTime": 1717272080055,
          "status": "failed",
          "summary": ""
        }
      ],
      "wasInterrupted": false
    },
    {
      "numFailedTestSuites": 1,
      "numFailedTests": 1,
      "numPassedTestSuites": 0,
      "numPassedTests": 2,
      "numPendingTestSuites": 0,
      "numPendingTests": 0,
      "numRuntimeErrorTestSuites": 0,
      "numTodoTests": 0,
      "numTotalTestSuites": 1,
      "numTotalTests": 3,
      "openHandles": [],
      "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesRemovedList": [],
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "uncheckedKeysByFile": [],
        "unmatched": 0,
        "updated": 0
      },
      "startTime": 1717272085365,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 878,
              "failureMessages": [],
              "fullName": "E2E test Initial page load loads page successfully",
              "location": null,
              "status": "passed",
              "title": "loads page successfully"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 944,
              "failureMessages": [
                "Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: \"MegaMarket Loyalty Car\"\nReceived: \"MegaMarket Loyalty Cards\"\n    at toBe (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:32:21)\n    at call (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator.tryCatch (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator._invoke [as next] (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
              ],
              "fullName": "E2E test Initial page load loads page successfully-FAIL",
              "location": null,
              "status": "failed",
              "title": "loads page successfully-FAIL"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 1001,
              "failureMessages": [],
              "fullName": "E2E test Initial page load displays a usable input field for locations",
              "location": null,
              "status": "passed",
              "title": "displays a usable input field for locations"
            }
          ],
          "endTime": 1717272089698,
          "message": "  ● E2E test › Initial page load › loads page successfully-FAIL\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: \"MegaMarket Loyalty Car\"\n    Received: \"MegaMarket Loyalty Cards\"\n\n      30 |       await page.waitForSelector('#header');\n      31 |       const title = await page.$eval('#header', el => el.innerText);\n    > 32 |       expect(title).toBe('MegaMarket Loyalty Car');\n         |                     ^\n      33 |     });\n      34 |\n      35 |     // Tests for usable input field\n\n      at toBe (__tests__/puppeteer.js:32:21)\n      at call (__tests__/puppeteer.js:2:1)\n      at Generator.tryCatch (__tests__/puppeteer.js:2:1)\n      at Generator._invoke [as next] (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n",
          "name": "/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js",
          "startTime": 1717272085901,
          "status": "failed",
          "summary": ""
        }
      ],
      "wasInterrupted": false
    },
    {
      "numFailedTestSuites": 1,
      "numFailedTests": 1,
      "numPassedTestSuites": 0,
      "numPassedTests": 2,
      "numPendingTestSuites": 0,
      "numPendingTests": 0,
      "numRuntimeErrorTestSuites": 0,
      "numTodoTests": 0,
      "numTotalTestSuites": 1,
      "numTotalTests": 3,
      "openHandles": [],
      "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesRemovedList": [],
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "uncheckedKeysByFile": [],
        "unmatched": 0,
        "updated": 0
      },
      "startTime": 1717272090526,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 837,
              "failureMessages": [],
              "fullName": "E2E test Initial page load loads page successfully",
              "location": null,
              "status": "passed",
              "title": "loads page successfully"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 850,
              "failureMessages": [
                "Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: \"MegaMarket Loyalty Car\"\nReceived: \"MegaMarket Loyalty Cards\"\n    at toBe (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:32:21)\n    at call (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator.tryCatch (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator._invoke [as next] (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
              ],
              "fullName": "E2E test Initial page load loads page successfully-FAIL",
              "location": null,
              "status": "failed",
              "title": "loads page successfully-FAIL"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 897,
              "failureMessages": [],
              "fullName": "E2E test Initial page load displays a usable input field for locations",
              "location": null,
              "status": "passed",
              "title": "displays a usable input field for locations"
            }
          ],
          "endTime": 1717272094604,
          "message": "  ● E2E test › Initial page load › loads page successfully-FAIL\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: \"MegaMarket Loyalty Car\"\n    Received: \"MegaMarket Loyalty Cards\"\n\n      30 |       await page.waitForSelector('#header');\n      31 |       const title = await page.$eval('#header', el => el.innerText);\n    > 32 |       expect(title).toBe('MegaMarket Loyalty Car');\n         |                     ^\n      33 |     });\n      34 |\n      35 |     // Tests for usable input field\n\n      at toBe (__tests__/puppeteer.js:32:21)\n      at call (__tests__/puppeteer.js:2:1)\n      at Generator.tryCatch (__tests__/puppeteer.js:2:1)\n      at Generator._invoke [as next] (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n",
          "name": "/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js",
          "startTime": 1717272091053,
          "status": "failed",
          "summary": ""
        }
      ],
      "wasInterrupted": false
    },
    {
      "numFailedTestSuites": 1,
      "numFailedTests": 1,
      "numPassedTestSuites": 0,
      "numPassedTests": 2,
      "numPendingTestSuites": 0,
      "numPendingTests": 0,
      "numRuntimeErrorTestSuites": 0,
      "numTodoTests": 0,
      "numTotalTestSuites": 1,
      "numTotalTests": 3,
      "openHandles": [],
      "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesRemovedList": [],
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "uncheckedKeysByFile": [],
        "unmatched": 0,
        "updated": 0
      },
      "startTime": 1717272095415,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 874,
              "failureMessages": [],
              "fullName": "E2E test Initial page load loads page successfully",
              "location": null,
              "status": "passed",
              "title": "loads page successfully"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 842,
              "failureMessages": [
                "Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: \"MegaMarket Loyalty Car\"\nReceived: \"MegaMarket Loyalty Cards\"\n    at toBe (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:32:21)\n    at call (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator.tryCatch (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator._invoke [as next] (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
              ],
              "fullName": "E2E test Initial page load loads page successfully-FAIL",
              "location": null,
              "status": "failed",
              "title": "loads page successfully-FAIL"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 947,
              "failureMessages": [],
              "fullName": "E2E test Initial page load displays a usable input field for locations",
              "location": null,
              "status": "passed",
              "title": "displays a usable input field for locations"
            }
          ],
          "endTime": 1717272099555,
          "message": "  ● E2E test › Initial page load › loads page successfully-FAIL\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: \"MegaMarket Loyalty Car\"\n    Received: \"MegaMarket Loyalty Cards\"\n\n      30 |       await page.waitForSelector('#header');\n      31 |       const title = await page.$eval('#header', el => el.innerText);\n    > 32 |       expect(title).toBe('MegaMarket Loyalty Car');\n         |                     ^\n      33 |     });\n      34 |\n      35 |     // Tests for usable input field\n\n      at toBe (__tests__/puppeteer.js:32:21)\n      at call (__tests__/puppeteer.js:2:1)\n      at Generator.tryCatch (__tests__/puppeteer.js:2:1)\n      at Generator._invoke [as next] (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n",
          "name": "/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js",
          "startTime": 1717272095935,
          "status": "failed",
          "summary": ""
        }
      ],
      "wasInterrupted": false
    },
    {
      "numFailedTestSuites": 1,
      "numFailedTests": 1,
      "numPassedTestSuites": 0,
      "numPassedTests": 2,
      "numPendingTestSuites": 0,
      "numPendingTests": 0,
      "numRuntimeErrorTestSuites": 0,
      "numTodoTests": 0,
      "numTotalTestSuites": 1,
      "numTotalTests": 3,
      "openHandles": [],
      "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesRemovedList": [],
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "uncheckedKeysByFile": [],
        "unmatched": 0,
        "updated": 0
      },
      "startTime": 1717272100359,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 865,
              "failureMessages": [],
              "fullName": "E2E test Initial page load loads page successfully",
              "location": null,
              "status": "passed",
              "title": "loads page successfully"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 860,
              "failureMessages": [
                "Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: \"MegaMarket Loyalty Car\"\nReceived: \"MegaMarket Loyalty Cards\"\n    at toBe (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:32:21)\n    at call (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator.tryCatch (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at Generator._invoke [as next] (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at asyncGeneratorStep (/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
              ],
              "fullName": "E2E test Initial page load loads page successfully-FAIL",
              "location": null,
              "status": "failed",
              "title": "loads page successfully-FAIL"
            },
            {
              "ancestorTitles": [
                "E2E test",
                "Initial page load"
              ],
              "duration": 931,
              "failureMessages": [],
              "fullName": "E2E test Initial page load displays a usable input field for locations",
              "location": null,
              "status": "passed",
              "title": "displays a usable input field for locations"
            }
          ],
          "endTime": 1717272104496,
          "message": "  ● E2E test › Initial page load › loads page successfully-FAIL\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: \"MegaMarket Loyalty Car\"\n    Received: \"MegaMarket Loyalty Cards\"\n\n      30 |       await page.waitForSelector('#header');\n      31 |       const title = await page.$eval('#header', el => el.innerText);\n    > 32 |       expect(title).toBe('MegaMarket Loyalty Car');\n         |                     ^\n      33 |     });\n      34 |\n      35 |     // Tests for usable input field\n\n      at toBe (__tests__/puppeteer.js:32:21)\n      at call (__tests__/puppeteer.js:2:1)\n      at Generator.tryCatch (__tests__/puppeteer.js:2:1)\n      at Generator._invoke [as next] (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n      at asyncGeneratorStep (__tests__/puppeteer.js:2:1)\n",
          "name": "/Users/willsuto/Desktop/Codesmith/Coursework/OSP/Test App/__tests__/puppeteer.js",
          "startTime": 1717272100880,
          "status": "failed",
          "summary": ""
        }
      ],
      "wasInterrupted": false
    }
  ]