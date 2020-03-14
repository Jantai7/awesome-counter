var lowerValue = document.querySelector('#lowerValue');
var upperValue = document.querySelector('#upperValue');
var errorOutput = document.querySelector('#errorOutput');

var count= 0
var lowerVal = 0;
var upperVal = 0;

function setLowervalue() {
  lowerValue.addEventListener('change', function(e) {
    var lVal = Number(e.target.value);
    // if (!Number.isNaN(lVal)) {
    //   errorOutput.textContent = "Invalid type";
    //   return;
    // }
    if (lVal > 0) {
      errorOutput.textContent = "Please give value less than 0 in order this option to work"
      lowerVal = Number.MIN_VALUE;
    }else {
      lowerVal = lVal;
      errorOutput.textContent = '';
    }
  })
}
setLowervalue();

function setUpperValue() {
  upperValue.addEventListener('change', function(e) {
    var uVal = Number(e.target.value);
    //   if (!Number.isNaN(uVal)) {
    //   errorOutput.textContent = "Invalid type";
    //   return;
    // }
    if (uVal < 0) {
      errorOutput.textContent = "Please give value more than 0 in order this option to work"
      upperVal = Number.MAX_VALUE;
    } else {
      upperVal = uVal;
      errorOutput.textContent = '';
    }
  })
}
setUpperValue();


function trigger(){
  var buttons = document.querySelectorAll('.counterBtn')

  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){

      if (button.classList.contains('prevBtn') && lowerVal === 0){ 
        count--;
        console.log("5 count: ", count);
      }
      else if (button.classList.contains('prevBtn') && lowerVal < 0){
          count--; 
          if(count <= lowerVal) { 
            count = lowerVal;
          } 
          console.log("1 count: ", count);
        }
      else if (button.classList.contains('nextBtn') && upperVal === 0) {
        count++;
        console.log("6 count: ", count);
      } 
      else if (button.classList.contains('nextBtn')  && upperVal > 0){
          count++;
          if(count >= upperVal) { 
            count = upperVal;
          } 
          console.log("2 count: ", count);
        }
      else if (button.classList.contains('prevBtn')  && lowerVal > 0){
        count--;
        console.log("3 count: ", count);
      }
      else if (button.classList.contains('nextBtn') && upperVal < 0){
        count++;
        console.log("4 count: ", count);
      }
      else {
        // do nothing
      }

      //Select the counter text
      const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count < 0 ){
        counter.style.color = 'red'
      } else if (count > 0){
        counter.style.color = 'green'
      } else {
        counter.style.color = '#333333'
      }
    })
  })
}

trigger();



