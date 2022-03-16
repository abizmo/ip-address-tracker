import validateDomainName from '../../lib/validateDomainName';

describe('validateDomainName tests', () => {
  test('should return true if valid Domain Name', () => {
    expect(validateDomainName('www.google.com')).toBeTruthy();
    expect(validateDomainName('google.com')).toBeTruthy();
    expect(validateDomainName('abizmo123.dev')).toBeTruthy();
    expect(validateDomainName('abizmo-dev.dev')).toBeTruthy();
    expect(validateDomainName('dev.abizmo.org')).toBeTruthy();
    expect(validateDomainName('coo.abizmo-dev.dev')).toBeTruthy();
    expect(validateDomainName('abizmo.com.es')).toBeTruthy();
    expect(validateDomainName('g.com')).toBeTruthy();
    expect(validateDomainName('abizmo.g.t.co')).toBeTruthy();
  });

  test('should return false if not valid Domain Name', () => {
    expect(validateDomainName('google.c')).toBeFalsy();
    expect(validateDomainName('google,com')).toBeFalsy();
    expect(validateDomainName('google.123')).toBeFalsy();
    expect(validateDomainName('google.com/users')).toBeFalsy();
    expect(validateDomainName('com')).toBeFalsy();
    expect(validateDomainName('.com')).toBeFalsy();
    expect(validateDomainName('-google.com')).toBeFalsy();
    expect(validateDomainName('google-.com')).toBeFalsy();
    expect(validateDomainName('www.-google.com')).toBeFalsy();
    expect(validateDomainName('www.google-.com')).toBeFalsy();
  });
});
