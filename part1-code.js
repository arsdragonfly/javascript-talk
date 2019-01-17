let zero = x => x

let K = x => (y => x)

let one = K(zero)
let two = K(K(zero))
let seven = K(K(K(K(K(K(K(zero)))))))

let duck = () => console.log('quack!')

let nmap = f => {
    let g = n => (n === zero ? zero : g(n(f())))
    return g
}

let prepend = h => r => sel => sel(h)(r)
let head = l => l(h => r => h)
let rest = l => l(h => r => r)

let foo = prepend(1)(prepend(2)(prepend(4)(null)))

let toString = l => {
    if (l === null)
    {
        return ''
    }
    else
    {
        return `${head(l)} ${toString(rest(l))}`
    }
}

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