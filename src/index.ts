/**
 * this `regexx` library give you almost all most common uses of regular expression (regex). which is use on daily bases, please check below for more.
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */

/**
 * @description email validation
 * @param email
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateEmail(email: string): boolean {
	const EMAIL_REGEX =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return EMAIL_REGEX.test(email);
}

/**
 * @description password validation
 * @param password
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validatePassword(password: string): boolean {
	const PASSWORD_REGEX = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
	return PASSWORD_REGEX.test(password);
}

/**
 * @description url validation
 * @param url
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateURL(url: string): boolean {
	const URL_REGEX = /^(http|https|ftp):\/\/(www\.)?([a-zA-Z0-9]+)([\.\-a-zA-Z0-9]+\/)*/;
	return URL_REGEX.test(url);
}

/**
 * @description ip4 Address validation
 * @param ip4Address
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateIPv4Address(ip4Address: string): boolean {
	const ipv4Regex =
		/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
	return ipv4Regex.test(ip4Address);
}

/**
 * @description ip6 Address validation
 * @param ip6Address
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateIp6Address(ip6Address: string): boolean {
	const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
	return ipv6Regex.test(ip6Address);
}

/**
 * @description date of birth validation
 * @param dob
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateDob(dob: string): boolean {
	const DOB_REGEX = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
	return DOB_REGEX.test(dob);
}

/**
 * @description MongodbId validation
 * @param _id
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateMongodbId(_id: string): boolean {
	const MONGODB_ID_REGEX = /^[0-9a-fA-F]{24}$/;
	return MONGODB_ID_REGEX.test(_id);
}

/**
 * @description Indian Phone Number validation
 * @param phoneNumber
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateIndianPhoneNumber(phoneNumber: string): boolean {
	const PHONE_REGEX = /^\+91[1-9]\d{9}$/;
	return PHONE_REGEX.test(phoneNumber);
}

/**
 * @description Phone Number validation
 * @param phoneNumber
 * @param phoneRegex
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validatePhoneNumber(phoneNumber: string, phoneRegex = /^\d{10}$/): boolean {
	return phoneRegex.test(phoneNumber);
}

/**
 * @description Phone Number with Country Code validation
 * @param phoneNumber
 * @param countryCode
 * @param regex
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validatePhoneNumberWithCountryCode(
	phoneNumber: string,
	countryCode = '+91',
	regex = /^\d{10}$/
): boolean {
	const test = phoneNumber?.split(countryCode)[1];
	return regex.test(test);
}

/**
 * @description Phone number validation (U.S. format with or without parentheses)
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateUsPhoneNumber(phoneNumber: string): boolean {
	const phonePattern = /^(\([0-9]{3}\)|[0-9]{3})[-.]?[0-9]{3}[-.]?[0-9]{4}$/;
	return phonePattern.test(phoneNumber);
}

/**
 * @description Password Strength validation
 * @param password
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validatePasswordStrength(password: string): string {
	const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{12,}$/; // Password must be at least 12 characters long and contain a lowercase letter, an uppercase letter, a digit, and a special character
	const poorRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/; // Password must be at least 8 characters long and contain a lowercase letter and a digit
	const weakRegex = /^(?=.*[a-z]).{6,}$/; // Password must be at least 6 characters long and contain a lowercase letter

	if (strongRegex.test(password)) {
		return 'password is strong';
	} else if (poorRegex.test(password)) {
		return 'password is poor';
	} else if (weakRegex.test(password)) {
		return 'password is weak';
	} else {
		return 'password is invalid';
	}
}

/**
 * @description Decimal Numberic validation
 * @param val
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateDecimalNumberic(val: string): boolean {
	const DECIMAL_NUMBER_REGEX = /^(\d+\.?\d*|\.\d+)$/;
	return DECIMAL_NUMBER_REGEX.test(val);
}

/**
 * @description Address validation
 * @param val
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateAddress(val: string): boolean {
	const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
	return ADDRESS_REGEX.test(val);
}

/**
 * @description Choose the validation based on your requirements
 * @param username
 * @param strength
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateUserNameStrength(
	username: string,
	strength: 'basic' | 'min-length' | 'dash-dot' = 'basic'
): boolean {
	const basicRegex = /^[a-zA-Z0-9_]+$/;
	const minLengthRegex = /^[a-zA-Z0-9_]{6,}$/;
	const alphanumericDashDotRegex = /^[a-zA-Z0-9\-.]+$/;

	// Choose the validation based on your requirements
	if (strength === 'dash-dot') return alphanumericDashDotRegex.test(username);
	if (strength === 'min-length') return minLengthRegex.test(username);
	return basicRegex.test(username);
}

/**
 *
 * @param val
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
function requied(val: string): boolean {
	return !(val.length === 0 || typeof val === 'undefined' || (typeof val === 'string' && val.trim().length === 0));
}

/**
 *
 * @param val
 * @param param1
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateUserName(val: string, { min = 6, max = 32 }: { min: number; max: number }): boolean {
	const regex = new RegExp(`^(?=.{${min},${max}}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);
	return !!(requied(val) && regex.test(val));
}

/**
 *
 * @param val
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateLink(val: string): boolean {
	const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
	return !!(requied(val) && regex.test(val));
}

/**
 * @description Credit Card Expiration Date Validation (MM/YYYY)
 * @param zipCode
 * @returns {boolean} true | false
 * @example '12/2023'
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateCreditCardExpiration(creditCardExpiration: string): boolean {
	const creditCardExpirationRegex = /^(0[1-9]|1[0-2])\/20[2-9]\d$/;
	return creditCardExpirationRegex.test(creditCardExpiration);
}

/**
 * @description validate Credit Card o
 * @param cardNumber
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateCreditCardNumber(cardNumber: string): boolean {
	const luhnRegex = /^(\d{16}|\d{4}-\d{4}-\d{4}-\d{4})$/;
	if (!luhnRegex.test(cardNumber)) return false;

	const sanitized = cardNumber.replace(/[^0-9]/g, '');
	let sum = 0;
	let double = false;

	for (let i = sanitized.length - 1; i >= 0; i--) {
		let digit = +sanitized[i];

		if (double) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}

		sum += digit;
		double = !double;
	}
	return sum % 10 === 0;
}

/**
 * @description validate Credit Card of visa, mastercard, amex
 * @param cardNumber
 * @param type
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateCreditCard(cardNumber: string, type: 'visa' | 'mastercard' | 'amex' = 'visa'): boolean {
	const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const mastercardRegex = /^5[1-5][0-9]{14}$/;
	const amexRegex = /^3[47][0-9]{13}$/;

	// Choose the validation based on your card type
	if (type === 'visa') return visaRegex.test(cardNumber);
	if (type === 'mastercard') return mastercardRegex.test(cardNumber);
	if (type === 'amex') return amexRegex.test(cardNumber);
	return false;
}

/**
 * @description Social security number (SSN) validation
 * @param {string} ssn
 * @returns {boolean} true | false
 * @example '123-45-6789'
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateSSN(ssn: string): boolean {
	const ssnPattern = /^\d{3}-\d{2}-\d{4}$|^\d{9}$/;
	return ssnPattern.test(ssn);
}

/**
 * @description Hexadecimal color code validation
 * @param {string} color
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateHexadecimalColor(color: string): boolean {
	const colorPattern = /^#[A-Fa-f0-9]{6}$|^#[A-Fa-f0-9]{3}$/;
	return colorPattern.test(color);
}

/**
 * @description ZIP code validation (5 digits or 5 digits followed by optional - and 4-digit extension)
 * @param {string} zipCode
 * @returns {boolean} true | false
 * @example 12345-6789
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateZIPCode(zipCode: string): boolean {
	const zipCodePattern = /^\d{5}-\d{4}|\d{5}$/;
	return zipCodePattern.test(zipCode);
}

/**
 * @description Date : Choose the validation based on your format
 * @param date
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateDate(date: string, type: 'ddmmyy' | 'yymmdd' | 'iso' = 'ddmmyy'): boolean {
	const ddMMyyyyRegex = /^\d{2}-\d{2}-\d{4}$/;
	const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/;
	const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[\+\-]\d{2}:\d{2})$/;

	// Choose the validation based on your format
	if (type === 'iso') return iso8601Regex.test(date);
	if (type === 'yymmdd') return yyyyMmDdRegex.test(date);
	return ddMMyyyyRegex.test(date);
}

/**
 * @description Time : Choose the validation based on your format
 * @param time
 * @param type
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateTime(time: string, type: 'hhmm' | 'hhmmss' = 'hhmmss'): boolean {
	const hhMmRegex = /^\d{2}:\d{2}$/;
	const hhMmSsRegex = /^\d{2}:\d{2}:\d{2}$/;

	// Choose the validation based on your format
	if (type === 'hhmm') return hhMmRegex.test(time);
	return hhMmSsRegex.test(time);
}

/**
 * @param password
 * @param minLength
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateStrongPasswordMinLength(password: string, minLength: number = 8): boolean {
	const strongRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=\W+)[a-zA-Z0-9\W]{${minLength},}$`);
	return strongRegex.test(password);
}

/**
 * @param filename
 * @param imageExtensions
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateImageFile(filename: string, imageExtensions: string[] = []): boolean {
	const _imageExtensions = [...imageExtensions, 'jpg', 'jpeg', 'png', 'gif'];
	const extRegex = new RegExp(`\.(${_imageExtensions.join('|')})$`, 'i');
	return extRegex.test(filename);
}

/**
 * @description HTML tag validation (opening and closing tags)
 * @param htmlTag
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateHtmlTag(htmlTag: string): boolean {
	const htmlTagPattern = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
	return htmlTagPattern.test(htmlTag);
}

/**
 * @description Time format validation (24-hour format)
 * @param time
 * @returns {boolean} true | false
 * @example '15:30'
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validate24TimeFormat(time: string): boolean {
	const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
	return timePattern.test(time);
}

/**
 * @description Hashtag validation
 * @param hashtag
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateHashTag(hashtag: string): boolean {
	const hashtagPattern = /#[A-Za-z0-9]+/;
	return hashtagPattern.test(hashtag);
}

/**
 * @description Alphanumeric String Validation
 * @param alphanumeric
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateAlphaNumeric(alphanumeric: string): boolean {
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;
	return alphanumericRegex.test(alphanumeric);
}

/**
 * @description Numeric String Validation
 * @param numeric
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateNumeric(numeric: number): boolean {
	const numericRegex = /^\d+$/;
	return numericRegex.test(numeric.toString());
}

/**
 * @description Alphabetic String Validation
 * @param alphabetic
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateAlphabetic(alphabetic: string): boolean {
	const alphabeticRegex = /^[a-zA-Z]+$/;
	return alphabeticRegex.test(alphabetic);
}

/**
 * @description ISBN (International Standard Book Number) Validation (ISBN-13)
 * @param isbn13
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateISBN13(isbn13: string): boolean {
	const isbn13Regex = /^(978|979)\d{10}$/;
	return isbn13Regex.test(isbn13);
}

/**
 * @description YouTube Video URL Validation
 * @param url
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateYouTubeURL(url: string): boolean {
	const youtubeVideoRegex =
		/^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	return youtubeVideoRegex.test(url);
}

/**
 * @description Markdown Image URL Validation
 * @param url
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateMarkdownImageURL(url: string): boolean {
	const markdownImageRegex = /!\[.*?\]\((https?:\/\/.*?\.(?:png|jpg|gif))\)/;
	return markdownImageRegex.test(url);
}

/**
 * @description Domain Name Validation (Basic)
 * @param domainName
 * @returns {boolean} true | false
 *
 * @shippusharma `author`
 * @see {@link https://github.com/shippusharma ***Github***}
 */
export function validateDomainName(domainName: string): boolean {
	const domainNameRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return domainNameRegex.test(domainName);
}
