// import GridLayout from "react-grid-layout";
// import styled from "styled-components";

// const layout = [
//   { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
//   { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
//   { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
//   { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
//   { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
// ];

// const GridItemWrapper = styled.div`
//   background: #f5f5f5;
// `;

// const GridItemContent = styled.div`
//   padding: 8px;
// `;

// const Root = styled.div`
//   padding: 16px;
// `;

// export const Grid = () => {
//   return (
//     <Root>
//       <GridLayout layout={layout} rows={3} cols={6} rowHeight={200} rowWidth={200} width={1200}>
//         <GridItemWrapper key="blue-eyes-dragon">
//           <GridItemContent>Blue Eyes Dragon</GridItemContent>
//         </GridItemWrapper>
//         <GridItemWrapper key="dark-magician">
//           <GridItemContent>Dark Magician</GridItemContent>
//         </GridItemWrapper>
//         <GridItemWrapper key="kuriboh">
//           <GridItemContent>Kuriboh</GridItemContent>
//         </GridItemWrapper>
//         <GridItemWrapper key="spell-caster">
//           <GridItemContent>Spell Caster</GridItemContent>
//         </GridItemWrapper>
//         <GridItemWrapper key="summoned-skull">
//           <GridItemContent>Summoned Skull</GridItemContent>
//         </GridItemWrapper>
//         <GridItemWrapper key="hi-skull">
//           <GridItemContent>hi Skull</GridItemContent>
//         </GridItemWrapper>
//       </GridLayout>
//     </Root>
//   );
// };

import React from 'react'
import GridOrg from './GridOrg'
import { useState } from 'react'

export default function Grid () {

  // const [ALoc, setALoc] = useState(3);
  // const [BLoc, setBLoc] = useState(11);
  // const [CLoc, setCLoc] = useState(19)
  // const [DLoc, setDLoc] = useState(27);
  // const [ELoc, setELoc] = useState(26);
  // const [FLoc, setFLoc] = useState(25);
  // const [GLoc, setGLoc] = useState(24);
  // const [HLoc, setHLoc] = useState(23);
  // const [ILoc, setILoc] = useState(22);
  // const [JLoc, setJLoc] = useState(21);
  // const [KLoc, setKLoc] = useState(15);
  // const [LLoc, setLLoc] = useState(9);

  // var dict = {
  //   9: 'L', 3: 'A', 11: 'B', 19:'C', 27: 'D', 26: 'E', 25: 'F'
  // }

  var map = {'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'L':6}

  console.log("Before: ")
  for (const key of Object.keys(map)) {
    console.log(key + ":" + map[key])
  }

  //var map2 = {0:3, 1:11, 2:19, 3:27, 4:26, 5:25, 6:9}

  function mod_function(x) {
    return (x + 1) % 7
  }

  function move() {
    let letters = Object.keys(map)
    for(let i = 0; i < 7; i++) {
      let old_value = map[letters[i]]
      let new_value = mod_function(old_value)
      map[letters[i]] = new_value
    }

  console.log("After: ")
    
  for (const key of Object.keys(map)) {
    console.log(key + ":" + map[key])
  }

    
    // console.log("New Dictionary: ")
    // for (const key of Object.keys(dict)) {
    //   console.log(key + ":" + dict[key])
    // }
  }

  
  return (

    <div className="container">
      <div className="item" id='cell0'>0</div>
      <div className="item" id='cell1'>1</div>
      <div className="item" id='cell2'>2</div>
      <div className="item" >
        <div id='cell3'>
          <GridOrg name={[3]} cell={3}/>
        </div>
      </div>
      <div className="item" id='cell4'>4</div>
      <div className="item" id='cell5'>5</div>
      <div className="item" id='cell6'>6</div>
      <div className="item" id='cell7'>7</div>
      <div className="item" id='cell8'>8</div>
      <div className="item" id='cell9'><GridOrg name="Bluh" cell={9}/></div>
      <div className="item" id='cell10'>10</div>
      <div className="item" id='cell11'><GridOrg name={[11]} cell={11}/></div>
      <div className="item" id='cell12'>12</div>
      <div className="item" id='cell13'>13</div>
      <div className="item" id='cell14'>14</div>
      <div className="item" id='cell15'><GridOrg name="Bluh" cell={15}/></div> 
      <div className="item" id='cell16'>16</div>
      <div className="item" id='cell17'>17</div>
      <div className="item" id='cell18'>18</div> 
      <div className="item" id='cell19'><GridOrg name={[19]} cell={19}/></div>
      <div className="item" id='cell20'>
        <button onClick={move}>Rotate</button>
      </div>
      <div className="item" id='cell21'><GridOrg name="South Asian Students Association" cell={21}/></div>
      <div className="item" id='cell22'>22</div>
      <div className="item" id='cell23'>23</div>
      <div className="item" id='cell24'>24</div>
      <div className="item" id='cell25'>25</div>
      <div className="item" id='cell26'>26</div>
      <div className="item" id='cell27'><GridOrg name={[27]} cell={27}/></div>
    </div>
  )
}

// export default Grid;