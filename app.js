const inputNav = document.querySelector("#customRange2");
const startBtn = document.querySelector("#startBtn");
const display = document.querySelector("#display");
const speedBtn = document.querySelector('#adjustSpeed');

let arr = [];

const start = () => {
    inputNav.addEventListener('input', () => {
      display.innerHTML = '';
      arr = [];
      genBars();
      new BubbleSort().bubbleSort(arr);
  });
};

const genBars = (num) => {
  num = inputNav.value;
  
  let newElement = "";
  for (let i = 0; i < num; i++) {
    let value = genRandomVal();
    
    arr.push(value);
    newElement += 
    `<div class="bar" style="height: ${value * 3}px; transform: translateX(${i * 30}px);">
      <label class="bar-label">${value}</label>
    </div>`
  }
  display.innerHTML += newElement;
};

class BubbleSort {
  bubbleSort = async (arr) => {
    let bars = document.querySelectorAll('.bar')
    let barsLabels = document.querySelectorAll('.bar-label');

  for (let i = 0; i < bars.length - 1; i++) {

    for (let j = 0; j < bars.length - i - 1; j++) {

      //duration of each bar swap color
        await new Promise((resolve) => {
          setTimeout(resolve, speedBtn.value);
        });

      //highlight the comparison pair
      bars[j].style.backgroundColor = 'red';
      bars[j+1].style.backgroundColor = 'red';

      //swap arr
      let arrTemp = arr[j];
      let heightTemp = bars[j].style.height;
      let valueTemp = barsLabels[j].textContent;
      
      if (arr[j] > arr[j+1]){
        arr[j] = arr[j+1];
        arr[j+1] = arrTemp;
        bars[j].style.height = bars[j+1].style.height;
        bars[j+1].style.height = heightTemp;
        barsLabels[j].textContent = barsLabels[j+1].textContent;
        barsLabels[j+1].textContent = valueTemp;
      }
      bars[j].style.backgroundColor = 'grey';
    }
    //mark it green when it move to the last place
    bars[bars.length - i - 1].style.backgroundColor = 'green';
  };
};
}

function genRandomVal() {
  return Math.floor(Math.random() * 100 + 1);
}

start();