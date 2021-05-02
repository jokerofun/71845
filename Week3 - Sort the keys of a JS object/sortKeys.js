function sortByKey(obj) {
    return Object.keys(obj).sort().reduce(
        (newObj, key) => { 
          newObj[key] = obj[key]; 
          return newObj;
        }, 
        {}
      );
}

const obj = {
    a: 1,
    c: 2,
    b: 3,
}

const objSorted = sortByKey(obj);

console.log('Initial array');
console.log(obj);

console.log('Sorted array');
console.log(objSorted);
