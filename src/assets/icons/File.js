import React from "react";

export default class FileIcon extends React.Component{
    render(){
        return (
            <span style={{width:22, height:22}}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>{`.frame-style{fill:none;}`}</style>
                    </defs>
                    <title/>
                    <g data-name="Layer 2" id="Layer_2">
                        <path d="M26,29H6a1,1,0,0,1-1-1V4A1,1,0,0,1,6,3H20a1,1,0,0,1,.71.29l6,6A1,1,0,0,1,27,10V28A1,1,0,0,1,26,29ZM7,27H25V10.41L19.59,5H7Z"/>
                        <path d="M26,11H20a1,1,0,0,1-1-1V4a1,1,0,0,1,.62-.92,1,1,0,0,1,1.09.21l6,6a1,1,0,0,1,.21,1.09A1,1,0,0,1,26,11ZM21,9h2.59L21,6.41Z"/>
                        <path d="M26,24H6a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z"/>
                        <path d="M16,14H10a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/>
                        <path d="M21,18H10a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/>
                    </g>
                    <g id="frame">
                        <rect className="frame-style" height="32" width="32"/>
                    </g>
                </svg>
            </span>
        )
    }
}