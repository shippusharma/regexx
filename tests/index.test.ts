import {
  validateEmail,
  validatePassword,
  validateURL,
  validateIPv4Address,
  validateIp6Address,
  validateIP,
  validateDob,
  validateMongodbId,
  validateIndianPhoneNumber,
  validatePhoneNumber,
  validatePhoneNumberWithCountryCode,
  validateUsPhoneNumber,
  validatePasswordStrength,
  validateDecimalNumberic,
  validateAddress,
  validateUserNameStrength,
  validateOnlyStringName,
  validateUserName,
  validateLink,
  validateCreditCardExpiration,
  validateCreditCardNumber,
  validateCreditCard,
  validateSSN,
  validateHexadecimalColor,
  validateZIPCode,
  validateDate,
  validateTime,
  validateStrongPasswordMinLength,
  validateImageFile,
  validateHtmlTag,
  validate24TimeFormat,
  validateHashTag,
  validateAlphaNumeric,
  validateNumeric,
  validateAlphabetic,
} from '../src/index';

describe('validateEmail', () => {
  test('validateEmail should validate correct emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });

  test('validatePassword', () => {
    expect(validatePassword('StrongP@ss1')).toBe(true);
    expect(validatePassword('weakpass')).toBe(false);
  });

  test('validateURL', () => {
    expect(validateURL('https://www.example.com')).toBe(true);
    expect(validateURL('invalid-url')).toBe(false);
  });

  test('validateIPv4Address', () => {
    expect(validateIPv4Address('192.168.1.1')).toBe(true);
    expect(validateIPv4Address('999.999.999.999')).toBe(false);
  });

  test('validateIp6Address', () => {
    expect(validateIp6Address('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
    expect(validateIp6Address('invalid-ip6')).toBe(false);
  });

  test('validateIP', () => {
    expect(validateIP('192.168.1.1')).toBe(true);
    expect(validateIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
    expect(validateIP('invalid-ip')).toBe(false);
  });

  test('validateDob', () => {
    expect(validateDob('01-01-2000')).toBe(true);
    expect(validateDob('32-01-2000')).toBe(false);
  });

  test('validateMongodbId', () => {
    expect(validateMongodbId('507f1f77bcf86cd799439011')).toBe(true);
    expect(validateMongodbId('invalid-id')).toBe(false);
  });

  test('validateIndianPhoneNumber', () => {
    expect(validateIndianPhoneNumber('+919876543210')).toBe(true);
    expect(validateIndianPhoneNumber('9876543210')).toBe(false);
  });

  test('validatePhoneNumber', () => {
    expect(validatePhoneNumber('9876543210')).toBe(true);
    expect(validatePhoneNumber('invalid-phone')).toBe(false);
  });

  test('validatePhoneNumberWithCountryCode', () => {
    expect(validatePhoneNumberWithCountryCode('+919876543210', '+91')).toBe(true);
    expect(validatePhoneNumberWithCountryCode('9876543210', '+91')).toBe(false);
  });

  test('validateUsPhoneNumber', () => {
    expect(validateUsPhoneNumber('(123)456-7890')).toBe(true);
    expect(validateUsPhoneNumber('invalid-phone')).toBe(false);
  });

  test('validatePasswordStrength', () => {
    expect(validatePasswordStrength('StrongP@ss1')).toBe('password is poor');
    expect(validatePasswordStrength('weakpass')).toBe('password is weak');
  });

  test('validateDecimalNumberic', () => {
    expect(validateDecimalNumberic('123.45')).toBe(true);
    expect(validateDecimalNumberic('invalid')).toBe(false);
  });

  test('validateAddress', () => {
    expect(validateAddress('0x1234567890abcdef1234567890abcdef12345678')).toBe(true);
    expect(validateAddress('invalid-address')).toBe(false);
  });

  test('validateUserNameStrength', () => {
    expect(validateUserNameStrength('username')).toBe(true);
    expect(validateUserNameStrength('invalid-username', 'min-length')).toBe(false);
  });

  test('validateOnlyStringName', () => {
    expect(validateOnlyStringName('John Doe')).toBe(true);
    expect(validateOnlyStringName('John123')).toBe(false);
  });

  test('validateUserName', () => {
    expect(validateUserName('username00')).toBe(true);
    expect(validateUserName('user')).toBe(false);
  });

  test('validateLink', () => {
    expect(validateLink('https://example.com')).toBe(true);
    expect(validateLink('invalid-link')).toBe(false);
  });

  test('validateCreditCardExpiration', () => {
    expect(validateCreditCardExpiration('12/2025')).toBe(true);
    expect(validateCreditCardExpiration('invalid')).toBe(false);
  });

  test('validateCreditCardNumber', () => {
    expect(validateCreditCardNumber('4111111111111111')).toBe(true);
    expect(validateCreditCardNumber('invalid')).toBe(false);
  });

  test('validateCreditCard', () => {
    expect(validateCreditCard('4111111111111111', 'visa')).toBe(true);
    expect(validateCreditCard('invalid', 'visa')).toBe(false);
  });

  test('validateSSN', () => {
    expect(validateSSN('123-45-6789')).toBe(true);
    expect(validateSSN('invalid')).toBe(false);
  });

  test('validateHexadecimalColor', () => {
    expect(validateHexadecimalColor('#fff')).toBe(true);
    expect(validateHexadecimalColor('invalid')).toBe(false);
  });

  test('validateZIPCode', () => {
    expect(validateZIPCode('12345')).toBe(true);
    expect(validateZIPCode('invalid')).toBe(false);
  });

  test('validateDate', () => {
    expect(validateDate('01-01-2020', 'ddmmyy')).toBe(true);
    expect(validateDate('invalid', 'ddmmyy')).toBe(false);
  });

  test('validateTime', () => {
    expect(validateTime('12:00:00')).toBe(true);
    expect(validateTime('invalid')).toBe(false);
  });

  test('validateStrongPasswordMinLength', () => {
    expect(validateStrongPasswordMinLength('Test@123', 8)).toBe(true);
    expect(validateStrongPasswordMinLength('weak')).toBe(false);
  });

  test('validateImageFile', () => {
    expect(validateImageFile('image.jpg')).toBe(true);
    expect(validateImageFile('file.txt')).toBe(false);
  });

  test('validateHtmlTag', () => {
    expect(validateHtmlTag('<div>Content</div>')).toBe(true);
    expect(validateHtmlTag('invalid')).toBe(false);
  });

  test('validate24TimeFormat', () => {
    expect(validate24TimeFormat('23:59')).toBe(true);
    expect(validate24TimeFormat('invalid')).toBe(false);
  });

  test('validateHashTag', () => {
    expect(validateHashTag('#Hashtag')).toBe(true);
    expect(validateHashTag('invalid')).toBe(false);
  });

  test('validateAlphaNumeric', () => {
    expect(validateAlphaNumeric('abc123')).toBe(true);
    expect(validateAlphaNumeric('!@#$')).toBe(false);
  });

  test('validateNumeric', () => {
    expect(validateNumeric(123)).toBe(true);
    expect(validateNumeric(NaN)).toBe(false);
  });

  test('validateAlphabetic', () => {
    expect(validateAlphabetic('abc')).toBe(true);
    expect(validateAlphabetic('123')).toBe(false);
  });
});
