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
    <button class="btn btn-sm bg-blue-500 border-0">Convert to m<sup>2</sup></button>
    </td>
    
  `;
  container.appendChild(tr)
}

// calculate triangle area
document.getElementById('triangle-area').addEventListener('click', function(){
    const firstInputField = getFirstFieldById('base')
    const secondInputField = getSecondFieldById('height')

    serial+=1;
    const shapeName = document.getElementById('triangle-name').innerText

    const area = 0.5 * firstInputField * secondInputField;
    areaContainer(shapeName, area, serial);
    
   
})

document.getElementById('rectangle-area').addEventListener('click', function(){
    const firstInputField = getFirstFieldById('width-field')
    const secondInputField = getSecondFieldById('length-field')

    serial+=1;
    const shapeName = document.getElementById('rectangle-name').innerText

    const area = firstInputField * secondInputField;
    areaContainer(shapeName, area, serial);
    
   
})