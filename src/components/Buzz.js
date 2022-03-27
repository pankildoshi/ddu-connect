import React from 'react'
import '../index.css'
import Card from './Card'

export default function Buzz() {
    return (
        <>
            <div className="banner-buzz">
            </div>
            <div className="container-cards">
                <Card
                    title="HEARTFULLNESS MEDITATION ORIENTATION"
                    body="Beginning 16th of December, a 3 day webinar was conducted by Dr. ND Desai Faculty of Medical Sciences and Research and Heartfullness Institute, with a"
                    date="December 27, 2020"
                />
                <Card
                    title="HEROES IN PANDEMIC"
                    body="In these unprecedented and changing times, two alumni of Dharmsinh Desai university have devoted themselves to assist people in need, in an effort to fight"
                    date="December 20, 2020"
                />
                <Card
                    title="DSC DDU"
                    body="The Developer Students Club (DSC) of our University which is powered by Google Developers, held seminars in the first as well as the second session"
                    date="December 15, 2019"
                />
                <Card
                    title="ORAL IMPLANTOLOGY SEMINAR"
                    body="On 14th December 2019, a seminar on oral implantology was conducted by Faculty of Dental Science. Dr Arvind U D, an Oral and Maxillofacial surgeon,"
                    date="December 14, 2019"
                />
                <Card
                    title="ELECTORAL LITERACY PROGRAM"
                    body="The NSS-Spandan Student Body, an active participant of the Electoral Literacy Club from Dharmsinh Desai University had organized the Electoral Literacy Program on 12th December"
                    date="December 12, 2019"
                />    
            </div>
        </>
    )
}
