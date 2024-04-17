import { test, expect } from "vitest";
import FilenameDirNameES from "../dist/main.esm";


const testCase = {
  '__filename': '/Users/linqunhe/code/single-run-test-code/1.js',
  '__dirname': '/Users/linqunhe/code/single-run-test-code',
  'esm_import_meta_url': 'file:///Users/linqunhe/code/single-run-test-code/1.js'
}

const { __filename, __dirname } = FilenameDirNameES(testCase.esm_import_meta_url);

test("Comparison of mock data field and function test input return field", () => {
  expect(testCase.__filename).toBe(__filename);
  expect(testCase.__dirname).toBe(__dirname);
});
