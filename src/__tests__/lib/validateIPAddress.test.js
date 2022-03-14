import validateIPAddress from '../../lib/validateIPAddress';

describe('ValidateIPAddress tests', () => {
  test('should return true if valid IP', () => {
    expect(validateIPAddress('8.8.8.8')).toBeTruthy();
    expect(validateIPAddress('0.255.8.8')).toBeTruthy();
    expect(validateIPAddress('0.0.0.0')).toBeTruthy();
    expect(validateIPAddress('255.255.255.255')).toBeTruthy();
  });

  test('should return false if not valid IP', () => {
    expect(validateIPAddress('888.8.8.8')).toBeFalsy();
    expect(validateIPAddress('8.8.8')).toBeFalsy();
    expect(validateIPAddress('888.8.8.')).toBeFalsy();
    expect(validateIPAddress('.888.8.8.8')).toBeFalsy();
    expect(validateIPAddress('.888.8.8')).toBeFalsy();
    expect(validateIPAddress('xd.888.8.8')).toBeFalsy();
    expect(validateIPAddress('8.8.8.256')).toBeFalsy();
    expect(validateIPAddress('8,8.8.8')).toBeFalsy();
  });
});
