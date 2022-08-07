import { DiscountAndTaxPercentage } from "./DiscountAndTaxValue"
const rowData = [
    {
        sno : 1,
        productName: 'Mobile',
        price: 10000,
        discountPrice: "0",
        taxForDiscountPrice: "180"
    },
    {
        sno : 2,
        productName: 'Laptop',
        price: 100000,
        discountPrice: "90000",
        taxForDiscountPrice: "0"
    },
    {
        sno : 3,
        productName: 'Washing Machine',
        price: 25000,
        discountPrice: "10000",
        taxForDiscountPrice: "0"
    }
]

const columnDefs =[
    { headerName: 'S.No',field: 'sno'},
    { headerName:'Product Name', field: 'productName'},
    { headerName:'Price',field: 'price'},
    { headerName:'Discount Price',field: 'discountPrice', cellRenderer: 'DiscountAndTaxPercentage'},
    { headerName:'Tax for Discount Price',field: 'taxForDiscountPrice', cellRenderer: 'DiscountAndTaxPercentage'}
]

const frameworkComponents = {
    DiscountAndTaxPercentage : DiscountAndTaxPercentage,
   
}


export {rowData, columnDefs, frameworkComponents}