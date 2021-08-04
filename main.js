
const dataTypes = [
    true,
    's',
    0,
    null,
    undefined,
    {},
    [],
    0n,
    Symbol(),
    () => { },
]

const map = new Map();

dataTypes.map((key) => {
    map.set(key, {
        'значение': key,
        'тип': typeof key,
        'преобразование к числу': typeof key !== typeof Symbol() ? Number(key) : key == '-',
        'преобразование к строке': String(key),
        'преобразование к булеву': key == true,
    });
});

map.forEach((key, value) => {
    console.log(value, key);
});
