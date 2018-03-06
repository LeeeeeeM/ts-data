function mergesort(array: number[]):number[] {
    if (array.length === 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle);
    return merge(mergesort(leftArray), mergesort(rightArray));
}

function merge(leftArray: number[], rightArray: number[]):number[] {
    let array = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            array.push(leftArray[leftIndex++]);
        } else {
            array.push(rightArray[rightIndex++])
        }
    }
    while(leftIndex < leftArray.length) {
        array.push(leftArray[leftIndex++]);
    }
    while(rightIndex < rightArray.length) {
        array.push(rightArray[rightIndex++]);
    }
 
    return array;
}