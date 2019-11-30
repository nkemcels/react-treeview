import React from 'react';
import PropTypes from 'prop-types';
import "../assets/css/styles.css"
import TreeNodeView from './TreeNodeView';

export default class ReactTree extends React.Component{
    constructor(props){
        super(props);
        this._dataIdCounter = 1
        this._compState = {}
        this._dataSnapshot = JSON.stringify(props.data) // used later to prevent unnecessary processing
        this.state = {data: this._processData( {...props.data} ) };
    }

    _processData = (_data={})=>{
        _data.id = _data.id || "RTN-"+(this._dataIdCounter++)
        const thisNodeState = this._compState[_data.id];

        _data.active = thisNodeState && thisNodeState.active || false;
        _data.toggled = thisNodeState && thisNodeState.toggled || false;

        if(_data.children){
            _data.children.forEach(childData => {
                this._processData(childData)
            });
        }   

        return _data;
    }

    _findAndSetActiveNode = (_data, nodeId)=>{
        _data.active = (_data.id === nodeId);
        _data.toggled = _data.active? !_data.toggled : _data.toggled; 

        this._compState[_data.id] = {toggled:_data.toggled, active:_data.active}
        
        if(_data.children){
            _data.children.forEach(childData => {
                this._findAndSetActiveNode(childData, nodeId);
            });
        }

        return _data;
    }

    handleNodeItemClicked = (nodeId, nodeValue, isLeafNode)=>{
        let oldStateData = JSON.parse(JSON.stringify(this.state.data));
        let data = this._findAndSetActiveNode(oldStateData, nodeId);
        this.setState({data}, ()=>{
            this.props.onNodeClick && this.props.onNodeClick(nodeId, nodeValue, isLeafNode)
        });
    }

    handleNodeItemRightClicked = (nodeId, nodeValue, isLeafNode)=>{
        this.props.onNodeRightClick && this.props.onNodeRightClick(nodeId, nodeValue, isLeafNode)
    }

    componentWillReceiveProps(nextProps){
        let dataSnapshot = JSON.stringify(nextProps.data);
        if(dataSnapshot!==this._dataSnapshot){
            this._dataSnapshot = dataSnapshot;
            this._dataIdCounter = 1
            let newData = this._processData(JSON.parse(JSON.stringify(nextProps.data)));
            this.setState({data: newData})
        }
    }

    render(){
        const {
            renderParent, 
            renderLeaf, 
            renderNode,
            leafIcon, 
            parentIcon, 
            parentStyle, 
            leafStyle, 
            nodeStyle,
            style,
            disableHoverEffect,
            activeNodeColor,
            autoDetectLeafNode,
            transformLabel
        } = this.props;

        return (
            <div style={{width:400, ...style}}>
                {this.state.data && Object.keys(this.state.data).length>0 &&
                    <TreeNodeView 
                        data={this.state.data} 
                        visible={true} 
                        isFirstNode={true}
                        onNodeItemClicked={this.handleNodeItemClicked}
                        onNodeItemRightClicked={this.handleNodeItemRightClicked}
                        renderParent={renderParent}
                        renderLeaf={renderLeaf}
                        renderNode={renderNode}
                        leafIcon={leafIcon}
                        parentIcon={parentIcon} 
                        parentStyle={parentStyle}
                        leafStyle={leafStyle} 
                        nodeStyle={nodeStyle}
                        disableHoverEffect={disableHoverEffect}
                        activeNodeColor={activeNodeColor}
                        autoDetectLeafNode={autoDetectLeafNode}
                        transformLabel={transformLabel}
                    />
                }
            </div>
        )
    }
}

ReactTree.propTypes = {
    data: PropTypes.object,
    onNodeClick: PropTypes.func,
    onNodeRightClick: PropTypes.func,
    renderParent: PropTypes.elementType, 
    renderLeaf: PropTypes.elementType, 
    renderNode: PropTypes.elementType,
    leafIcon: PropTypes.element, 
    parentIcon: PropTypes.element, 
    parentStyle: PropTypes.object, 
    leafStyle: PropTypes.object, 
    nodeStyle: PropTypes.object,
    style: PropTypes.object,
    disableHoverEffect: PropTypes.bool,
    activeNodeColor: PropTypes.string,
    autoDetectLeafNode: PropTypes.bool
}
