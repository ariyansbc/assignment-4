
function InputHandler(id,isIncreament) {

  const getInput = document.getElementById(id);
  const getInputCount = parseInt(getInput.value);

  var getInputNewCount = getInputCount;
  if(isIncreament == true) {
    getInputNewCount = getInputCount + 1;
  }
  if(isIncreament == false && getInputCount > 0) {
     getInputNewCount = getInputCount - 1;
  }
  
  getInput.value= getInputNewCount;
  var firstClassticketTotal = 0;
  var economyClassticketTotal = 0;
  if(id == "firstClass-input" ) {
    firstClassticketTotal = getInputNewCount * 150;
  }
  if(id == "economy-input" ) {
    economyClassticketTotal = getInputNewCount * 100;
  }
  
  calculation()

}

function calculation() {

  const firstClassCount = getInputValue('firstClass-input')
  const economyCount = getInputValue('economy-input');
   const pairTotal = firstClassCount * 150 + economyCount * 100;
   const subTotal = document.getElementById('sub-total');
   var total = pairTotal + 500;
   subTotal.innerText = total;

   const vat = total * 0.1;
   document.getElementById('vat').innerText = '$' + vat;

   const grandTotal = total + vat;
   document.getElementById('grand-total').innerText ='$'+ grandTotal;

}

function getInputValue(id) {
  const getInput  = document.getElementById(id);
   const getCount = parseInt(getInput.value);
   return getCount;

}

// book-now button js
document.getElementById('book-now').addEventListener('click',function(){
  document.getElementById('show-msg').style.right = 0;
})
document.getElementById('cross-icon').addEventListener('click',function(){
  document.getElementById('show-msg').style.right = '-500px';
})

///////////////////
  // Calculation Part //
  // console.log('firstClassticketTotal',firstClassticketTotal);
  // const ticketTotal = firstClassticketTotal + economyClassticketTotal;
  // // const totalCost = getInputNewCount * 150;

  // //subtotal
  // const subTotal = document.getElementById('sub-total');
  // const subTotalNumber = parseFloat(subTotal.innerText);
  // const updateTotal = ticketTotal + 500;
  // subTotal.innerText = updateTotal;

///////////////////



//first class increament
// document.getElementById('firstClass-increase').addEventListener('click',function(){
//   const firstClassInput = document.getElementById('firstClass-input');
//   const firstClassCount = parseInt(firstClassInput.value);

//   const firstClassNewCount = firstClassCount + 1;

//   firstClassInput.value= firstClassNewCount;
//   const firstClassCost = firstClassNewCount * 150;

//   //subtotal
//   const total = document.getElementById('sub-total');
//   const totalNumber = parseFloat(total.innerText);
//   const updateTotal = firstClassCost + 500;
//   total.innerText = updateTotal;
// })



// function getInputHandler(isIncrease){

//   const economyInput  = document.getElementById('economy-input');
//   const economyCount = parseInt(economyInput.value);
//   var economyNewCount = economyCount;

//  if(isIncrease == true) {
//    economyNewCount = economyCount + 1;
//  }
//  if(isIncrease == false && economyCount > 0) {
//    economyNewCount = economyCount - 1 ;
//  }

//   economyInput.value = economyNewCount;
//   const economyCost = economyNewCount * 100;

//   const subTotal = document.getElementById('sub-total');
//   const subTotalNumber = parseFloat(subTotal.innerText);
//   const updateSubTotal = economyCost + 500;
//   subTotal.innerText = updateSubTotal;

// }


// economy increament part
// document.getElementById("economy-increase").addEventListener('click',function(){
//   const economyInput  = document.getElementById('economy-input');
//   const economyCount = parseInt(economyInput.value);
//   const economyNewCount = economyCount + 1;
//   economyInput.value = economyNewCount;
//   const economyCost = economyNewCount * 100;

//   const subTotal = document.getElementById('sub-total');
//   const subTotalNumber = parseFloat(subTotal.innerText);
//   const updateSubTotal = economyCost + 500;
//   subTotal.innerText = updateSubTotal;

//   // console.log(economyNewCount);
//   // console.log('subtotal',subTotalNumber);
//   // console.log(updateSubTotal);
// })

// economy decreament part

// document.getElementById("economy-decrease").addEventListener('click',function(){
//   const economyInput  = document.getElementById('economy-input');
//   const economyCount = parseInt(economyInput.value);
//   const economyNewCount = economyCount - 1;
//   economyInput.value = economyNewCount;
//   const economyCost = economyNewCount * 100;
  
//   //subtotal part
//   const subTotal = document.getElementById('sub-total');
//   const subTotalNumber = parseFloat(subTotal.innerText);
//   const updateSubTotal = economyCost + 500;
//   subTotal.innerText = updateSubTotal;


//   //vat part

//   // console.log(economyNewCount);
//   // console.log('subtotal',subTotalNumber);
//   // console.log(updateSubTotal);
// })

//  document.getElementById('firstClassIncreament').addEventListener('click',function(){
//     const inputValue =  document.getElementById('inputValue');
//     const inputValueNumber = parseInt(inputValue.value);
//     const newInputvalue = inputValueNumber + 1;
//     inputValue.value = newInputvalue;
//     console.log(inputValueNumber);

    //Calculation
   //  const totalAmount = document.getElementById('totalAmount');
   //  const totalAmountNumber = parseFloat(totalAmount.innerText);
   //  const newTotalAmount = newInputvalue * 150;
   //  const vat = document.getElementById("vat").innerText;
   //  const vatNumber = parseFloat(vat);
   //  console.log(vatNumber);


//  });
