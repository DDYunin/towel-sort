
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const resultArray = [];
    // Если matrix не = undefined, то для неё можно вызывать метод
    if (matrix !== undefined) {
        matrix.forEach((row, index) => {
            // Если index чётный, то просто копируем значения в том же порядке
            // А в противном случае реверсируем значения и тоже копируем
            if (index % 2 === 0) {
                resultArray.push(...row);
            } else {
                resultArray.push(...row.reverse());
            }
        });
    }
    return resultArray;
}
