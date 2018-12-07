# Regular Expressions

### A 5 minute overview

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

### Where can I use them?
 
 * Javascript (RegExp or //, string methods)
 * PostgreSQL (~, ~*, !~, !~*)
 * HTML (pattern attribute on input)
 * shell (grep, etc)
 * pretty much anywhere

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
 
+++

 * `banana+` matches bananaaaa
 * `(banana)+` matches bananabanana

 * 1/11 = 0.09090909
 * `0\.(09){1,}`
 
 * `"result=pass".replace(/result=(.*)/, "The test result is $1.")`
 * The test result is pass
 

---

### Alternatives (OR)

<!-- source code note: these are not real pipe characters, since that screws up the markdown: ⎮ (U+23AE, Integral Extension) -->

`⎮` useful but be careful about precedence

+++

|         | `2⎮two` | `^2⎮two$` | `^(2⎮two)$` |
| -----   |--------|---------|---------|
| 2       | yes    | yes     |yes|
| two     | yes| yes|yes|
| 22      | yes| yes|no|
| twentytwo | yes| yes|no|


---

### Greedy vs Lazy Quantifiers

 * Extra `?` make it lazy
 * Affect later matches after the match
 * Greedy matches as much as possible
 
+++

text: "{START}Mary{END} had a {START}little lamb{END}"

`{START}.*{END}`
greedy: one occurence, with value "Mary {END} had a {START} little lamb"

`{START}.*?{END}`
lazy: two occurences, "Mary" and "little lamb" 

---

## Lookahead &amp; Lookbehind

 * doesn't change position for future
 * ahead: next characters
 * behind: previous characters
 * positive (i.e. matches) or negetive (i.e. doesn't match)
 
+++

 * `(?=foo)` next characters will be foo
 * `(?<=foo)` previous characters were foo
 * `(?!foo)` next characters are not foo
 * `(?<!foo)` previous characters were not foo

---

### Modifiers

DANGER: vary by implementation!

 * `i`: case insensitive
 * `m`: multiline
 * `x`: ignore whitespace

---

## Examples

---?include=examples/zipcode.md

---?include=examples/ipv4.md

---?include=examples/password.md

---?include=examples/number.md

---

## Performance

 * Surprisingly good: compiles to state machine
 * Danger: Denial of service
 
+++

 * quantifier on a quantifier: multiplies possibilities to test for
 * `^(A+)*B`
 * AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC
 
--- 

### Best Stackoverflow ever

[Parsing HTML with Regex](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)

---

### Fun with escapes

![Backslashes](https://imgs.xkcd.com/comics/backslashes.png)

---

### Are they complicated?

![OMG: two XKCD Comics?](https://imgs.xkcd.com/comics/regex_golf.png)


---
