import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import List from '../cats/index'

export default function Index({ data, onchange, btnRef }) {

    const ref = React.createRef();
    const [see, setsee] = useState(false)
    const view = () => {
        if (!see) {
            setsee(true)
        } else {
            setsee(false)
        }
    }
    return (
        <div className='body-container'>
            <div className="search-container">
                <p id='height'></p>
                <div className="search">
                    <input className='' type="search" placeholder='Search ...' onChange={onchange} />
                </div>
            </div>
            <div className="body"  >
                {data &&
                    data.map((cat, index) => {
                        if (data.length === index + 1) {
                            return (
                                <div className="list" ref={btnRef} key={index}>
                                    <div className="title">
                                        <div className="title-name">
                                            <h3>{cat.name}</h3>
                                        </div>
                                        <div className="button">
                                            <button>View</button>
                                        </div>
                                    </div>
                                    {see == true ?
                                        <div className="detil" id='detil'>
                                            <div className="detil-pict">
                                                {cat.image &&
                                                    <img src={cat.image.url} alt="img" />
                                                }
                                            </div>
                                            <div className="detil-desc">
                                                <p>{cat.description}</p>
                                                <div className="detil-cat">
                                                    <div className="datas">
                                                        <div className="data">
                                                            <p>adaptability: {cat.adaptability}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>affection_level: {cat.affection_level}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>alt_names: {cat.alt_names}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>cfa_url: {cat.cfa_url}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>child_friendly: {cat.child_friendly}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>country_code: {cat.country_code}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>country_codes: {cat.country_codes}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>dog_friendly: {cat.dog_friendly}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>wikipedia_url: {cat.wikipedia_url}</p>
                                                        </div>
                                                    </div>
                                                    <div className="datas" style={{ marginLeft: '60px', marginRight: '-60px' }}>
                                                        <div className="data">
                                                            <p>energy_level: {cat.energy_level}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>experimental: {cat.experimental}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>grooming: {cat.grooming}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>hairless: {cat.hairless}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>health_issues: {cat.health_issues}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>hypoallergenic: {cat.hypoallergenic}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>id: {cat.id}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>indoor: {cat.indoor}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>vocalisation: {cat.vocalisation}</p>
                                                        </div>
                                                        {cat.weight &&
                                                            <div className="data">
                                                                <p>metric: {cat.weight.metric}</p>
                                                            </div>
                                                        }
                                                    </div>
                                                    <div className="datas">
                                                        <div className="data">
                                                            <p>intelligence: {cat.intelligence}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>lap: {cat.lap}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>life_span: {cat.life_span}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>name: {cat.name}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>natural: {cat.natural}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>origin: {cat.origin}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>rare: {cat.rare}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>reference_image_id: {cat.reference_image_id}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>vetstreet_url: {cat.vetstreet_url}</p>
                                                        </div>
                                                    </div>
                                                    <div className="datas">
                                                        <div className="data">
                                                            <p>rex: {cat.rex}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>shedding_level: {cat.shedding_level}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>short_legs: {cat.short_legs}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>social_needs: {cat.social_needs}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>stranger_friendly: {cat.stranger_friendly}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>suppressed_tail: {cat.suppressed_tail}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>temperament: {cat.temperament}</p>
                                                        </div>
                                                        <div className="data">
                                                            <p>vcahospitals_url: {cat.vcahospitals_url}</p>
                                                        </div>
                                                        {cat.weight &&
                                                            <>
                                                                <div className="data">
                                                                    <p>imperial: {cat.weight.imperial}</p>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : <div></div>
                                    }
                                </div>

                            )
                        }
                        else {
                            return (<List cat={cat} key={index} />)
                        }
                    })
                }
            </div>
        </div>
    )
}
