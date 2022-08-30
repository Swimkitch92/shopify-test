// // checkout.addEventListener("click", async () => {
// //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// //   chrome.scripting.executeScript({
// //     target: { tabId: tab.id },
// //     function: setCheckoutButton,
// //   });
// // });

// // paymentOption.addEventListener('click',  async () => {
// //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// //   chrome.scripting.executeScript({
// //     target: { tabId: tab.id },
// //     function: setPaymentOption
// //   });
// // })
// var oldHref = document.location.href;
// let oldTotalValue
// let oldTotalNode;
// let oldTotalTitleValue;
// let oldTotalTitleNode;

// let monthlyTotal;
// let resetMonthlyPrice;

// window.onload = function() {
//     checkers()
//     var bodyList = document.querySelector("body")

//     var observer = new MutationObserver(function(mutations) {
      
//         mutations.forEach(function(mutation) {
            
//             if(mutation.target.id === 'monthly-upg' && mutation.target.innerText.indexOf(oldTotalValue) > -1) {
//                 console.log('yo we got a problem here')
//                 checkers()
//             }
//             if (oldHref != location.href) {
//                 oldHref = location.href;
//                 checkers()
//             }
//         });
//     });
    
//     var config = {
//         childList: true,
//         subtree: true
//     };
    
//     observer.observe(bodyList, config);
// };

// const friendlyMonthlyPrice = (price, duration) => {
//   let totalAmount = price
//   console.log(totalAmount, 'OMG')
//   totalAmount = totalAmount.replace('$','')
//   totalAmount = totalAmount.replace(' USD','')
//   totalAmount = totalAmount.replace('.','')
//   totalAmount = totalAmount.replace(',','')
//   const totalAmountInCents = parseInt(totalAmount)
//   const monthlyPrice =  Math.floor(totalAmountInCents/duration)
//   let monthlyPriceString = monthlyPrice.toString()
//   monthlyPriceString = monthlyPriceString.slice(0,-2) + '.' + monthlyPriceString.slice(-2)
//   console.log(monthlyPriceString)
//   return monthlyPriceString
// }

const getTotalCheckout = () => {
  let total = document.getElementsByClassName('payment-due__price')
  if(total.length === 0) {
    total = document.getElementsByClassName('_19gi7yt0 _19gi7yto _1fragemz _19gi7ytb _19gi7yt3')
  }
  
  return friendlyMonthlyPrice(total[0].innerHTML, 36)
}



// const getTotalProduct = () => {
//   const priceNode = document.querySelector('span.price-item')
//   let total = priceNode.innerHTML
//   return friendlyMonthlyPrice(total, 36)
  
// }


// const getTotalCart = () => {
//   const priceNode = document.querySelector('p.totals__subtotal-value')
//   let total = priceNode.innerHTML
//   return friendlyMonthlyPrice(total, 36)
  
// }

// const revertSubtotalComponent = () => {
//   if(oldTotalNode) {      
//     oldTotalNode.classList.remove('hidden-upg')
//     oldTotalTitleNode.classList.remove('hidden-upg')
//   } 
//     const newTitle = document.getElementById('new-title-upg')
//     const newTotal = document.getElementById('new-total-upg')
//     if(newTitle) {
//       newTitle.classList.add('hidden-upg')
//     }
//     if(newTotal) {
//       newTotal.classList.add('hidden-upg')
//     }
// }


// const checkers = () => {
//   console.log('--- STARTING UP ---')


  
  
  



//   // The body of this function will be executed as a content script inside the
//   // current page
//   // const setCheckoutButton = () => {

//     // const getTotal = () => {
//     //   const total = document.getElementsByClassName('payment-due__price')
//     //   console.log('TOTAL', total)
//     //   const hasDollarSignIndex = total[0].innerHTML.indexOf('$')
//     //   let monthlyPriceString = '$0'
    
//     //   if(hasDollarSignIndex > -1) {
        
//     //     let totalAmount = total[0].innerHTML.replace('$','')
//     //     totalAmount = totalAmount.replace('.','')
//     //     totalAmount = totalAmount.replace(',','')
//     //     const totalAmountInCents = parseInt(totalAmount)
//     //     const monthlyPrice =  Math.floor(totalAmountInCents/50)
//     //     monthlyPriceString = monthlyPrice.toString()
//     //     monthlyPriceString = monthlyPriceString.slice(0,-2) + '.' + monthlyPriceString.slice(-2)
//     //     console.log(monthlyPriceString)
//     //   }
//     //   return monthlyPriceString
//     // }
//     // 
//     // 
//     // 
//   //   const box = document.getElementsByClassName('kEwctmM5pguv6XkPR8mx6')
//   //   const button =  document.createElement('button')
//   //   const monthlyPriceString = getTotal()
//   //   const list = document.createElement('li')  
//   //   list.insertAdjacentElement('afterbegin', button)


//   //   button.innerHTML = `Upgraded + as low as $${monthlyPriceString} per month` 
//   //   button.id = 'upgraded'
//   //   button.style.cssText = 'border: 1px solid black;border-radius:8px;pointer:cursor;font-size:12px;height: 40px;'
//   //   button.addEventListener('click', () => location.href = 'https://www.google.com')
//   //   box[0].insertAdjacentElement('afterend', list)

  
//   // }




//   const updateTotalToMonthlyTotal = () => {
//     if(!oldTotalNode) {
//       console.log(oldTotalValue, 'YPPPP')
//       const total = document.getElementsByClassName('_19gi7yt0 _19gi7ytk _1fragemx _19gi7ytb _19gi7yt3')
//       oldTotalTitleNode = total[0]
//       oldTotalTitleValue = total[0].innerHTML
//       let totalMoney = document.getElementsByClassName('payment-due__price')
//       if(totalMoney.length === 0) {
//         totalMoney = document.getElementsByClassName('_19gi7yt0 _19gi7yto _1fragemz _19gi7ytb _19gi7yt3')
//       }
//       oldTotalValue = totalMoney[0].innerHTML
//       oldTotalNode = totalMoney[0]
//       console.log('HELLO', totalMoney[0])

//     }
//     oldTotalNode.id = 'monthly-upg'
    
//     if(oldTotalNode.classList.value.indexOf('hidden-upg') === -1) {
//       oldTotalNode.classList.add('hidden-upg')
//       oldTotalTitleNode.classList.add('hidden-upg')
      
      
//       oldTotalTitleNode.insertAdjacentHTML('afterend', `<strong class="${oldTotalTitleNode.classList.value.replace('hidden-upg', '')}" id="new-title-upg">Estimated Monthly Total </strong>`)
//       oldTotalNode.insertAdjacentHTML('afterend',`<strong class="${oldTotalNode.classList.value.replace('hidden-upg', '')}" id="new-total-upg">$${friendlyMonthlyPrice(oldTotalValue,36)}/mo.</strong>`)
//     } else {
//       const newTitle = document.getElementById('new-title-upg')
//       const newTotal = document.getElementById('new-total-upg')
//       newTitle.toggle('hidden-upg')
//       newTotal.toggle('hidden-upg')
//     }
    

//   }



//   const setMonthlyPayment = () => {

//     if(!document.getElementById('upgraded-payment')) {

    
//     let paymentOption = document.querySelector('label[for="checkout_payment_gateway_78129889443"]')
    
//     let labelText = ` as low as $${getTotalCheckout()} per month`
//     if (!paymentOption) {
//       paymentOption = document.querySelector('label[for="basic-customManualPayment-78129889443"] strong')
//       paymentOption.insertAdjacentHTML('afterend', `<strong id="upgraded-payment" class=${paymentOption.classList}>${labelText}</strong>`)
//     } else {
//       paymentOption.id = 'upgraded-payment'
//       paymentOption.innerHTML= 'Upgraded' + labelText
//     }
    
//     const radioInput = document.getElementById('checkout_payment_gateway_78129889443') || document.getElementById('basic-customManualPayment-78129889443')
//     const radioButtons = document.querySelectorAll('div[class="_1FPaj"] > label')
    
//     radioButtons.forEach((radio) => {
//       if(radio.htmlFor.indexOf('address') === -1) {
//         radio.addEventListener('click',() => {
//           revertSubtotalComponent()
//         })
//       }
//     })
    
//     console.log('RADIO', radioInput)
    
//     if(radioInput.checked) {
//       updateTotalToMonthlyTotal()
//     }

//     let label = document.querySelector('label[for="checkout_payment_gateway_78129889443"]') || document.querySelector('label[for="basic-customManualPayment-78129889443"]')
//     label.addEventListener('click', () => {
//       updateTotalToMonthlyTotal()
//     })
//   } else {
//     const radioInput = document.getElementById('checkout_payment_gateway_78129889443') || document.getElementById('basic-customManualPayment-78129889443')
//     console.log('RADIO', radioInput)
//     if(radioInput.checked) {
//       if(oldTotalNode) {
//         console.log('nodes exist so lets change')
//         updateTotalToMonthlyTotal()
//       } else {
//         console.log('they dont exist yet')
//         updateTotalToMonthlyTotal()
//       }
//     }
//   }
      
//   }

  


//   const grabOrderIdAndRedirect = () => {
    
//     let token = location.href.split('/')[5]
//     const bodyList = document.querySelector("body")
//     bodyList.insertAdjacentHTML('afterbegin', 
//     `<div style="position:fixed;z-index:5000;height:100%;display: flex;width:100%;background-color: lightgrey;flex-direction: row;justify-content: center;align-items: center;">
//       <div class="shopify-ext__loader"></div>
//       <div style="font-weight:bold;text-align:center;margin-top:30px;">You are being redirected to Upgraded's secure payment portal to complete this transaction!</div>
//     </div>`)
    
//     const RETAILER_ID = 100015
//     const failure_url = encodeURIComponent(location.href)
//     const success_url = encodeURIComponent(location.href + '#upgraded-success')
//     const redirectUrl = `https://api.upgraded.solutions/shopify/v1/${RETAILER_ID}/checkout/${token}?success_url=${success_url}&failure_url=${failure_url}`
//     location.href = redirectUrl

//   }


//   const showMonthlyPrice = () => {
//     const priceContainer = document.querySelector('div.price')
//     console.log(priceContainer, 'PRICE')
//     priceContainer.insertAdjacentHTML('beforeend', 
//     `
//       <br>
//       <span> Upgrade every 24 months <br> for as low as <strong class="bold-upg">$${getTotalProduct()}/mo.</strong> with Upgraded+</span>
//     `)
    
//   }


//   const showMonthlyPriceCart = () => {
//     const priceContainer = document.querySelector('div.totals')
//     console.log(priceContainer, 'PRICE CART')
//     priceContainer.insertAdjacentHTML('afterend', 
//     `
//       <br>
//       <span style="text-align:end;float:right;"> Upgrade every 24 months for as low as <strong class="bold-upg">$${getTotalCart()}/mo. </strong> with Upgraded+</span>
//     `)
    
//   }

  const showMonthlyPriceCheckout = () => {
    if(!document.getElementById('price-add-upg')) {
      const priceContainer = document.querySelectorAll('div._1Oyyu')
      console.log('checkoutPRiceContainer', priceContainer)
      priceContainer[1].insertAdjacentHTML('afterend', 
      `
        <br>
          <span id="price-add-upg" style="position:relative;bottom:0px;"> Upgrade every 24 months for as low as <strong class="bold-upg">$${getTotalCheckout()}/mo. </strong> with Upgraded+</span>
        `
      )

    }
  }


//   if(location.href.indexOf('payment') > -1) {    
//     setTimeout(setMonthlyPayment, 250)
//   }
//   if(location.href.indexOf('#upgraded-success') > -1) {

//   }
//   if(location.href.indexOf('products') > -1) {
//     showMonthlyPrice()
//   }

//   if(location.href.indexOf('checkouts') > -1 && location.href.indexOf('payment') === -1) {
//     revertSubtotalComponent()
//   }

//   if(location.href.indexOf('cart') > -1) {
//     showMonthlyPriceCart()
//   }

//   if(location.href.indexOf('thank_you') > -1) {
    
//     grabOrderIdAndRedirect()
    
//   }

//   if(location.href.indexOf('checkouts') > -1) {
//     showMonthlyPriceCheckout()
//   }

//   // const completeOrder = () => {
//   //   const radioInput = document.getElementById('checkout_payment_gateway_78129889443') || document.getElementById('basic-customManualPayment-78129889443')
//   //   console.log(radioInput, 'radio!')
//   //   radioInput.click()
//   //   setTimeout(() => {
//   //     let completeOrderButton = document.getElementsByClassName('step__footer__continue-btn btn')
//   //     if(completeOrderButton. length === 0) {
//   //       completeOrderButton = document.querySelectorAll('button[type="submit"]')
//   //     }
//   //     console.log('BUTTON', completeOrderButton)
//   //     completeOrderButton[0].click()
//   //   }, 100)
//   // }


  
// }

(function($) {
  $(document).on('page:load page:change', function() {
    // Add content
  
    console.log('hello world', Shopify.Checkout.step)
    console.log(Shopify.Checkout)
    showMonthlyPriceCheckout()

  });

})(Checkout.$)