function selectSort(array: number[]): number[] {
    let length = array.length;
    let minIndex;
    for (let i = 0 ; i < length - 1; i++) {
        minIndex = i;
        for (let j = i; j < length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex);
        }
    }
    return null;
}

function swap(array: number[], j:number, i: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}