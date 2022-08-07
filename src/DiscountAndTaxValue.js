function DiscountAndTaxPercentage(props){
    const val = props.value
    const discount_tax_percentage = val === "0" ? "-" : val
    return discount_tax_percentage
}
export {DiscountAndTaxPercentage}