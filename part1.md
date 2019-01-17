Intermediate Javascript: Part 1
Higher order functions
===

---

# If you don't know how to run Javascript
# Go to [repl.it](https://repl.it/)

---

# Suppose now that you know nothing about Javascript

---

# Except for
# `let`
# `x => value`
# `if` and `else`
# function invocation: `f(x)`
# `===`

---

# `let identity = x => x`

---

# What's this?

# `let zero = f => (x => x)`

---

# `let zero = f => (x => x)` is a function that takes an argument `f` and returns the identity function.

# It's the same as `let zero = f => x => x`

---

---

---

# Here's (more than) a singly linked list!

---

```javascript
let prepend = l => r => sel => sel(l)(r)
let head = l => r => l
let rest = l => r => r
```

---

# Let's see how it works:

```javascript
null // []
prepend(0)(null) // [0]
prepend(1)(prepend(0)(null)) // [1, 0]
```

---

# How do we print the list?

```javascript
let toString = l => {
    if (l === null) {
        return ''
    } else {
        return `${head(l)} ${toString(rest(l))}`
    }
}
```

---

# How do we sum over the list?

```javascript
let toSum = l => {
    if (l === null) {
        return 0
    } else {
        return head(l) + toSum(rest(l))
    }
}
```

---

# How do we calculate the elements' product?

```javascript
let toProduct = l => {
    if (l === null) {
        return 1
    } else {
        return head(l) * toProduct(rest(l))
    }
}
```

---

# Is there a pattern?

---

# We have:
- # an initial value (base case)
- # some process that builds a new value out of the old one


---

# The initial value:
- # toString: ''
- # toSum: 0
- # toProduct: 1

---

# How do we build a new value?

```javascript
buildString = h => r => ...
buildSum = h => r => ...
buildProduct = h => r => ...
```

---

# How do we build a new value?

```javascript
buildString = h => r => `${h} ${r}`
buildSum = h => r => h + r
buildProduct = h => r => h * r
```

---

# And then?

```javascript
let foldr = builder => initial_value => {
    let g = l => {
        if (l === null) {
            return initial_value
        } else {
            return builder(head(l))(g(rest(l)))
        }
    }
    return g
}
```

---

# Thus...

```javascript
let toString_ = foldr(buildString)('')
let toSum_ = foldr(buildSum)(0)
let toProduct_ = foldr(buildProduct)(1)
```

---

# Event Emitter

---

# Useful resources

- [Learn You A Haskell For Great Good](learnyouahaskell.com)
- [The Little Schemer](https://mitpress.mit.edu/books/little-schemer-fourth-edition)
- [Lodash](lodash.com)