let zero = f => x => x

let duck = (_) => console.log('quack!')

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