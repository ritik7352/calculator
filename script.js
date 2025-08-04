const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    alert('Invalid Input!');
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    alert('Invalid Input!');
  }
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
