function quickSort(array: number[]) {
    function swap(array: number[] , i: number, j: number) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function patition(array: number[], left: number, right: number) {
        let pivot = array[right];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, i, storeIndex);
                storeIndex++;
            }
        }
        swap(array, storeIndex, right);
        return storeIndex;
    }
    function sort(array: number[], left: number, right: number) {
        if (left > right) {
            return;
        }
        let storeIndex = patition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }
    sort(array, 0, array.length - 1);
    return array;
}