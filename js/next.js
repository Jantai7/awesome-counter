
var limitInput = document.querySelector('#limit');
var start = document.querySelector('.start');
var errorOutput = document.querySelector('#errorOutput');
var counter = document.querySelector("#counter");

var count= 0
var limit = 0;

limitInput.addEventListener('input', function(e) {
  limit = Number(e.target.value);
})

function trigger() {
  start.addEventListener('click', function() {
    // if (limit === 0) {
        var timer = setInterval(function() {
        count++;
        counter.textContent = count;
        errorOutput.textContent = "";
        if (count === limit) {
          clearInterval(timer);
          errorOutput.textContent = 'Reached the limit';
        } 
        if (limit < 0) {
          clearInterval(timer);
          errorOutput.textContent = "Please give only positive value";
        }
      }, 1000)    
      // } 
  })
}
trigger();

// function setLowervalue() {
//   lowerValue.addEventListener('change', function(e) {
//     var lVal = Number(e.target.value);
//     if (lVal > 0) {
//       errorOutput.textContent = "Please give value less than 0 in order this option to work"
//       lowerVal = Number.MIN_VALUE;
//     }else {
//       lowerVal = lVal;
//       errorOutput.textContent = '';
//     }
//   })
// }
// setLowervalue();

// function setUpperValue() {
//   upperValue.addEventListener('change', function(e) {
//     var uVal = Number(e.target.value);
//     if (uVal < 0) {
//       errorOutput.textContent = "Please give value more than 0 in order this option to work"
//       upperVal = Number.MAX_VALUE;
//     } else {
//       upperVal = uVal;
//       errorOutput.textContent = '';
//     }
//   })
// }
// setUpperValue();


// function trigger(){
//   var buttons = document.querySelectorAll('.counterBtn')

//   //Add event listeners and functionailty to each button  
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(){

//       if (button.classList.contains('prevBtn') && lowerVal === 0){ // currentNum > min get rid of else if
//         count--;
//         console.log("5 count: ", count);
//       }
//       else if (button.classList.contains('prevBtn') && typeof(lowerVal) === "number" && lowerVal < 0){
//           count--; 
//           if(count <= lowerVal) { 
//             count = lowerVal;
//           } 
//           console.log("1 count: ", count);
//         }
//       else if (button.classList.contains('nextBtn') && upperVal === 0) {
//         count++;
//         console.log("6 count: ", count);
//       } 
//       else if (button.classList.contains('nextBtn') && typeof(upperVal) === "number" && upperVal > 0){
//           count++;
//           if(count >= upperVal) { 
//             count = upperVal;
//           } 
//           console.log("2 count: ", count);
//         }
//       else if (button.classList.contains('prevBtn') && typeof(lowerVal) === "number" && lowerVal > 0){
//         count--;
//         console.log("3 count: ", count);
//       }
//       else if (button.classList.contains('nextBtn') && typeof(upperVal) === "number" && upperVal < 0){
//         count++;
//         console.log("4 count: ", count);
//       }
//       else {
//         // do nothing
//       }

//       //Select the counter text
//       const counter = document.querySelector('#counter')
//       counter.textContent = count

//       if (count < 0 ){
//         counter.style.color = 'red'
//       } else if (count > 0){
//         counter.style.color = 'green'
//       } else {
//         counter.style.color = '#333333'
//       }
//     })
//   })
// }

// trigger();












