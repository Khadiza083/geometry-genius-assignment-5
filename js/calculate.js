// value for all shapes first input field 
let serial = 0;
function getFirstFieldById(firstInputField){
    const firstOne = document.getElementById(firstInputField)
    const firstOneValue = firstOne.value

    firstOne.value = ''
    return firstOneValue;
}

// value for all shapes second input field
function getSecondFieldById(secondInputField){
    const secondOne = document.getElementById(secondInputField)
    const secondOneValue = secondOne.value

    secondOne.value=''
    return secondOneValue;
}

// create table for area calculation container

function areaContainer(shapeName, area, serial){
    const container = document.getElementById('table-container')

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${serial}. </td>
    <td>${shapeName}</td>
    <td>${area}cm<sup>2</sup></td>

    
    <td>
    <button class="text-white px-2 rounded-lg  bg-blue-500 border-0">Convert to m<sup>2</sup></button>
    </td>
    
  `;
  container.appendChild(tr)
}



// calculate triangle area
document.getElementById('triangle-area').addEventListener('click', function(){
    const firstInputField = getFirstFieldById('base')
    const secondInputField = getSecondFieldById('height')
    let area;
    
    const shapeName = document.getElementById('triangle-name').innerText

    if((firstInputField < 0 || secondInputField < 0 ) || (firstInputField ==='' || secondInputField==='' )|| isNaN(firstInputField) || isNaN(secondInputField)){
        alert('Please, Enter correct value')
        return;
    }
    else { 
        area = 0.5 * firstInputField * secondInputField;
    }
    serial+=1;
    areaContainer(shapeName, area.toFixed(2), serial);
    
   
})

// calculate rectangle area
document.getElementById('rectangle-area').addEventListener('click', function(){
    const firstInputField = getFirstFieldById('width-field')
    const secondInputField = getSecondFieldById('length-field')
    let area;
    const shapeName = document.getElementById('rectangle-name').innerText

    if((firstInputField < 0 || secondInputField < 0 ) || (firstInputField ==='' || secondInputField==='' )|| isNaN(firstInputField) || isNaN(secondInputField)){
        alert('Please, Enter correct value')
        return;
    }
    else { 
        area = firstInputField * secondInputField;

    }
    serial+=1;
    areaContainer(shapeName, area.toFixed(2), serial);
    
   
})

// random color generate

function randomColor(inputId) {
    const divitem = document.getElementById(inputId)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    divitem.style.backgroundColor = "#" + randomColor;

}
document.getElementById('triangle').addEventListener('mouseover', function () {
    randomColor('triangle')
})
document.getElementById('rectangle').addEventListener('mouseover', function () {
    randomColor('rectangle')
})
document.getElementById('parallelogram').addEventListener('mouseover', function () {
    randomColor('parallelogram')
})
document.getElementById('rhombos').addEventListener('mouseover', function () {
    randomColor('rhombos')
})
document.getElementById('pentagon').addEventListener('mouseover', function () {
    randomColor('pentagon')
})
document.getElementById('ellipse').addEventListener('mouseover', function () {
    randomColor('ellipse')
})