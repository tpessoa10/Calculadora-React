import Button from '../components/Button'
import styles from './Calculator.module.css'
import Display from '../components/Display'
import { useEffect, useState } from 'react'

export default function Calculator(){
    const [displayValue, setDisplayValue] = useState<any>('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operation, setOperation] = useState(null)
    const [values, setValues] = useState([0,0])
    const [current, setCurrent] = useState(0)

    const clearMemory = () => {
        setDisplayValue('0')
        setValues([0,0])
        setCurrent(0)
    }

    const Operation = (operation:any) => {
        if(current === 0){
            setOperation(operation)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const igual = operation === '='
            const operacaoAtual = operation

            const valores = [...values]
            try{
                valores[0] = eval(`${valores[0]} ${operacaoAtual} ${valores[1]}`)
            } catch(e){
                valores[0] = values[0]
            }

            valores[1] = 0

            setDisplayValue(valores[0])
            setOperation(igual ? null : operation)
            setCurrent(igual ? 0 : 1)
            setClearDisplay(!igual)
            setValues(valores)
        }
    }

    const addDigit = (digit:string) => {
        if (digit === '.' && displayValue.includes('.')) {
            return;
        }

        const limparDisplay = displayValue === '0' || clearDisplay
        const valorAtual = limparDisplay ? '' : displayValue
        const valorDisplay = valorAtual + digit
        setDisplayValue(valorDisplay)
        setClearDisplay(false)

        if(digit !== "."){
            const i = current
            const newValue = parseFloat(displayValue)
            const valores = [...values]
            valores[i] = newValue
            setValues(valores)
        }
    }

    console.log(values)


    return(
        <div className={styles.calculator}>
            <Display value={displayValue}/>
            <Button triple='s' click={clearMemory} label='AC'/>
            <Button click={Operation} operation='s' label='/'/>
            <Button click={addDigit} label='7'/>
            <Button click={addDigit} label='8'/>
            <Button click={addDigit} label='9'/>
            <Button click={Operation} operation='s' label='*'/>
            <Button click={addDigit} label='4'/>
            <Button click={addDigit} label='5'/>
            <Button click={addDigit} label='6'/>
            <Button click={Operation} operation='s' label='-'/>
            <Button click={addDigit} label='1'/>
            <Button click={addDigit} label='2'/>
            <Button click={addDigit} label='3'/>
            <Button click={Operation} operation='s' label='+'/>
            <Button click={addDigit} double='s' label='0'/>
            <Button click={addDigit} label='.'/>
            <Button click={Operation} operation='s' label='='/>
        </div>
    )
}