# Regular Expressions

### A 5 minute overview

<! ---?include=snippet/nav.md -->
---?include=snippet/quotes.md

---

### What are regular expressions?

 * Search patterns
 * Wildcards on steroids

---

### Problems that they can solve
 
 * validate
 * search and replace
 * extract 
 * split
 * normalize
 
---

### *NOT* good for:

 * parsing HTML
 * parsing CSV
 
---

## Let's Dive In!

---

### Basic matching

 * A letter or number matches that specific letter or number
 * `.` matches any character

+++

### Basic Matching Examples

|         |`A`   |`B`   |`.`  |
| -----   |------|------|-----|
| A       | yes  | no   | yes |
| B       | no   | yes  | yes |
| X       | no   | no   | yes |

---

### Ranges

Square brackets are called a 'range' and match the characters in the brackets: 

 * `[ABC]` matches `A` or `B` or `C`
 * `[A-Z]` shortcut for multiple letters
 * `[A-Z0-9]` multiple shortcuts in a single range
 * `-` must be the first character
 * `^` must not match
 * lots of shortcuts

+++

### Range Examples

|         |`[ABC]`|`[A-Z]` | `[-A-Z]` |`[^AB]`|
| -----   |-------|--------|----------|-------|
| A       | yes   | yes    | yes      | no    |
| B       | yes   | yes    | yes      | no    |
| X       | no    | yes    | yes      | yes   |
| -       | no    | no     | yes      | yes   |

---

### Quantifiers

How many times a match can/must occur.

 * `?`: zero or once
 * `*`: zero or more
 * `+`: one or more

+++

### Quantifier Examples

|         |`AB?C`|`AB*C`|`AB+C`|
| -----   |------|------|------|
| AC      | yes  | yes  | no   | 
| ABC     | yes  | yes  | yes  | 
| ABBC    | no   | yes  | yes  |
| ABBBC   | no   | yes  | yes  | 
| ABBBBC  | no   | yes  | yes  |
| ABBBBBC | no   | yes  | yes  | 
| ABBBBBBC| no   | yes  | yes  | 

---

### Numeric Quantifiers

Exactly how many times a match can/must occur.

 * `{n}`: exactly `n` times
 * `{n,}`: `n` or more times
 * `{n,m}`: between `n` and `m` times

+++

### Numeric Quantifier Examples

|         |`AB{3}C`|`AB{3,}C`|`AB{3,4}C`|
| -----   |--------|---------|---------|
| AC      | no     | no      | no      |
| ABC     | no     | no      | no      |
| ABBC    | no     | no      | no      |
| ABBBC   | yes    | yes     | yes     |
| ABBBBC  | no     | yes     | yes     |
| ABBBBBC | no     | yes     | no      |
| ABBBBBBC| no     | yes     | no      |

---

### Greedy vs Lazy Quantifiers

 * Extra `?` make it lazy
 * Non-greedy quantifiers affect later matches after the match
 
+++



---

### Anchors

Anchors control where a match can occur

 * `^`: beginning of the line
 * `$`: end of the line
 * `\A`: beginning of string
 * `\Z`: end of string

---

### Grouping
`()` 

 * building longer sequences
 * flags that apply to multiple characters
 * substitutions
 


---

### Alternatives (OR)

`|` useful but strange precedence

+++

|         | `2|two`|`^2|two$`|`^(2|two)$`|
| -----   |--------|---------|---------|
| 2       | yes    | yes     |yes|
| two     | yes| yes|yes|
| 22      | yes| yes|no|
| twentytwo | yes| yes|no|


---

### Modifiers

DANGER: vary by implementation!

 * `i`: case insensitive
 * `m`: multiline
 * `x`: ignore whitespace

---

## Examples

---?include=examples/password.md


---

### Are they complicated?

![OMG: two XKCD Comics?](https://imgs.xkcd.com/comics/regex_golf.png)

---
