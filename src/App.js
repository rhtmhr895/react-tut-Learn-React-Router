import Layout from './components/Layout';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
              <Route index  element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>



  );
}

export default App;
