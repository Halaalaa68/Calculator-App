import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Num from './components/Number/Num'
import Eraser from './components/Eraser/Eraser'
import Welcome from './components/Welcome/Welcome'
function App() {
  // let [num, setNum]= useState('')
  // let [numSum, setNumSum]= useState(0)
  // let [numTimes, setNumTimes]= useState(1)
  let [prevOp, setPrevOp]= useState('')
  const [result, setResult] = useState(0)
  let [myOp, setMyOp] = useState('')
  let [any, setAny] = useState('')
  let [history, setHistory] = useState(false)
  let arr=[0,1,2,3,4,5,6,7,8,9]
  let op=["+","-","/","*","**","="]

  // let myString=''
  // let isOp=false
  function clicked(i){
    // let myNumber= i
    // console.log("hi")
    setHistory(false)
    // let toS= toString(i)
    setAny(any+i)
    setMyOp(i)
    // let y=structuredClone(num)
    //   // myString=num+y
    //   y+=i
    //   setNum(y)

  }
  function calculate(c)
  {
    setMyOp(c)
    if(c!=='=' && prevOp==='=') {
      
      setAny(any+" "+c+" ")
      // console.log("yaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb n5lasssssss " +c+prevOp)
    }
    else if(history && (c==='=' && prevOp==='='))
    {
      setAny(any)
      // console.log("")
    }
    else if(history && c!=='=' && prevOp!=='=')
    {
      setAny(any)
    }
    else{
      // let his=any
      setAny(any+" "+c+" ")
      setHistory(true)
      // let mySum=0
    // if(!isOp) 
    //   {
    //   }
    // else
    // {
    //   setAny(any)
    // }
    // console.log("my Op:" +myOp)
    // let result=0
    // if(num) myString=parseInt(num)
    // else myString=parseInt(his)
    // console.log("typeof" + myString + typeof(myString))
    // if(c==='+'){
    //   console.log("hiiiiiiiiiiiiiiii +++++ it's my C:" +c)
    //   setResult(myString+numSum)
    //   mySum= myString+numSum
    //   setNumSum(mySum)
    //   setNum('')
    // }
    // else if(c==='-')
    // {
    //   setResult(myString-numSum)
    //   mySum= myString-numSum
    //   setNumSum(mySum)
    //   setNum('')
    // }
    // else if(c==='/')
    // {
    //   setResult(myString/numTimes)
    //   mySum= myString/numTimes
    //   setNumTimes(mySum)
    //   setNum('')
    // }
    // else if(c==='X')
    // {
    //   setResult(myString*numTimes)
    //   mySum= myString*numTimes
    //   setNumTimes(mySum)
    //   setNum('')
    // }
    // else if(c==='^')
    // {
    //   setResult(myString**numTimes)
    //   mySum= myString**numTimes
    //   setNumTimes(mySum)
    //   setNum('')
    // }
    // else{
    //   if(prevOp==='+') {
    //     setResult(numSum+myString)
    //     setAny(numSum+myString+'')
    //     setNum(numSum+myString+'')
    //     setNumSum(0)
    //     setNumTimes(1)
    //     console.log("HIHIHIHIHHIHIHIHHI")
    //     console.log(myString +typeof(myString))
    //     console.log(numSum + typeof(numSum))
    //   }

    //   else if(prevOp==='-') 
    //     {
    //       setResult(numSum-myString)
    //       setAny(numSum-myString)
    //       setNum(numSum-myString+'')
    //       setNumSum(0)
    //       setNumTimes(1)
    //     }
    //   else if(prevOp==='/')
    //     {
    //      setResult(numTimes/myString)
    //      setAny(numTimes/myString)
    //      setNumSum(0)
    //      setNumTimes(numTimes/myString)
    //      setNum(numTimes/myString+'')
    //     }
    //   else if(prevOp==='X') 
    //     {
    //       setResult(numTimes*myString)
    //       setAny(numTimes*myString)
    //       setNumSum(0)
    //       setNumTimes(numTimes*myStrin)
    //       setNum(numTimes*myString+'')
    //     }
    //   else if(prevOp==='^') 
    //   {
    //     setResult(numTimes**myString)
    //     setAny(numTimes**myString)
    //     setNumSum(0)
    //     setNumTimes(numTimes**myString)
    //     setNum(numTimes**myString+'')
    //   }
    //   // console.log(c)
    //   // console.log(result)
    //   // setNum('')
    //   // console.log(num)
    // }

  }
  let res=''
  if(c==='=')
  {
    let newString = any.split(" ");
    // console.log("My Stringggggggggggggggggggggggggggg:" +newString)
    let j=0
    for(j=0;j<newString.length;j+=3)
    {
      // console.log(typeof Number(newString[3]/1) + "that is it" +newString[3])
      if(newString[j+2] && newString[j+2]!=='+' && newString[j+2]!=='-' && newString[j+2]!=='/' && newString[j+2]!=='*' && newString[j+2]!=='**' && newString[j+2]!=='=')
      {
        res+= newString[j]+newString[j+1]+newString[j+2]
        // console.log("im a numberrrrrrrrrrrrrrrr 222222")
        j+=3
      }
      else if(newString[j+1] && newString[j+1]!=='+' && newString[j+1]!=='-' && newString[j+1]!=='/' && newString[j+1]!=='*' && newString[j+1]!=='**' && newString[j+1]!=='='){
        res+= newString[j]+newString[j+1]
        // console.log("im a numberrrrrrrrrrrrrrrr 11111")
        j+=2
      }
      else if(newString[j] && newString[j]!=='+' && newString[j]!=='-' && newString[j]!=='/' && newString[j]!=='*' && newString[j]!=='**' && newString[j]!=='='){
        res+= newString[j]
        // console.log("im a numberrrrrrrrrrrrrrrr 00000")
        j+=1
      }
      // console.log("resssssssssssss" +res)
      res=eval(res)
      // console.log(res)
      // j+=3
      
    }
    setAny(res+'')
    setResult(res)
    // console.log("my evaaaaaaaaaaaaaaaaaal:" + res)

  }
  setPrevOp(c)
}
  // console.log("thereeeeeeee isssssssssssssss----------- :  "+any[1])
  // console.log("NuMMMM" +num)
  // // console.log("Oppppp" +c)
  // console.log("prevvvv" +prevOp)
  // console.log("resulttttttttttt" +result)
  // let m="5+6"
  // console.log(eval(m))
  // console.log("typeof" +typeof(+))
  function erase(){
      setResult(0)
      setAny('')
      setNum('')
      setNumSum(0)
      setNumTimes(1)
      setPrevOp('')
  }
  return (
    <>
      <Welcome />
      <div>
        <Num clicked={clicked} arr={arr} op={op} myOp={myOp} result={result} any={any} calculate={calculate} prevOp={prevOp}/>
        <Eraser erase={erase}/>
      </div>
    </>
  )
}

export default App
