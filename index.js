
const consoleSth = (log) => {
    const str = "🐥" + log;
    return str
}

const addOne = (number, fn) => {

    const total = number + 1;
    const str = fn(total);
    console.log(str)
    return total;
}

const result = addOne(5, consoleSth);

consoleSth("aaa");
