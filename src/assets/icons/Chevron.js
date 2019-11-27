import React from "react";

export default class ChevronIcon extends React.Component{
    render(){
        return (
            <svg 
                fill="none" 
                height="24" 
                stroke="#000" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg">
                    {this.props.direction === "down"?
                        <polyline points="6 9 12 15 18 9"/>
                        :
                        <polyline points="9 18 15 12 9 6"/>
                    }
            </svg>
        )
    }
}