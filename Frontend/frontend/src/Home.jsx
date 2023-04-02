import React from 'react';
import BasicExample from './Navigation'
import Grid from './Grid'

export default function Home() {
    return (
        <div className="App" style={{
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundImage: `url(https://th.bing.com/th/id/R.1a96c23ca7618d4925b03d364ddd3e2d?rik=eu2VjlYyGdAMjw&riu=http%3a%2f%2fwww.pptback.com%2fuploads%2fblue-world-map-backgrounds-powerpoint.jpg&ehk=1AxsbeKTKBElECVOH1dR9fDkAHNEyofn39HEUR83tkU%3d&risl=&pid=ImgRaw&r=0)`,
            '&::before': {
            content: "",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: "rgba(255,255,255,.5)",

            }
          }}>
            <BasicExample />
            <Grid />
        </div>
    )
}