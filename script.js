let currentIndex = 0;
let totalItems = 0;

function showItem(index) {
  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth; // Assuming all items have the same width
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = `translateX(${-index * itemWidth}px)`;

  // Update dot indicators
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

setInterval(nextItem, 3000);

function evaluateExpression(expression, i) {
  try {
    const compiledExpression = math.compile(expression);
    return compiledExpression.evaluate({ i: i });
  } catch (error) {
    console.error("Error evaluating expression:", error);
    return 0; // Return 0 for simplicity in case of an error
  }
}

function calculate() {
  const expression = document.getElementById('expression').value;
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);

  let result = 0;
  let sigmaNotation = '';

  for (let i = start; i <= end; i++) {
    const term = evaluateExpression(expression, i);
    result += term;

    // Build sigma notation
    sigmaNotation += (i === start) ? `${term}` : ` + ${term}`;
  }

  // Display result and sigma notation
  document.getElementById('result').innerText = `= ${result}`;
  document.getElementById('sigmaNotation').innerText = `= ${sigmaNotation}`;
}

// Add dot indicators dynamically based on the number of items
const dotContainer = document.querySelector('.dot-indicators');
const items = document.querySelectorAll('.carousel-item');
totalItems = items.length;

for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.addEventListener('click', () => showItem(i));
  dotContainer.appendChild(dot);
}

function showCalculator() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('calculatorContainer').style.display = 'block';
}

// Function to hide the calculator
function hideCalculator() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('calculatorContainer').style.display = 'none';
}

document.querySelector('.calcubtn').addEventListener('click', showCalculator);
document.getElementById('overlay').addEventListener('click', hideCalculator);

//Exercise 1
function showAnswer() {
  document.getElementById('overlay2').style.display = 'block';
  document.getElementById('answerContainer').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer() {
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('answerContainer').style.display = 'none';
}

document.querySelector('.answerBtn').addEventListener('click', showAnswer);
document.getElementById('overlay2').addEventListener('click', hideAnswer);

//Exercise 2
function showAnswer2() {
  document.getElementById('overlay3').style.display = 'block';
  document.getElementById('answerContainer2').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer2() {
  document.getElementById('overlay3').style.display = 'none';
  document.getElementById('answerContainer2').style.display = 'none';
}

document.querySelector('.answerBtn2').addEventListener('click', showAnswer2);
document.getElementById('overlay3').addEventListener('click', hideAnswer2);

//Exercise 3
function showAnswer3() {
  document.getElementById('overlay4').style.display = 'block';
  document.getElementById('answerContainer3').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer3() {
  document.getElementById('overlay4').style.display = 'none';
  document.getElementById('answerContainer3').style.display = 'none';
}

document.querySelector('.answerBtn3').addEventListener('click', showAnswer3);
document.getElementById('overlay4').addEventListener('click', hideAnswer3);


//Exercise 4
function showAnswer4() {
  document.getElementById('overlay5').style.display = 'block';
  document.getElementById('answerContainer4').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer4() {
  document.getElementById('overlay5').style.display = 'none';
  document.getElementById('answerContainer4').style.display = 'none';
}

document.querySelector('.answerBtn4').addEventListener('click', showAnswer4);
document.getElementById('overlay5').addEventListener('click', hideAnswer4);


//Exercise 5
function showAnswer5() {
  document.getElementById('overlay6').style.display = 'block';
  document.getElementById('answerContainer5').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer5() {
  document.getElementById('overlay6').style.display = 'none';
  document.getElementById('answerContainer5').style.display = 'none';
}

document.querySelector('.answerBtn5').addEventListener('click', showAnswer5);
document.getElementById('overlay6').addEventListener('click', hideAnswer5);


//Exercise 6
function showAnswer6() {
  document.getElementById('overlay7').style.display = 'block';
  document.getElementById('answerContainer6').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer6() {
  document.getElementById('overlay7').style.display = 'none';
  document.getElementById('answerContainer6').style.display = 'none';
}

document.querySelector('.answerBtn6').addEventListener('click', showAnswer6);
document.getElementById('overlay7').addEventListener('click', hideAnswer6);


//Exercise 7
function showAnswer7() {
  document.getElementById('overlay8').style.display = 'block';
  document.getElementById('answerContainer7').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer7() {
  document.getElementById('overlay8').style.display = 'none';
  document.getElementById('answerContainer7').style.display = 'none';
}

document.querySelector('.answerBtn7').addEventListener('click', showAnswer7);
document.getElementById('overlay8').addEventListener('click', hideAnswer7);


//Exercise 8
function showAnswer8() {
  document.getElementById('overlay9').style.display = 'block';
  document.getElementById('answerContainer8').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer8() {
  document.getElementById('overlay9').style.display = 'none';
  document.getElementById('answerContainer8').style.display = 'none';
}

document.querySelector('.answerBtn8').addEventListener('click', showAnswer8);
document.getElementById('overlay9').addEventListener('click', hideAnswer8);


//Exercise 9
function showAnswer9() {
  document.getElementById('overlay10').style.display = 'block';
  document.getElementById('answerContainer9').style.display = 'block';

}
// Function to hide the calculator
function hideAnswer9() {
  document.getElementById('overlay10').style.display = 'none';
  document.getElementById('answerContainer9').style.display = 'none';
}

document.querySelector('.answerBtn9').addEventListener('click', showAnswer9);
document.getElementById('overlay10').addEventListener('click', hideAnswer9);


//help
function showhelp() {
  document.getElementById('overlayhelp').style.display = 'block';
  document.getElementById('helpContainer').style.display = 'block';

}
// Function to hide the calculator
function hidehelp() {
  document.getElementById('overlayhelp').style.display = 'none';
  document.getElementById('helpContainer').style.display = 'none';
}

document.querySelector('.help').addEventListener('click', showhelp);
document.getElementById('overlayhelp').addEventListener('click', hidehelp);
