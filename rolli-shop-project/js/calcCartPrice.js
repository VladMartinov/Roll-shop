function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

  let PriceTotal = 0;

  cartItems.forEach(function(item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    PriceTotal += currentPrice;
  })

  totalPriceEl.innerText = PriceTotal;

  if(PriceTotal > 0){
    cartDeliveryEl.classList.remove('none');
  } else {
    cartDeliveryEl.classList.add('none');
  }

  if( PriceTotal >= 600){
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }

}