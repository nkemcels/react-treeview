import React, {PureComponent} from "react";
import ChevronIcon from '../assets/icons/Chevron';
import FolderIcon from '../assets/icons/Folder';
import FileIcon from '../assets/icons/File';

export default class TreeNodeView extends PureComponent {
    handleNodeClicked = ()=>{
        this.props.onNodeItemClicked(this.props.data.id, this.props.data.value);
    }

    _renderDefaultNode = ()=>{
        const {leafIcon, parentIcon, parentStyle, leafStyle, nodeStyle} = this.props;
        const {data} = this.props;
        return (
            <div className="default-node">
                {data.leaf?
                    <div className="label-icons">
                        {leafIcon || <FileIcon />}
                    </div>
                    :
                    <div className="label-icons">
                        {parentIcon || <ChevronIcon direction={data.toggled?"down":"right"}/>}
                        {!parentIcon && <FolderIcon type={data.toggled?"open":"close"}/>}
                    </div>
                }
                <span className="label-text" style={data.leaf? {...nodeStyle, ...leafStyle} : {...nodeStyle, ...parentStyle}}>{data.label}</span>
            </div>
        )
    }
    
    render(){
        const {data, visible, ...restProps} = this.props;
        const {renderParent, renderLeaf, renderNode, disableHoverEffect, activeNodeColor} = this.props

        return (
            <div className={!this.props.visible?"hidden-node":""}>
                <div className="node-item">
                    <div onClick={this.handleNodeClicked} 
                        className={"node-item-label"+(!disableHoverEffect?" node-item-label-hoverable":"")}
                        style={{background:data.active? activeNodeColor!==undefined? activeNodeColor : "#D5E4F0" : null}}
                    >
                        {data.leaf ? renderLeaf? renderLeaf(data.label) : renderNode? renderNode(data.label) : this._renderDefaultNode() :
                                    renderParent? renderParent(data.label) : renderNode? renderNode(data.label) : this._renderDefaultNode()
                        }
                    </div>
                    {data.children && data.children.map(childData=>(
                        <TreeNodeView 
                            key={childData.id}
                            data={childData} 
                            visible={data.toggled}
                            {...restProps}/>
                    ))}
                </div>
            </div>
        );
    }
}