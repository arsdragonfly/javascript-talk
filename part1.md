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
    if (l === null)
    {
        return ''
    }
    else
    {
        return `${head(l)} ${print(rest(l))}`
    }
}
```

---

# How do we sum over the list?

```javascript
let toSum = l => {
    if (l === null)
    {
        return 0
    }
    else
    {
        return head(l) + toSum(rest(l))
    }
}
```

---

# How do we calculate the elements' product?

```javascript
let toProduct = l => {
    if (l === null)
    {
        return 1
    }
    else
    {
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

# 

---

# Event Emitter

---

# Monads

---

# 