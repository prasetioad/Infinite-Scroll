import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import List from '../cats/index'

export default function Index({data, onchange, btnRef}) {

    return (
        <div className='body-container'>
            <div className="search-container">
                <p id='height'></p>
                <div className="search">
                    <input className='' type="search" placeholder='Search ...' onChange={onchange}/>
                </div>
            </div>
            <div className="body"  >
                <List data={data} theRef={btnRef}/>
            </div>
        </div>
    )
}
