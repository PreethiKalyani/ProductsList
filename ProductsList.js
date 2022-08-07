let myTable = document.querySelector('#table');

let products_list = [
    { sno: '1', productName: 'Mobile', price: '10000', discountedPrice: '9000', taxprice: '180' },
    { sno: '2', productName: 'Laptop', price: '100000', discountedPrice: '90000', taxprice: '1800' },
]

let headers = ['S.No', 'Product Name', 'Price', 'Discounted Price', 'Tax for Discounted Price'];
console.log("blan",products_list)
let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
})

table.appendChild(headerRow);

products_list.forEach(products => {
    let row = document.createElement('tr');

    Object.values(products).forEach(text => {
        let result = text === "0" ? "-" : text
        let cell = document.createElement('td');
        let textNode = document.createTextNode(result);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })

    table.appendChild(row);
});

myTable.appendChild(table);
