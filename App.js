import React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
function Calculator () {
  const [display, setDisplay] = React.useState(
    {
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    }
  )
  function handleNumber (value) {
    let newValue = value
    if (!display.isInitial) {
      newValue = display.current + value
    }

    setDisplay({ current: newValue, total: display.total, isInitial: false, preOp: display.preOp })
  }
  function handleOperator (value) {
    const total = doCalculation()
    setDisplay({ current: total.toString, total: total.toString, isInitial: true, preOp: value })
  }
  function doCalculation () {
    let total = parseInt(display.total)
    switch (display.preOp) {
      case "+":
        total += parseInt(display.current)
        break
      case "-":
        total -= parseInt(display.current)
        break
      case "*":
        total *= parseInt(display.current)
        break
      case "/":
        total /= parseInt(display.current)
        break
      default:
        break
    }
    return total
  }
  function renderDisplay () {
    return display.current
  }
  function handleClear () {
    setDisplay({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    })
  }
  function handleEqual () {
    let total = doCalculation()
    setDisplay({ current: total.toString, total: total.toString, isInitial: true, preOp: "=" })
  }
  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton value={7} onClick={handleNumber} />
      <CalcButton value={8} onClick={handleNumber} />
      <CalcButton value={9} onClick={handleNumber} />
      <CalcButton className='operator' value='/' onClick={handleOperator} />
      <CalcButton value={4} onClick={handleNumber} />
      <CalcButton value={5} onClick={handleNumber} />
      <CalcButton value={6} onClick={handleNumber} />
      <CalcButton className='operator' value='*' onClick={handleOperator} />
      <CalcButton value={1} onClick={handleNumber} />
      <CalcButton value={2} onClick={handleNumber} />
      <CalcButton value={3} onClick={handleNumber} />
      <CalcButton className='operator' value='-' onClick={handleOperator} />
      <CalcButton value='C' onClick={handleClear} />
      <CalcButton value={0} onClick={handleEqual} />
      <CalcButton value='=' onClick={handleOperator} />
      <CalcButton className='operator' value='+' onClick={handleOperator} />
    </div>
  )
}

function CalcButton (props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}


class App extends React.Component {
  render () {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    )
  }

}

export default App
