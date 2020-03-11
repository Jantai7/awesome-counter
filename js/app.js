
var count= 0

function trigger(val){
  var buttons = document.querySelectorAll('.counterBtn')
  // var count= 0 // 2

  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('prevBtn') && typeof(val) === "number" && val < 0){
        count--; // -2 
        if(count <= val) { // 2 <= -2
          count = val;
        } 
      } else if (button.classList.contains('nextBtn') && typeof(val) === "number" && val > 0){
        count++;
        if(count >= val) {
          count = val;
        } 
      }
      // else {
      //   count = 0;
      // }

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

// trigger();

var lowerValue = document.querySelector('#lowerValue');
var louput = document.querySelector('#lowerOutput');


console.log(louput.innerHTML);
lowerValue.addEventListener('input', function(e) {
  louput.textContent = e.target.value;
  var lowerVal = Number(louput.innerHTML);
  console.log(lowerVal);
  trigger(lowerVal);
})


var upperValue = document.querySelector('#upperValue');
var uoutput = document.querySelector('#upperOutput');

upperValue.addEventListener('input', function(event) {
  // console.log(event.target.value);
  uoutput.textContent = event.target.value;
  // return e.target.value;
  // console.log(louput.innerHTML);
  var upperVal = Number(uoutput.innerHTML);
  console.log(upperVal);
  trigger(upperVal);
})










