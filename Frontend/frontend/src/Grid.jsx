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

export default function Grid () {
  
  return (

    <div className="container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item">8</div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div>
      <div className="item">11</div>
      <div className="item">12</div>
      <div className="item"></div>
      <div className="item">13</div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div> /* itd be cool if we could align this a little to the left*/
      <div className="item">15</div>
      <div className="item">16</div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div> /* and this a little to the right to make it look more circular*/
      <div className="item">18</div>
      <div className="item"></div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div>
      <div className="item">20</div>
      <div className="item">21</div>
      <div className="item">22</div>
      <div className="item">23</div>
      <div className="item"><GridOrg name="South Asian Students Association" color="#F6BE00"/></div>
      <div className="item"></div>
    </div>
  )
}

// export default Grid;