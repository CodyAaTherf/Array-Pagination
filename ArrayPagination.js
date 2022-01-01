const dataList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    '1',
    '2',
    '3',
    '4',
    '5'
]

function paginateArray(arr , itemPerPage , pageIndex) {
    const lastIndex = itemPerPage * pageIndex;
    const firstIndex = lastIndex - itemPerPage;
    return arr.slice(firstIndex , lastIndex);
}

console.log(paginateArray(dataList , 5 , 2));
