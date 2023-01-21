let array = [2, 7, 5, 3, 9, 1, 8, 4, 6, 10, 12, 11]
let array2 = [1, 3, 3, 2, -6, -42, 0, 5, -16]

console.log(mergeSort(array));
console.log(mergeSort(array2));


function mergeSort(array) {
    //exit case
    if(array.length <= 1) return array;
    
    //breaking into subarrays
    const midPoint = Math.floor(array.length/2);
    let leftArray = array.slice(0, midPoint);
    let rightArray = array.slice(midPoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
    let sortedArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        }else {
            sortedArray.push(right.shift());
        }
    }

    while (right.length) {
        sortedArray.push(right.shift());
    }

    while (left.length) {
        sortedArray.push(left.shift());
    }
    
    return sortedArray;
}