
export function fetchData(values) {
console.log(values);
    return{
        type: 'GET_USER',
        payload: values
    }
}