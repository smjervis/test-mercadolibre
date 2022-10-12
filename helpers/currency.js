const formatCurrency = (amount) => {
	return new Intl.NumberFormat(
		'es-US',
		{style: 'currency', currency: "USD", minimumFractionDigits: 0}
	).format(amount);
}
 
export default formatCurrency;