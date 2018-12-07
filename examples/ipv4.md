---

## IPv4 Address

 * 0 to 255
 * repeated 4 times
 * period between each
 
+++

### Naive

 `[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{3}`
 
+++

### No repetition

 `([0-9]{1,3})(\.[0-9]{1,3}){3}`
 
+++

### Too permissive: accepts 256-999

instead of `[0-9]`:

 * 250 to 255: `25[0-5]`
 * 200 to 249: `2[0-4]\d`
 * 001 to 199: `[0-1]?\d?\d`
    
+++

### Complete result

`((25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3})`