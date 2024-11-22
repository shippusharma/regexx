declare module 'regexx' {
	export function validateEmail(email: string): boolean;
	export function validatePassword(password: string): boolean;
	export function validateURL(url: string): boolean;
	export function validateIPv4Address(ip4Address: string): boolean;
	export function validateIp6Address(ip6Address: string): boolean;
	export function validateIP(address: string): boolean;
	export function validateDob(dob: string): boolean;
	export function validateMongodbId(_id: string): boolean;
	export function validateIndianPhoneNumber(phoneNumber: string): boolean;

	export function validatePhoneNumber(phoneNumber: string, phoneRegex?: RegExp): boolean;
	export function validatePhoneNumberWithCountryCode(
		phoneNumber: string,
		countryCode?: string,
		regex?: RegExp
	): boolean;
	export function validateUsPhoneNumber(phoneNumber: string): boolean;
	export function validatePasswordStrength(password: string): string;
	export function validateDecimalNumberic(val: string): boolean;
	export function validateAddress(val: string): boolean;
	export function validateUserNameStrength(username: string, strength?: 'basic' | 'min-length' | 'dash-dot'): boolean;
	export function validateOnlyStringName(name: string): boolean;

	function requied(val: string): boolean;
	export function validateUserName(val: string, min?: number, max?: number): boolean;
	export function validateLink(val: string): boolean;
	export function validateCreditCardExpiration(creditCardExpiration: string): boolean;
	export function validateCreditCardNumber(cardNumber: string): boolean;
	export function validateCreditCard(cardNumber: string, type?: 'visa' | 'mastercard' | 'amex'): boolean;
	export function validateSSN(ssn: string): boolean;
	export function validateHexadecimalColor(color: string): boolean;
	export function validateZIPCode(zipCode: string): boolean;
	export function validateDate(date: string, type?: 'ddmmyy' | 'yymmdd' | 'iso'): boolean;
	export function validateTime(time: string, type?: 'hhmm' | 'hhmmss'): boolean;

	export function validateStrongPasswordMinLength(password: string, minLength?: number): boolean;
	export function validateImageFile(filename: string, imageExtensions?: string[]): boolean;
	export function validateHtmlTag(htmlTag: string): boolean;
	export function validate24TimeFormat(time: string): boolean;
	export function validateHashTag(hashtag: string): boolean;
	export function validateAlphaNumeric(alphanumeric: string): boolean;
	export function validateNumeric(numeric: number): boolean;
	export function validateAlphabetic(alphabetic: string): boolean;
	export function validateISBN13(isbn13: string): boolean;
	export function validateYouTubeURL(url: string): boolean;
	export function validateMarkdownImageURL(url: string): boolean;
	export function validateDomainName(domainName: string): boolean;
	export function validateEmptyString(str: string): boolean;
	export function validateIsEmpty(value: null | undefined | string | number): boolean;

	export function validateMACAddress(macAddress: string): boolean;
	export function validateCurrency(amount: string): boolean;
	export function validateUSZipCode(zipCode: string): boolean;
	export function validateHTMLTag(htmlTag: string): boolean;
}
