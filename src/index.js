import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('Komponen berhasil dibuat!');
//     }

//     render() {
//         return <p>Hai, {this.props.name}. I'm a software engineering</p>;
//     }
// }
// root.render(element);
root.render(<ContactApp />);
// root.render(
//     <div>
//         <MyComponent name="Dicoding" />
//         <MyComponent name="John" />
//         <MyComponent name="Doe" />
//     </div>
// );