import products from './products';

const productName: string = 'tote bag';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = '575 Broadway, Los Angeles, CA';

const product = products.filter(product => product.name === productName)[0]

if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on the way.')
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log('We provide free shipping for this product.')
} else {
  shipping = 5;
}

// if (shippingAddress.match('New York')) {
//   taxPercent = 0.1;
// } else {
//   taxPercent = 0.05;
// }

taxPercent = shippingAddress.match('New York') ? 0.1 : 0.05;

taxTotal = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping;

console.log(`
Product: ${product.name}
Address: ${shippingAddress}
Price: $${Number(product.price).toFixed(2)}
Tax: $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}
`);
