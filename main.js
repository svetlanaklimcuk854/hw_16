
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


// 2

  
const multiple = (a, b) => {
  const stamp = new Date().getTime();
  while (new Date().getTime() < stamp + 2000) {}
  return a * b;
};

function decorate() {
  const cache = new Map();

  return function (a, b) {
    const key = `${a}-${b}`;
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = multiple(a, b);
      cache.set(key, result);
      return result;
    }
  };
}

const newMultiple = decorate();

console.log(newMultiple(3, 1));
console.log(newMultiple(2, 1));
console.log(newMultiple(1, 1));
console.log(newMultiple(3, 1));
console.log(newMultiple(2, 1));
console.log(newMultiple(1, 1));
console.log(newMultiple(3, 1));
console.log(newMultiple(2, 1));
console.log(newMultiple(1, 1));


const button = document.querySelector("#button");
const textarea = document.querySelector("#textarea");
const table = document.querySelector("table");

button.addEventListener("click", () => {
  const text = textarea.value
    .replace(/[.,\/#!$%\^&\*;:{}=\-—_`~()]/g, "")
    .replace(/\n/g, " ")
    .toLowerCase();
  let words = text.split(" ");
  words = words.filter((word) => word !== "");
  const unicValues = new Set(words);
  unicValues.forEach((word) => {
    const row = `<tr>
        <td>${word}</td>
        <td>${words.filter((w) => w === word).length}</td>
      </tr>`;
    table.innerHTML += row;
  });
});

console.log(button, textarea, table);