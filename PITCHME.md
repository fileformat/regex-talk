# Regular Expressions

### A 5 minute overview

---

## Slideshow navigation

 * @fa[arrow-right] Next slide
 * @fa[arrow-left] Previous slide
 * <b>F</b> - Full screen
 * /O/ - Thumbnail navigation
 * *S* - Speaker notes

---

### What are regular expressions?

 * Search patterns
 * Wildcards on steroids

---

### Problems that they can solve
 
 * finding/normalizing manually entered data
 * multiple spellings
 
---

### *NOT* good for:

 * parsing HTML
 * parsing CSV
 
---

### Pros and Cons

 + Powerful
 + Fast
 - Learning curve
 - Complicated

---

## Let's Dive In!

---

### Basic matching

@ul
 * A letter or number matches that specific letter or number
 * `.` matches any character
 * `[ABC]` are ranges that match the characters in the brackets
 * `[A-Z]` shortcut.
 * `[A-Z0-9]` multiple shortcuts in a single range
 * `-` must be the first character: `[-A-Z]` matches any letter or `-`.
 * More advanced: [Character classes](#character-classes) are shortcuts for common ranges.
@ulend
+++

### Basic Matching Examples:

|         |`A`   |`.`   |`[ABC]`|`[A-Z]` |
| -----   |------|------|-------|--------|
| A       | yes  | yes  | yes   | yes    |
| B       | no   | yes  | yes   | yes    |
| X       | no   | yes  | no    | yes    |

---

### Quantifiers

How many times a match can/must occur.

 * `?`: zero or once
 * `*`: zero or more
 * `+`: one or more

+++

### Quantifier Examples:

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

### Numeric Quantifier Examples:

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

---

### Anchors

Anchors control where a match can occur

 * `^`: beginning of the line
 * `$`: end of the line
 * `\A`: beginning of string
 * `\Z`: end of string

---

### Modifiers

DANGER: vary by implementation!

 * `i`: case insensitive
 * `m`: multiline
 * `x`: ignore whitespace

---

### Alternation (OR)

`|` useful but strange precedence

---

### Grouping
`()` very useful for substitutions
---

### Are they complicated?

![OMG: two XKCD Comics?](https://imgs.xkcd.com/comics/regex_golf.png)

---
