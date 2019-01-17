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
# function application: `f(x)`

---

# And later
# `if` and `else`
# `===`

---

# `let identity = x => x`

---

# What's this?

# `let zero = f => (x => x)`
[Church Numerals](https://en.wikipedia.org/wiki/Church_encoding#Church_numerals)

---

# `let zero = f => (x => x)` is a function that takes an argument `f` and returns the identity function.

# It's the same as `let zero = f => x => x`

---

# `let one = f => x => f(x)`
# `let two = f => x => f(f(x))`
# `let three = f => x => f(f(f(x)))`
# Here's a duck: `let duck = (_) => console.log('quack!')`
# How to let the duck quack `n` times?

---

# `three(duck)(null)`
# quack!
# quack!
# quack!

---

# How do we add 1 to a number?

```javascript
// something like...
let succ = n => n // from a number to a number
```

---

# How do we add 1 to a number?

```javascript
// something like...
let succ = n => (f => x => n)
// a number would look like this
```

---

# How do we add 1 to a number?

```javascript
let succ = n => f => x => f(n(f)(x))
// apply f for one more time
```

---

# How do we "caclulate" $a + b$?

---

# Just apply succ for `a` times!

```javascript
let add = a => b => a(succ)(b)
```

---

# How do we calculate $ab$?
# How do we calculate $b^a$?

---

```javascript
let mult = a => b => a(add(b))(zero)
let exp = a => b => a(mult(b))(succ(zero))
```
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

# Event Emitter/Hook

---

# `attach(hook, f)` adds a function `f` to be executed when the hook is fired, and returns the new hook.

# `hook()` executes all the `f`'s attached to the hook.

---

```javascript
let hook = () => undefined
hook = attach(hook, () => console.log('Oink!'))
hook = attach(hook, () => console.log('Moo!'))
hook = attach(hook, () => console.log('Meow!'))
hook() // Oink! Moo! Meow!
```

---

# How do we define `attach`?

```javascript
let fire = hook => hook()
```

---

```javascript
let attach = hook => f => () => {
    hook()
    return f()
}
```

---

# Escape hatch

```javascript
// we can pass in an error handler err
// and a success handler next
let hook2 = err => next => next()

hook2 = attach(hook2)(err => next => err("Always errs"))
hook2 = attach(hook2)(err => next => {
    console.log("Won't print!")
    return next()
})

let e = x => console.log(`Error: ${x}`)
let n = x => console.log(x)
hook2(e)(n)
// "Always errs"
```
---
```javascript
let attach2 = hook => f 
=> err => next => hook(err)(() => f(err)(next))
```
---

# Useful resources

- [Learn You A Haskell For Great Good](learnyouahaskell.com)
- [The Little Schemer](https://mitpress.mit.edu/books/little-schemer-fourth-edition)
- [Lodash](lodash.com)