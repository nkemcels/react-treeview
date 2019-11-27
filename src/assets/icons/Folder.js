import React from "react";

export default class FolderIcon extends React.Component{
    render(){
        return (
            <span style={{width:20, height:20}}>
                
                {this.props.type === "open"?
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>{`.layer-39-fill{fill:#101820;}`}</style>
                        </defs>
                        <title/>
                        <g data-name="Layer 39" id="Layer_39">
                            <path className="layer-39-fill" d="M4,28a3,3,0,0,1-3-3V7A3,3,0,0,1,4,4h7a1,1,0,0,1,.77.36L14.8,8H27a1,1,0,0,1,0,2H14.33a1,1,0,0,1-.76-.36L10.53,6H4A1,1,0,0,0,3,7V25a1,1,0,0,0,1,1,1,1,0,0,1,0,2Z"/>
                            <path className="layer-39-fill" d="M25.38,28H4a1,1,0,0,1-1-1.21l3-14A1,1,0,0,1,7,12H30a1,1,0,0,1,1,1.21L28.32,25.63A3,3,0,0,1,25.38,28ZM5.24,26H25.38a1,1,0,0,0,1-.79L28.76,14h-21Z"/>
                        </g>
                    </svg>
                    :
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <title/>
                        <g data-name="Layer 2" id="Layer_2">
                            <path d="M28.19,29H3.81A2.81,2.81,0,0,1,1,26.19V7H28.19A2.81,2.81,0,0,1,31,9.81V26.19A2.81,2.81,0,0,1,28.19,29ZM3,9V26.19a.81.81,0,0,0,.81.81H28.19a.81.81,0,0,0,.81-.81V9.81A.81.81,0,0,0,28.19,9Z"/>
                            <path d="M17.62,9H1V5.81A2.81,2.81,0,0,1,3.81,3h9.07A2.8,2.8,0,0,1,15.4,4.55ZM3,7H14.38l-.78-1.55A.81.81,0,0,0,12.88,5H3.81A.81.81,0,0,0,3,5.81Z"/>
                        </g>
                    </svg>
                }
            </span>
        )
    }
}