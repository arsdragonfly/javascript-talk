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

let tree = l => r => sel => sel(l)(r)
let left = l => r => l
let right = l => r => r