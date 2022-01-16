// Your code here

function mapToNegativize(sourceArray) {
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(-1 * elem);
    };
    return newArray;
};

function mapToNoChange(sourceArray) {
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(elem);
    };
    return newArray;
};

function mapToDouble(sourceArray) {
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(elem * 2);
    };
    return newArray;
};

function mapToSquare(sourceArray) {
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(elem * elem);
    };
    return newArray;
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (const elem of sourceArray) {
        total = total + elem;
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    for (const elem of sourceArray) {
        if (!elem) return false;
    };
    return true
};

function reduceToAnyTrue(sourceArray) {
    for (const elem of sourceArray) {
        if (elem) return true;
    };
    return false;
};