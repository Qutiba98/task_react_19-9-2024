import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import XMLHttpRequestComponent from "./components/api/XMLHttpRequestComponent";
import FetchAPIComponent from "./components/api/FetchAPIComponent";
import AxiosComponent from "./components/api/AxiosComponent";
import Home from "./components/nav/Home";
import Blog from "./components/nav/Blog";
import Contact from "./components/nav/Contact";
import CountdownTimer from "./components/CountdownTimer";
import UserInfoForm from "./components/updateUser/UserInfoForm";
import FetchVsAxiosComparison from "./components/FetchVsAxiosComparison";
import FetchDataWithPromises from "./components/FetchDataWithPromises"; // Import new component

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api/xml" element={<XMLHttpRequestComponent />} />
        <Route path="/api/fetch" element={<FetchAPIComponent />} />
        <Route path="/api/axios" element={<AxiosComponent />} />
        <Route path="/sale" element={<CountdownTimer />} />
        <Route path="/userinfo" element={<UserInfoForm />} />
        <Route path="/compare" element={<FetchVsAxiosComparison />} />
        <Route
          path="/fetch-promises"
          element={<FetchDataWithPromises />}
        />{" "}
        {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
