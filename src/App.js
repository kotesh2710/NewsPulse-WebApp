import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const [progress,setProgress] = useState(0);
  
    return (
      <div className='main-app'>
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(progress)}
        shadow="true"
        height={5}
      />
       <Routes>
          <Route path="/" element={<News setProgress={setProgress} key='general' country="in" pagesize={6} category="general"/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress} key='business' country="in" pagesize={6} category="business"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} key='entertainment'  country="in" pagesize={6} category="entertainment"/>}></Route>
          <Route path="/health" element={<News setProgress={setProgress} key='health'  country="in" pagesize={6} category="health"/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress} key='science'  country="in" pagesize={6} category="science"/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} key='sports'  country="in" pagesize={6} category="sports"/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} key='technology'  country="in" pagesize={6} category="technology"/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>
    )
}
