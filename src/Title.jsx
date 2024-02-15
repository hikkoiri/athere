import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';


function Title() {
    return (
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {/* <strike style={{ color: "red"}}> */}
            {/* <span style={{ fontSize: '10vh' }}>
                ❌&nbsp;&nbsp;
            </span> */}
            <span style={{ fontSize: '8vh' }}>
                Was it really necessary to use&nbsp;
            </span>
            <TypeAnimation
                sequence={[
                    '@here',
                    3000,
                    '@channel',
                    3000,
                    '@everyone',
                    3000
                ]}
                wrapper="span"
                speed={25}
                style={{ fontWeight: "bold", fontSize: '8vh', display: 'table', paddingBottom: "7px", paddingRight: "7px", paddingLeft: "7px", color: "#D6A939", backgroundColor: "#393329" }}
                repeat={Infinity}
            />
            <span style={{ fontSize: '8vh' }}>
                &nbsp;?
            </span>
            {/* </strike> */}
        </div>
    );
}

export default Title;
