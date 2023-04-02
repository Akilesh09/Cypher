import React from 'react'
import GridOrg from './GridOrg'
import { useState, useEffect } from 'react'

export default function Grid () {

  var [finalMapped, setFinalMapped] = useState(
    {3:'A', 11: 'B', 19:'C', 27:'D', 26:'E', 25:'F', 24:'G', 23:'H', 22:'I', 21:'J', 15:'K', 9:'L'}
  );

  var [secondMap, setSecondMap] = useState(
    {'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7, 'I':8, 'J':9, 'K':10, 'L':11}
  )


  //var map = {'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'L':6}

  

  var map2 = {0:3, 1:11, 2:19, 3:27, 4:26, 5:25, 6:24, 7:23, 8:22, 9:21, 10:15, 11:9}

  var mapped = {3:'A', 11: 'B', 19:'C', 27:'D', 26:'E', 25:'F', 24:'G', 23:'H', 22:'I', 21:'J', 15:'K', 9:'L'}

  function mod_function(x) {
    return (x + 1) % 12
  }

  function move() {
    let map = secondMap
    console.log("Before: ")
    for (const key of Object.keys(secondMap)) {
      console.log(key + ":" + secondMap[key])
    }
    let letters = Object.keys(secondMap)
    for(let i = 0; i < 12; i++) {
      let old_value = secondMap[letters[i]]
      let new_value = mod_function(old_value)
      map[letters[i]] = new_value
    }

    setSecondMap(map)
    

    for(let j = 0; j < 12; j++) {
      let index = secondMap[letters[j]]
      //mapped[letters[j]] = map2[index]
      mapped[map2[index]] = letters[j]
    }

    setFinalMapped(mapped)
  }

  console.log("After: ")
    
  for (const key of Object.keys(secondMap)) {
    console.log(key + ":" + secondMap[key])
  }

  console.log("FINAL MAPS: ")
  for (const key of Object.keys(mapped)) {
    console.log(key + ":" + finalMapped[key])
  
  }


  
  return (

    <div className="container">
      <div className="item" id='cell0'>0</div>
      <div className="item" id='cell1'>1</div>
      <div className="item" id='cell2'>2</div>
      <div className="item" >
        <div id='cell3'>
          <GridOrg name={finalMapped[3]} cell={3}/>
        </div>
      </div>
      <div className="item" id='cell4'>4</div>
      <div className="item" id='cell5'>5</div>
      <div className="item" id='cell6'>6</div>
      <div className="item" id='cell7'>7</div>
      <div className="item" id='cell8'>8</div>
      <div className="item" id='cell9'><GridOrg name={finalMapped[9]} cell={9}/></div>
      <div className="item" id='cell10'>10</div>
      <div className="item" id='cell11'><GridOrg name={finalMapped[11]} cell={11}/></div>
      <div className="item" id='cell12'>12</div>
      <div className="item" id='cell13'>13</div>
      <div className="item" id='cell14'>14</div>
      <div className="item" id='cell15'><GridOrg name={finalMapped[15]} cell={15}/></div> 
      <div className="item" id='cell16'>16</div>
      <div className="item" id='cell17'>17</div>
      <div className="item" id='cell18'>18</div> 
      <div className="item" id='cell19'><GridOrg name={finalMapped[19]} cell={19}/></div>
      <div className="item" id='cell20'>
        <button onClick={move}>Rotate</button>
      </div>
      <div className="item" id='cell21'><GridOrg name={finalMapped[21]} cell={21}/></div>
      <div className="item" id='cell22'><GridOrg name={finalMapped[22]} cell={22}/></div>
      <div className="item" id='cell23'><GridOrg name={finalMapped[23]} cell={23}/></div>
      <div className="item" id='cell24'><GridOrg name={finalMapped[24]} cell={24}/></div>
      <div className="item" id='cell25'><GridOrg name={finalMapped[25]} cell={25}/></div>
      <div className="item" id='cell26'><GridOrg name={finalMapped[26]} cell={26}/></div>
      <div className="item" id='cell27'><GridOrg name={finalMapped[27]} cell={27}/></div>
    </div>
  )
}

// export default Grid;