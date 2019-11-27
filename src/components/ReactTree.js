import React from 'react';
import PropTypes from 'prop-types';
import "../assets/css/styles.css"
import TreeNodeView from './TreeNodeView';

export default class ReactTree extends React.Component{
    constructor(props){
        super(props);
        this.dataIdCounter = 1
        this.state = {data: this._processData( {...props.data} ) };
        this.dataSnapshot = JSON.stringify(props.data) // used later to prevent unnecessary processing
    }

    _processData = (_data={})=>{
        _data.id = _data.id || "RTN-"+(this.dataIdCounter++)
        _data.active = _data.active || false;
        _data.toggled = _data.toggled || false;
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
        if(_data.children){
            _data.children.forEach(childData => {
                this._findAndSetActiveNode(childData, nodeId);
            });
        }

        return _data;
    }

    handleNodeItemClicked = (nodeId, nodeValue)=>{
        let oldStateData = JSON.parse(JSON.stringify(this.state.data));
        let data = this._findAndSetActiveNode(oldStateData, nodeId);
        this.setState({data}, ()=>{
            this.props.onNodeClick && this.props.onNodeClick(nodeId, nodeValue)
        });
    }

    componentWillReceiveProps(nextProps){
        let dataSnapshot = JSON.stringify(nextProps.data);
        if(dataSnapshot!==this.dataSnapshot){
            this.dataSnapshot = dataSnapshot;
            let newData = this._processData(nextProps.data);
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
            activeNodeColor
        } = this.props;

        return (
            <div style={{width:400, ...style}}>
                {this.state.data && Object.keys(this.state.data).length>0 &&
                    <TreeNodeView 
                        data={this.state.data} 
                        visible={true} 
                        onNodeItemClicked={this.handleNodeItemClicked}
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
                    />
                }
            </div>
        )
    }
}

ReactTree.propTypes = {
    data: PropTypes.object,
    onNodeClick: PropTypes.func,
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
    activeNodeColor: PropTypes.string
}
