# Regular Expressions

### A 5 minute overview

---

## Slideshow navigation

 * @fa[arrow-right] Next slide
 * @fa[arrow-left] Previous slide
 * *F* - Full screen
 * *O* - Thumbnail navigation
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

### Problems that is *NOT* good for

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

 * A letter or number matches that specific letter or number
 * Square brackets are called a 'range' and match the characters in the brackets: `[ABC]` matches `A` or `B` or `C`.
 * Ranges can use a `-` as a shortcut: `[A-Z]` matches `A` or `B` or ... or `Z`.
 * Ranges can have multiple shortcuts: `[A-Z0-9]` matches any letter or number
 * Ranges that can match a `-` must have it as the first character: `[-A-Z]` matches any letter or `-`.
 * `.` matches any character
 * More advanced: [Character classes](#character-classes) are shortcuts for common ranges.

---

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
 * `{n}`: exactly `n` times
 * `{n,}`: `n` or more times
 * `{n,m}`: between `n` and `m` times
 * More advanced: [Non-greedy quantifiers](#nongreedy-quantifiers) affect later matches after the match

---
### Quantifier Examples:

|         |`AB?C`|`AB*C`|`AB+C`|`AB{3}C`|`AB{3,}C`|`AB{3,4}C`|
| -----   |------|------|------|--------|---------|---------|
| AC      | yes  | yes  | no   | no     | no      | no      |
| ABC     | yes  | yes  | yes  | no     | no      | no      |
| ABBC    | no   | yes  | yes  | no     | no      | no      |
| ABBBC   | no   | yes  | yes  | yes    | yes     | yes     |
| ABBBBC  | no   | yes  | yes  | no     | yes     | yes     |
| ABBBBBC | no   | yes  | yes  | no     | yes     | no      |
| ABBBBBBC| no   | yes  | yes  | no     | yes     | no      |

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
