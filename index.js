
const calculateTemp = ()=>{
    const tempNum = document.getElementById('temp').value;
    console.log(tempNum);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    let celToFah =(cel)=>{
        let fahrenheit = Math.round((cel * 9/5)+32);
        return fahrenheit;
    }
    let fahToCel =(fah)=>{
        let celcius = Math.round((fah-32) * 5/9);
        return celcius;
    }
    let result;

    if (valueTemp == 'cel') {
        result = celToFah(tempNum);
        document.getElementById('resultContainer').innerHTML= ` = ${result} °fahrenheit`;
    }
    else {
        result = fahToCel(tempNum);
        document.getElementById('resultContainer').innerHTML= ` = ${result} °celcius`;
      
    }
    
}