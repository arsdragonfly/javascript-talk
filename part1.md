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

# And

# `let identity = x => x`

---

# How about another name?

# `let zero = x => x`

---

# Meet our new friend!

# `let K = x => (y => x)`

---

# What is, say, `K(1)`?

---

# `(x => (y => x))(1)`
# `(y => 1)`

---

# `K(1)` is a function that takes an argument and returns 1.

---

# What about K(K) ?

---

# `K(1)` is a function that takes an argument and returns 1.
# `K(K)` is a function that takes an argument and returns K.
# How about K(K(1))?

---

# `K(K(1))` is a function that takes an argument and returns _K(1)_.

---

# # `K(K(1))` is a function that takes an argument and returns a function that takes an argument and returns 1.

---
# And a few more!

# `let one = K(zero)`
# `let two = K(K(zero))`
# `let seven = K(K(K(K(K(K(K(zero)))))))`

---

# Here's a function that adds 1 to a number
# `let add1 = x => K(x)`
# What would be a function that substracts 1 from a number?

---

# `let sub1 = x => x()`

---

# A duck popped up!

# `let duck = () => console.log('quack!')`

---

# how to let it quack for $n$ times?

---

# `let nmap = f => ...`

---

```javascript
let nmap = f => {
    let g = n => (n === zero ? g(n(f())) : zero)
    return g
}
```
---

# `nmap(one)(duck)`
> quack!
# `nmap(two)(duck)`
> quack!
> quack!
# `nmap(zero)(duck)`
> 

---

# Here's a binary tree!

---

```javascript
let tree = l => r => sel => sel(l)(r)
let left = l => r => l
let right = l => r => r
```

---