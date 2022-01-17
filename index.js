let size = 16;
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.clear');
const normalBtn = document.querySelector('.normal');
const rainbowBtn = document.querySelector('.rainbow');
const slider = document.querySelector('.slider');
const sizer = document.querySelector('.size');
// 0 = normal; 1 = rainbow
let mode = 0;

clearBtn.addEventListener('click', () => {
    clearGrid();
    setupGrid(size);
});

slider.addEventListener('input', (e) => {
    sizer.innerHTML = `Size: ${e.target.value} x ${e.target.value}`;
})

slider.addEventListener('change', () => {
    clearGrid();
    size = slider.value;
    setupGrid(size);
});

normalBtn.addEventListener('click', () => {
    mode = 0;
    setActive(mode);
    clearGrid();
    setupGrid(size);
});

rainbowBtn.addEventListener('click', () => {
    mode = 1;
    setActive(mode);
    clearGrid();
    setupGrid(size);
});

function clearGrid() {
    grid.innerHTML = '';
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (mode === 0) {
        e.target.style.backgroundColor = 'black';
    } else {
        e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function setActive(mode) {
    if (mode === 0) {
        rainbowBtn.classList.remove('active');
        normalBtn.classList.add('active');
    } else {
        normalBtn.classList.remove('active');
        rainbowBtn.classList.add('active');
    }
}

window.onload = () => {
    setupGrid(size);
}