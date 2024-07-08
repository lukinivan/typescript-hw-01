function merge<A, B> (objA: A, objB: B) {
    return Object.assign({}, objA, objB);
}

console.log(merge({ name: "alex" }, {age: 20}));
