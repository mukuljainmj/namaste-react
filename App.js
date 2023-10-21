const root = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement('h1', { id: 'heading1' }, 'Hellow World From React Heading 1');
const heading2 = React.createElement('h2', { id: 'heading2' }, 'Hellow World From React Heading 2');
const childDiv1 = React.createElement('div', {id: 'child1'}, [heading1, heading2]);
const childDiv2 = React.createElement('div', {id: 'child2'}, [heading1, heading2]);
const parentDiv = React.createElement('div', {id: 'parent'}, [childDiv1, childDiv2]);
console.log(parentDiv, 'parent div');
root.render(parentDiv);