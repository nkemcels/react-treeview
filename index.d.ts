import * as React from "react";

interface DataType {
    id?: string,
    label?: string,
    value?: any,
    children?: [DataType]
    active?: boolean,
    toggled?: boolean,
    leaf?:boolean
}

interface ReactTreeProps {
    /**
     * The data to be rendered. Required!
     */
    data?: DataType,

    /**
     * Triggered every time a node item is clicked (left clicked). 
     * It receives as argurments the `id` and the `value` of the data for the node clicked.
     * The isLeafNode is true if, well, the node clicked is a leaf node.
     */
    onNodeClick?: (nodeId:string, nodeValue:any, isLeafNode:boolean) => any,

    /**
     * Triggered every time a node item is right-clicked. 
     * It receives as argurments the `id` and the `value` of the data for the node clicked.
     * The isLeafNode is true if, well, the node clicked is a leaf node.
     */
    onNodeRightClick?: (nodeId:string, nodeValue:any, isLeafNode:boolean) => any,

    /**
     * Provides a custom component to be used in rendering a parent node. 
     * The `label` for the current parent node to be rendered is passed as argurment.
     */
    renderParent?: (label:string) => React.ElementType, 

    /**
     * Provides a custom component to be used in rendering a leaf node. 
     * The `label` for the current leaf node to be rendered is passed as argurment.
     */
    renderLeaf?: (label:string) => React.ElementType, 

    /**
     * Provides a custom component to used in rendering a node (leaf or parent).
     * The `label` for the current node to be rendered is passed as argurment 
     */
    renderNode?: (label:string) => React.ElementType, 

    /**
     * Takes as argument the label to be displayed for a node and returns the actual text that will be displayed.
     */
    transformLabel?: (label:string)=>string,

    /**
     * Custom icon to used for leaf nodes. It Should be a react component.
     */
    leafIcon?: React.ReactElement, 

    /**
     * Custom icon to used for parent nodes. It Should be a react component.
     */
    parentIcon?: React.ReactElement, 

    /**
     * Custom css style properties to be used for a parent node text. 
     * This does not apply for custom rendered parent nodes.
     */
    parentStyle?: React.CSSProperties, 

    /**
     * Custom css style properties to be used for a leaf node text.
     * This does not apply for custom rendered leaf nodes.
     */
    leafStyle?: React.CSSProperties, 

    /**
     * Custom css style properties to applied to both leaf and parent node texts.
     * This does not apply for custom rendered nodes.
     */
    nodeStyle?: React.CSSProperties,

    /**
     * Custom css style properties to be used for the react-tree component
     */
    style?: React.CSSProperties,

    /**
     * disables the mouse hover background color on nodes
     */
    disableHoverEffect?:boolean,

    /**
     * Custom color to used for the current active node (the node currently selected)
     */
    activeNodeColor?: string

    /**
     * If true, the leaf node is automatically detected from the data structure instead of explicitly setting the `leaf` field to *true*
     */
    autoDetectLeafNode?: boolean
}
    
export default class ReactTree extends React.Component<ReactTreeProps, any> {}
