import Navbar from './component/navbar/index'
import Home from './component/home/index'
import  React , { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [test, settest] = useState()
  const [pageNumber, setpageNumber] = useState(0)
  const observer = useRef()

  const lastBookElementRef =  useCallback(node =>{
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
        setpageNumber(prev => prev + 1)
      }
    })
    if(node) observer.current.observe(node);
  },[])


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.thecatapi.com/v1/breeds?page=${pageNumber}&limit=10`)
      .then(async(res)=>{
            setData([...data,...res.data])
            console.log('jadi');
         })
       .catch((err)=>{
           console.log(err.response);
       })
  }, [pageNumber])

  const scroll = () => {
    // let wrap = document.getElementById('body')
    // let y = wrap.scrollTop 
    // let contentHeight = wrap.offsetHeight
    // let reach = contentHeight - y
    // console.log(y, reach,contentHeight);
    // document.getElementById('test').innerHTML =y + ' | ' + ' | ' +reach+ ' | '+ contentHeight
    // if(y  >= reach){
    //    axios.get(`https://api.thecatapi.com/v1/breeds?page=${pageNumber+1}&limit=10`)
    //    .then(async(res)=>{
    //        setData(prevCat =>{
    //          return [...new Set([...data,...res.data])]})
    //       //  setpages({page: pages.page + 1})
    //    })
    //    .catch((err)=>{
    //        console.log(err.response);
    //    })
    // }
  }

  const search =(e)=>{
    if(e.target.value.length > 0){
        axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${e.target.value}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }else{
        axios.get(`https://api.thecatapi.com/v1/breeds?page=0&limit=10`)
       .then((res)=>{
           setData(res.data)
       })
       .catch((err)=>{
           console.log(err.response);
       })
    }
}


  return (
    <div className="App"  id='body'  style={{overflowY:'scroll', height:'100vh'}} onScroll={()=>scroll()} >
      <Navbar />
      <Home data={data} btnRef={lastBookElementRef} onchange={(e)=>{search(e)}} />
      <div id="test">{test}</div>
    </div>
  );
}

export default App;
