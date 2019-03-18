const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector('.calculator__display')

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {

    const keys = e.target
    const action = keys.dataset.action
    const keyContent = keys.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
        console.log("number key!")
        if (displayedNum === "0" || previousKeyType === 'operator') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
        calculator.dataset.previousKey = 'number'
    }
    if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide" 
    ) { 
        console.log("operator key!")
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

        // Note: It's sufficient to check for firstValue and operator because secondValue always exists
        if (firstValue && operator) {
        display.textContent = calculate(firstValue, operator, secondValue)
        }

        keys.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        
    }

    if (action === "decimal") {
        console.log("decimal key!")
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.'
          } else if (previousKeyType === 'operator') {
            display.textContent = '0.'
        }
        calculator.dataset.previousKey = 'decimal'
    }
    
    if (action === "clear") {
    console.log("clear key!")
    calculator.dataset.previousKeyType = 'clear'
    }
    
    if (action === "calculate") {
    console.log("equal key!")
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    display.textContent = calculate(firstValue, operator, secondValue)
    calculator.dataset.previousKeyType = 'calculate'
    }

    Array.from(keys.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    
        const calculate = (n1, operator, n2) => {
            let result = ''
          
            if (operator === 'add') {
              result = parseFloat(n1) + parseFloat(n2)
            } else if (operator === 'subtract') {
              result = parseFloat(n1) - parseFloat(n2)
            } else if (operator === 'multiply') {
              result = parseFloat(n1) * parseFloat(n2)
            } else if (operator === 'divide') {
              result = parseFloat(n1) / parseFloat(n2)
            }
          
            return result
          }
        

        
          const firstValue = calculator.dataset.firstValue
          const operator = calculator.dataset.operator
          const secondValue = displayedNum
        
          if (
            firstValue &&
            operator &&
            previousKeyType !== 'operator'
          ) {
            display.textContent = calculate(firstValue, operator, secondValue)
            display.textContent = calcValue
        
            // Update calculated value as firstValue
          calculator.dataset.firstValue = calcValue
          } else {
            // If there are no calculations, set displayedNum as the firstValue
            calculator.dataset.firstValue = displayedNum
          }
        
          keys.classList.add('is-depressed')
          calculator.dataset.previousKeyType = 'operator'
          calculator.dataset.operator = action

        
    }
} )

