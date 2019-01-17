let zero = f => x => x

let one = f => x => f(x)
let two = f => x => f(f(x))
let three = f => x => f(f(f(x)))

let duck = (_) => console.log('quack!')

let succ = n => f => x => f(n(f)(x))
let add = a => b => a(succ)(b)
let mult = a => b => a(add(b))(zero)
let exp = a => b => a(mult(b))(succ(zero))

let prepend = h => r => sel => sel(h)(r)
let head = l => l(h => r => h)
let rest = l => l(h => r => r)

let foo = prepend(1)(prepend(2)(prepend(4)(null)))

let toString = l => {
    if (l === null) {
        return ''
    } else {
        return `${head(l)} ${toString(rest(l))}`
    }
}

let toSum = l => {
    if (l === null) {
        return 0
    } else {
        return head(l) + toSum(rest(l))
    }
}

let toProduct = l => {
    if (l === null) {
        return 1
    } else {
        return head(l) * toProduct(rest(l))
    }
}

let buildString = h => r => `${h} ${r}`
let buildSum = h => r => h + r
let buildProduct = h => r => h * r

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

let toString_ = foldr(buildString)('')
let toSum_ = foldr(buildSum)(0)
let toProduct_ = foldr(buildProduct)(1)

let hook = () => undefined

let attach = hook => f => () => {
    hook()
    return f()
}

hook = attach(hook)(() => console.log('Oink!'))
hook = attach(hook)(() => console.log('Moo!'))
hook = attach(hook)(() => console.log('Meow!'))

let hook2 = err => next => next()

let attach2 = hook => f => 
err => next => hook(err)(() => f(err)(next))

hook2 = attach2(hook2)(err => next => err("Always errs"))
hook2 = attach2(hook2)(err => next => {
    console.log("Won't print!")
    return next()
})

let e = x => console.log(`Error: ${x}`)
let n = () => console.log("Success!")
