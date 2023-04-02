import React from 'react'
import GridOrg from './GridOrg'
import { useState, useEffect } from 'react'

export default function Grid () {

  var [finalMapped, setFinalMapped] = useState(
    {3:'South Asian Student Association', 11: 'Latin American Student Union', 19:'Hillel', 27:'Korean American Student Association', 26:'Chinese Student Organization', 25:'Japanese Culture Society', 24:'African Culture Society', 23:'Black Student Organization', 22:'Middle Eastern Student Association', 21:'Muslim Student Association', 15:'Vietnamese Student Association', 9:'Filipino American Student Association'}
  );

  var [secondMap, setSecondMap] = useState(
    {'South Asian Student Association':0, 'Latin American Student Union':1, 'Hillel':2, 'Korean American Student Association':3, 'Chinese Student Organization':4, 'Japanese Culture Society':5, 'African Culture Society':6, 'Black Student Organization':7, 'Middle Eastern Student Association':8, 'Muslim Student Association':9, 'Vietnamese Student Association':10, 'Filipino American Student Association':11}
  )


  //var map = {'A':0, 'B':1, Hillel:2, 'Korean American Student Association'':3, 'Chinese Student Organization':4, 'Japanese Culture Society':5, 'Filipino American Student Association'':6}

  

  var map2 = {0:3, 1:11, 2:19, 3:27, 4:26, 5:25, 6:24, 7:23, 8:22, 9:21, 10:15, 11:9}

  var mapped = {3:'South Asian Student Association', 11: 'Latin American Student Association', 19:'Hillel', 27:'Korean American Student Association', 26:'Chinese Student Organization', 25:'Japanese Culture Society', 24:'African Culture Society', 23:'Black Student Organization', 22:'Middle Eastern Student Association', 21:'Muslim Student Association', 15:'Vietnamese Student Association', 9:'Filipino American Student Association'}

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
      <div className="item" id='cell0'></div>
      <div className="item" id='cell1'></div>
      <div className="item" id='cell2'></div>
      <div className="item" >
        <div id='cell3'>
          <GridOrg name={finalMapped[3]} cell={3}/>
        </div>
      </div>
      <div className="item" id='cell4'></div>
      <div className="item" id='cell5'></div>
      <div className="item" id='cell6'></div>
      <div className="item" id='cell7'></div>
      <div className="item" id='cell8'></div>
      <div className="item" id='cell9'><GridOrg name={finalMapped[9]} cell={9}/></div>
      <div className="item" id='cell10'></div>
      <div className="item" id='cell11'><GridOrg name={finalMapped[11]} cell={11}/></div>
      <div className="item" id='cell12'></div>
      <div className="item" id='cell13'></div>
      <div className="item" id='cell14'></div>
      <div className="item" id='cell15'><GridOrg name={finalMapped[15]} cell={15}/></div> 
      <div className="item" id='cell16'></div>
      <div className="item" id='cell17'></div>
      <div className="item" id='cell18'></div> 
      <div className="item" id='cell19'><GridOrg name={finalMapped[19]} cell={19}/></div>
      <div className="item" id='cell20'>
        <button onClick={move}>Rotate</button>
      </div>
      <div className="item" id='cell21'><GridOrg name={finalMapped[21]} cell={21}/></div>
      <div className="item" id='cell22'></div>
      <div className="item" id='cell23'></div>
      <div className="item" id='cell24'></div>
      <div className="item" id='cell25'></div>
      <div className="item" id='cell26'></div>
      <div className="item" id='cell27'><GridOrg name={finalMapped[27]} cell={27}/></div>
    </div>
  )
}

// export default Grid;