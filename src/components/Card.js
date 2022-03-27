import React from 'react'
import contentImg from '../images/banner-buzz.jpg'
export default function Card(props) {
    return (
            <div class="card">
                <div class="card-header">
                <img src={contentImg} alt="rover" />
                </div>
                <div class="card-body">
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.body}
                </p>
                <p>{props.date}</p>
                </div>
            </div>
    )
}
