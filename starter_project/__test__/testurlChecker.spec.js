import { checkForURL } from '../src/client/js/urlChecker.js';

describe("Testing the checkForURL functionality", () => {
    //Testing if checkForURL is Defined:
    test("Testing the checkForURL() function", () => {
        expect(checkForURL).toBeDefined();
    })
    //Testing for an Invalid URL:
    test('checkForUrl return false for invalid url', () => {
        expect(checkForURL('noway')).toBeFalsy()
    })
    //Testing for a Valid URL:
    //http:
    test('checkForUrl return true for valid url', () => {
        expect(checkForURL('http://example.com')).toBeTruthy()
    })
    //https:
    test('checkForUrl return true for valid url', () => {
        expect(checkForURL('https://example.com')).toBeTruthy()
    })
});