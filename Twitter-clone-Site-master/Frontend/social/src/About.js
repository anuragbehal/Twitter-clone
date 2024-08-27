import React from 'react'
import Left from './Left'
import Right from './Right'

export default function About() {
    return (
        <>
            <div className='contain lft'>
                <Left></Left>
            </div>
            <div className='contain md'>
                <div className='mid_container'>
                    <h2 className='mid_container_h2'>About</h2>
                    <hr></hr>
                    <div>
                        <h4>Video Explaination</h4>
                        {/* <video height="120%" width="100%" controls>
                            <source src={require("./video/explaination.mp4")} type="video/mp4" />{""}
                        </video> */}
                    </div>
                </div>
            </div>
            <div className='contain rt'>
                <Right></Right>
            </div>
        </>
    )
}
