import React, { Component } from "react";

// Stateless Functional Component

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        React Counter
        <span className="badge badge-pill badge-primary mx-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a href="#" className="navbar-brand">
//           React Counter
//           <span className="badge badge-pill warning">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
