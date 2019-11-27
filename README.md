# React-TreeView
![Imgur](https://i.imgur.com/Ib8O8T0.png)
A data-driven, customizable, fast, lightweight and efficient tree view component built with and for ReactJs.
## installation
### Yarn
```
yarn add @cels/react-treeview
```

### Npm
```
npm install @cels/react-treeview
```

## Usage
```jsx
import ReactTreeView from "@cels/react-treeview";
```
Do not forget to import the css file into your project.
```jsx
import "@cels/react-treeview/dist/styles.css";
```

### Example:
```jsx
import React from React;
import ReactTreeView from "@cels/react-treeview";

const  dummyData  = {
	label:  'root',
	value:  "root/",
	children: [
		{
			label:  'parent',
			value:  "root/parent/",
			children: [
				{ label:  'child1', leaf:true },
				{ label:  'child2', leaf:true }
			]
		},
		{
			label:  'parent2',
			value:"root/parent2/",
		}
	]
};

class App extends React.Component{
	state = { data: dummyData }
	handleNodeClicked = (nodeId, nodeValue){
	   // Do something with the `value` data for the node clicked.
	}
	render(){
		return (
			<ReactTreeView
			   data={this.state.data} 
			   onNodeItemClicked={this.handleNodeClicked} />
		)
	}
}
```


##  Available Props
<table>
   <tr>
      <th>Prop Name</th>
      <th>Structure</th>
      <th>Description</th>
      <th>Default Value</th>
   </tr>
   <tr>
	   <td>data</td>
	   <td>Object</td>
	   <td>The data to be used in rendering the tree component. 
	     <a href="#data-structure">View it's structure below</a></td>
	   <td>No default <b>(Required prop)</b></td>
   </tr>
   <tr>
	   <td>onNodeClick()</td>
	   <td>(nodeId, nodeVal) => void</td>
	   <td>Callback function to be invoked each time a node is clicked. Receives as arguments the <b>id</b> and <b>value</b> of the data for the node clicked.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>parentIcon</td>
	   <td>React.Element</td>
	   <td>Custom icon to used for parent nodes. It Should be a react component.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>leafIcon</td>
	   <td>React.Element</td>
	   <td>Custom icon to used for leaf nodes. It Should be a react component.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>style</td>
	   <td>React.CSSProperties</td>
	   <td>Styles to apply on the react-treeview container component.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>parentStyle</td>
	   <td>React.CSSProperties</td>
	   <td>Custom styles to apply on the parent node.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>leafStyle</td>
	   <td>React.CSSProperties</td>
	   <td>Custom styles to apply on the leaf node.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>nodeStyle</td>
	   <td>React.CSSProperties</td>
	   <td>Custom styles to apply on a node (parent or leaf). <br />
	   <b>Note:</b> <b>nodeStyle</b> is merged with the <b>parentStyle</b> for a parent node or <b>leafStyle</b> for a leaf node</td>
	   <td></td>
   </tr>
   <tr>
	   <td>renderParent()</td>
	   <td>(label) => React.ElementType</td>
	   <td>Returns a custom component to be used in rendering a parent node.
		 The <b>label</b> for the current parent node to be rendered is passed as argument.</td>
	   <td></td>
   </tr>
    <tr>
	   <td>renderLeaf()</td>
	   <td>(label) => React.ElementType</td>
	   <td>Returns a custom component to be used in rendering a leaf node.
		 The <b>label</b> for the current leaf node to be rendered is passed as argument.</td>
	   <td></td>
   </tr>
   <tr>
	   <td>renderNode()</td>
	   <td>(label) => React.ElementType</td>
	   <td>Returns a custom component to be used in rendering any node (leaf or parent).
		 The <b>label</b> for the current node to be rendered is passed as argument. 
		 <br /><b>Note:</b> <b>renderParent</b> and <b>renderLeaf</b> if specified will have a higher precedence over <b>renderNode</b></td>
	   <td></td>
   </tr>
   <tr>
	   <td>disableHoverEffect</td>
	   <td>boolean</td>
	   <td>Disables the default highlighting of nodes when moused over.</td>
	   <td><b>false</b></td>
   </tr>
   <tr>
	   <td>activeNodeColor</td>
	   <td>boolean</td>
	   <td>The color used to highlight the active node (node currently selected). If set to <b>null</b>, The active node is never highlighted</td>
	   <td><b>#D5E4F0</b></td>
   </tr>
   <tr>
	   <td>autoDetectLeafNode</td>
	   <td>boolean</td>
	   <td>Automatically detects the leaf node (node with no <b>children</b> field), hence no need to explicitly specify the <b>leaf</b> property in the data.</td>
	   <td><b>false</b></td>
   </tr>
</table>

## <a id="data-structure"></a> Structure of the data
```js
{
  id: "string [optional]",
  label: "string",     
  value: "any [optional]",
  leaf: "boolean [optional]"
  active: "boolean [optional]", 
  toggled: "boolean [optional]",
  children: "array [optional]"
}
```
<b>id</b>: A string which identifies the node.
<b>label</b>: The string to be displayed as a label for the node
<b>value</b>: The value to be sent to the callback listener when the node is clicked
<b>leaf</b>: A boolean which identifies if the current node is a leaf node.
<b>active</b>: If set to true, the node will be highlighted as the current active node.
<b>toggled</b>: If set to true, and is a parent node, it will be expanded on the tree-view
<b>children</b>: An array of objects where the structure of an object is as explained above (id, label, value... ). 

## Licence
MIT Licensed. Copyright (c) Nkemtakeh Celsoppe 2019.
