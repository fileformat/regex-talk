---


## Password

 * At least 8 characters
 * At least 1 number
 * At least 1 letter
 * At least 1 symbol

+++

### Use Lookahead!

 * digit: `(?=.*\d)`
 * letter: `(?=.*[a-zA-Z])`
 * something else: `(?=.*[^0-9a-zA-Z])`
 * at least 8 characters: `.{8,}`

