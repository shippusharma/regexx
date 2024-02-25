> #### **_Introducing `regexx`, a versatile and efficient regex library designed to streamline pattern matching and text manipulation tasks in your programming projects. This comprehensive library provides developers with a rich set of pre-built regular expressions for common use cases, including email and URL validation, password strength checks, and more._**

> #### **_`regexx` library give you almost all most common uses of regular expression (regex). which is use on daily bases, please check below for more._**

---

## ✔ How to Install

> using npm | yarn | pnpm command, you can install `regexx` library.

```bash
npm install regexx
```

```bash
yarn add regexx
```

```bash
pnpm add regexx
```

---

## 💢 How to Import

```javascript
// using ES6+ (module js approach)
import { validateEmail } from 'regexx';

// or

// using ES5 (commonjs approach)
const { validateEmail } = require('regexx');
```

---

<br>

## ✨ **_A full-featured `regexx` library which is build using regular expression (regex) of JavaScript._**

- **_`regexx`: is a library in pure JavaScript with no dependencies that provides function for validation and offer fully secure and strict type safety._**

- **_`Efficient Pattern Matching`: Leverage a collection of optimized regular expressions for seamless pattern matching in various text processing scenarios._**

- **_`Common Use Cases`: Address common development tasks with pre-built regex patterns, including email and URL validation, password strength checks, and more._**

- **_`Simplicity and Ease of Use`: Designed with a user-friendly interface, making it easy for developers of all skill levels to integrate and apply regular expressions in their projects._**

- **_`Performance-Focused`: Prioritize performance with carefully crafted regex patterns to ensure fast and reliable text manipulation._**

- **_`Versatility`: A versatile library compatible with a wide range of programming languages, providing flexibility in implementation across different projects._**

- **_`Comprehensive Documentation`: Access thorough documentation to guide developers in effectively utilizing the library's features and incorporating regex patterns seamlessly._**

- **_`Time-Saving Solution`: Save development time by utilizing pre-defined regex patterns, allowing developers to focus on core application logic rather than spending time on intricate pattern creation._**

- **_`Robust Text Processing`: Enhance your applications with robust text processing capabilities, empowering developers to handle various string manipulation tasks effortlessly._**

- **_`Cross-Language Compatibility`: Facilitate integration into diverse projects by providing cross-language compatibility, enabling developers to use the library in their preferred programming environments._**

- **_`Regular Updates`: Benefit from regular updates and improvements, ensuring regexx library stays current with evolving development needs and best practices._**

---

<br>

# 😎 Examples

### Email Validation

```js
import { validateEmail } from 'regexx';

const isValidEmail = validateEmail('test@gmail.com');
console.log(isValidEmail); // Output: true
```

### Password Validation

```js
import { validatePassword } from 'regexx';

const isValidPassword = validatePassword('Password123!');
console.log(isValidPassword); // Output: true
```

### URL Validation

```js
import { validateURL } from 'regexx';

const isValidURL = validateURL('https://www.google.com');
console.log(isValidURL); // Output: true
```

### IPv4 Address Validation

```js
import { validateIPv4Address } from 'regexx';

const isValidIPv4 = validateIPv4Address('192.168.1.1');
console.log(isValidIPv4); // Output: true
```

### IP6 Address Validation

```js
import { validateIp6Address } from 'regexx';

const isValidIPv6 = validateIp6Address('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
console.log(isValidIPv6); // Output: true
```

### Date of birth (dob) Validation

```js
import { validateDob } from 'regexx';

const isValidDateOfBirth = validateDob('01-01-1990');
console.log(isValidDateOfBirth); // Output: true
```

### Mongodb Id Validation

```js
import { validateMongodbId } from 'regexx';

const isValidMongoDBId = validateMongodbId('5f3a0f348441c61248a0c65a');
console.log(isValidMongoDBId); // Output: true
```

### Indian Phone Number Validation

```js
import { validateIndianPhoneNumber } from 'regexx';

const isValidPhoneNumber = validateIndianPhoneNumber('+919876543210');
console.log(isValidPhoneNumber); // Output: true
```

### Phone Number Validation

```js
import { validatePhoneNumber } from 'regexx';

const isValidPhoneNumber = validatePhoneNumber('9876543210');
console.log(isValidPhoneNumber); // Output: true
```

### Phone Number With Country Code Validation

```js
import { validatePhoneNumberWithCountryCode } from 'regexx';

const isValidPhoneNumber = validatePhoneNumberWithCountryCode('9876543210', '+91');
console.log(isValidPhoneNumber); // Output: true
```

### US Phone Number Validation

```js
import { validateUsPhoneNumber } from 'regexx';

const isValidUsPhoneNumber = validateUsPhoneNumber('(123) 456-7890');
console.log(isValidUsPhoneNumber); // Output: true
```

### Password Strength Validation

```js
import { validatePasswordStrength } from 'regexx';

const passwordStrength = validatePasswordStrength('StrongPassword123!');
console.log(passwordStrength); // Output: 'password is strong'
```

### Decimal Numberic Validation

```js
import { validateDecimalNumberic } from 'regexx';

const isValidDecimalNumber = validateDecimalNumberic('123.45');
console.log(isValidDecimalNumber); // Output: true
```

### Address Validation

```js
import { validateAddress } from 'regexx';

const isValidAddress = validateAddress('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed');
console.log(isValidAddress); // Output: true
```

### UserName Strength Validation

```js
import { validateUserNameStrength } from 'regexx';

const isValidUsername = validateUserNameStrength('user123', 'basic');
console.log(isValidUsername); // Output: true
```

### UserName Validation

```js
import { validateUserName } from 'regexx';

const isValidUserName = validateUserName('user_123');
or;
const isValidUserName = validateUserName('user_123', 6, 32);
console.log(isValidUserName); // Output: true
```

### Link Validation

```js
import { validateLink } from 'regexx';

const isValidLink = validateLink('https://www.example.com');
console.log(isValidLink); // Output: true
```

### Credit Card Expiration Validation

```js
import { validateCreditCardExpiration } from 'regexx';

const isValidCreditCardExpiration = validateCreditCardExpiration('12/2023');
console.log(isValidCreditCardExpiration); // Output: true
```

### Credit Card Number Validation

```js
import { validateCreditCardNumber } from 'regexx';

const isValidCreditCardNumber = validateCreditCardNumber('4111-1111-1111-1111');
console.log(isValidCreditCardNumber); // Output: true
```

### Credit Card Validation

```js
import { validateCreditCard } from 'regexx';

const isValidCreditCard = validateCreditCard('4111-1111-1111-1111', 'visa');
console.log(isValidCreditCard); // Output: true
```

### Social Security Number (SSN) Validation

```js
import { validateSSN } from 'regexx';

const isValidSSN = validateSSN('123-45-6789');
console.log(isValidSSN); // Output: true
```

### Hexadecimal Color Validation

```js
import { validateHexadecimalColor } from 'regexx';

const isValidColor = validateHexadecimalColor('#abcdef');
console.log(isValidColor); // Output: true
```

### ZIP Code Validation

```js
import { validateZIPCode } from 'regexx';

const isValidZIPCode = validateZIPCode('12345-6789');
console.log(isValidZIPCode); // Output: true
```

### Date Validation

```js
import { validateDate } from 'regexx';

const isValidDate = validateDate('01-01-2022', 'ddmmyy');
console.log(isValidDate); // Output: true
```

### Time Validation

```js
import { validateTime } from 'regexx';

const isValidTime = validateTime('15:30', 'hhmm');
console.log(isValidTime); // Output: true
```

### Strong Password Validation with Minimum Length

```js
import { validateStrongPasswordMinLength } from 'regexx';

const isValidStrongPassword = validateStrongPasswordMinLength('StrongPwd123!', 8);
console.log(isValidStrongPassword); // Output: true
```

### Image File Validation

```js
import { validateImageFile } from 'regexx';

const isValidImageFile = validateImageFile('image.jpg');
console.log(isValidImageFile); // Output: true
```

### Html Tag Validation

```js
import { validateHtmlTag } from 'regexx';

const isValidHtmlTag = validateHtmlTag('<div>Hello World!</div>');
console.log(isValidHtmlTag); // Output: true
```

### 24-Time Format Validation

```js
import { validate24TimeFormat } from 'regexx';

const isValid24Time = validate24TimeFormat('15:30');
console.log(isValid24Time); // Output: true
```

### Hash Tag Validation

```js
import { validateHashTag } from 'regexx';

const isValidHashTag = validateHashTag('#validHashtag');
console.log(isValidHashTag); // Output: true
```

### Alpha Numeric Validation

```js
import { validateAlphaNumeric } from 'regexx';

const isValidAlphaNumeric = validateAlphaNumeric('abc123');
console.log(isValidAlphaNumeric); // Output: true
```

### Numeric Validation

```js
import { validateNumeric } from 'regexx';

const isValidNumeric = validateNumeric(123);
console.log(isValidNumeric); // Output: true
```

### Alphabetic Validation

```js
import { validateAlphabetic } from 'regexx';

const isValidAlphabetic = validateAlphabetic('abc');
console.log(isValidAlphabetic); // Output: true
```

### ISBN (International Standard Book Number) Validation (ISBN-13)

```js
import { validateISBN13 } from 'regexx';

const isValidISBN13 = validateISBN13('9780123456789');
console.log(isValidISBN13); // Output: true
```

### YouTube URL Validation

```js
import { validateYouTubeURL } from 'regexx';

const isValidYouTubeURL = validateYouTubeURL('https://www.youtube.com/watch?v=abc123');
console.log(isValidYouTubeURL); // Output: true
```

### Markdown Image URL Validation

```js
import { validateMarkdownImageURL } from 'regexx';

const isValidMarkdownImageURL = validateMarkdownImageURL('![alt text](https://example.com/image.jpg)');
console.log(isValidMarkdownImageURL); // Output: true
```

### Domain Name Validation

```js
import { validateDomainName } from 'regexx';

const isValidDomainName = validateDomainName('example.com');
console.log(isValidDomainName); // Output: true
```

### Value is Empty or not Validation

```js
import { validateIsEmpty } from 'regexx';

const isEmpty = validateIsEmpty(null);
console.log(isEmpty); // Output: true
```

### String have Whitespace or not Validation

```js
import { validateEmptyString } from 'regexx';

const emptyString = validateEmptyString('');
console.log(emptyString); // Output: true
```

---

<br>

## 🔗 GitHub

[`🔗 regexx`](https://github.com/Shippusharma/nodejs-architecture-typescript.git)

---

<br>

# ☯ License

> ## MIT License
>
> ## `Copyright` ©️ `2024`

---

<br>

# 🔰 Contribution

> **_thank you for your contribution._**

> # 🎉 `Shippu Sharma` 🎉
>
> [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shippu-sharma-4a50b91a2) [![Github](https://img.shields.io/badge/Github-%23404d59.svg?logo=github&logoColor=#D04A37)](https://github.com/shippusharma) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/s_i_b_u__s_h_a_r_m_a)

---
