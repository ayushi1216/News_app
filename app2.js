// import './App.css';
// import React, { Component } from 'react'
// import News from './components/News';
// import Navbar from './components/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// export default class App extends Component {

//   render() {

//     return (

//       <>
//         <Router>


//           <Navbar />

//           {/* Passing Props  */}

//           {/* <News pageSize={5} country="in" category="" /> */}


//           <Routes>

//             <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />}></Route>

//             <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business" />}></Route>
//             <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
//             <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />}> </Route>
//             <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health" />}>  </Route>
//             <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />}>  </Route>
//             <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />}>  </Route>
//             <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />}> </Route>

//           </Routes>


//         </Router>

//       </>

//     )
//   }
// }



// // Exact => When endpoints are changing but not the components (Components are not mounting again even after sending updated props) while navigating with navigation bar

// // Components are not remounting again when navigating, we have to remount component with updated props for that we have to pass a unique (key) prop with out component



