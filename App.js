import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading1 = React.createElement('h1', { id: 'heading1' }, 'Hellow World From React Heading 1');
// const heading2 = React.createElement('h2', { id: 'heading2' }, 'Hellow World From React Heading 2');
// const childDiv1 = React.createElement('div', {id: 'child1'}, [heading1, heading2]);
// const childDiv2 = React.createElement('div', {id: 'child2'}, [heading1, heading2]);
// const parentDiv = React.createElement('div', {id: 'parent'}, [childDiv1, childDiv2]);
const jsxHeading1 = (
  <div>
    <h1>Hellow World</h1>
  </div>
);

// const jsxHeading2 = React.createElement('h1', {}, console.log('hi'));

const HeadingComponent1 = () => (
  <div>
    {console.log('one')}
    <h1>Heading Component1</h1>
  </div>
);

const HeadingComponent2 = () => {
  return (
    <div>
      <h1>Heading Component 2</h1>
    </div>
  );
};

root.render(HeadingComponent1());