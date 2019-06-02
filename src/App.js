
import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Quiz from './Quiz';
import Basics from './Basics';
import Home from './Home';
import Footer from './Footer';
function App() {
  return  <div className="home">
<Router>
<div>
<Navbar />

// ToDo: figure out why home loads above each component?
// export things using gh-pages and webpack
// turn result.html into a component
// stop using createElement, use jsx
  <Route component={Home} path="/" />
  <Route component={Basics} path="/basics" />
  <Route component={Quiz} path="/quiz" />

</div>
</Router>
<Footer />

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
</script>
<script type="text/javascript">
</script>
</div>
};

export default App;