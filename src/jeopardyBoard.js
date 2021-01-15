import React, { useState } from 'react';
import ausFlag from './imgs/aus.jpg'
import nzFlag from './imgs/nz.png'
import walesFlag from './imgs/wales.jpg'
import chicagoFlag from './imgs/chicago.png'
import kesha from './imgs/kesha.png'
import fleetwoodmac from './imgs/fleetwoodmac.png'
import pinkfloyd from './imgs/pinkfloyd.png'
import tswift from './imgs/tswift.png'
import beatles from './imgs/beatles.png'

const Board = (props) => {
    const questions = [
        [
        {type: "pic", content: ausFlag}, 
        {type: 'text', content: "This flag is the only one with 5 sides"},
        {type: 'pic', content: nzFlag},
        {type: 'pic', content: chicagoFlag},
        {type: 'pic', content: walesFlag},
        ],
        [
            {type: 'text', content: "We all hear it in class, but few actually know what it means. An ontologist studies this elusive concept."},
            {type: 'text', content: "You'd think they study gorillas, but actually an apiologist studies these important insects"},
            {type: 'text', content: "Sound's like a psychologist, a vexologist doesn't study annoyed people"},
            {type: 'text', content: "A horologist studies something scary, but it's not horror movies"},
            {type: 'text', content: "Don't overthink it! A ripperologist is a unique type of historian that studies this. "},
        ],
        [
            {type: 'text', content: "Kinda a shitty bequest! This is what Dumbledore leaves Ron in his will."},
            {type: 'text', content: "This is the line that is etched in our memories and in Harry's skin at Umbridge's detention."},
            {type: 'text', content: "This team won the Quidditch World Cup before all hell broke loose in the Goblet of Fire."},
            {type: 'text', content: "It must be full of dragons! This is the country that Charlie Weasley lives in"},
            {type: 'text', content: "Dumbledore has a scar of this helpful map on his left knee"},

        ],
        [
            {type: "pic", content: kesha}, 
            {type: 'pic', content: pinkfloyd},
            {type: 'pic', content: tswift},
            {type: 'pic', content: beatles},
            {type: 'pic', content: fleetwoodmac},
        ],
        [
            {type: 'text', content: "You better know this one, because this is what we are doing right now. This is what CMTs stands for."},
            {type: 'text', content: "Just remember your bidnight shirt. This was the year we went local"},
            {type: 'text', content: "Oh no, I hope I don't fall! This picture is painted on the 13x Pong table"},
            {type: 'text', content: "An important year in our history, this was year that Like a Prayer by Madonna was released"},
            {type: 'text', content: "It isn't phi delt! This was the frat that had the haus before we came in and made it better"},
        ]
    ];
    const [showModal, setShowModal] = useState(false)
    const [idx1, setIdx1] = useState();
    const [idx2, setIdx2] = useState();
    const scores = [100, 200, 300, 400, 500];
    const categories = ["Flags", "-ologies", "Harry Potter", "Name that artist!", "SD!"]
    const [seen, setSeen] = useState(categories.map(cat => scores.map(score => false)))

    const modal = () => {
        if(idx1!==undefined && idx2!==undefined){
            console.log(questions[idx1][idx2].type, questions[idx1][idx2].content)
            return (
            <div style = {{width: '100vw', height: '100vh', backgroundColor: 'blue', color: 'white', textAlign: 'center', fontSize: 40}}>
                <div style = {{textAlign: 'right', paddingRight: '10vw', marginBottom: '10vh'}}onClick = {() => {setShowModal(false)}}>X</div>
                {questions[idx1][idx2].type === "text" ?
                <div style = {{fontSize: 80, margin: '10vw'}}> {questions[idx1][idx2].content} </div>
                :
                <img src = {questions[idx1][idx2].content} alt = "content" style= {{height:'500px', }}/>
                }
            </div>
        
        );
        } else {
            return null
        }
    }
    return (
        <div style = {{backgroundColor: 'blue', color: 'white'}}>
            {showModal ? modal() : 
            categories.map((cat, catIdx) => {
                        return (
                            <div key = {cat}
                            style = {{display: 'inline-block', width: '14vw', textAlign: 'center', height: '100vh', margin: '2vw', marginBottom: 0 }}>
                                <div style = {{borderStyle: 'solid', borderColor: 'white', height: '10vh', paddingTop: '5vh', fontSize: 20, fontWeight: '700'}}>{cat}</div>
                                {scores.map((score, scoreIdx) => {
                                    return (
                                    <div key ={`${cat}${score}`}
                                    style = {{borderStyle: 'solid', borderColor: 'white', height: '10vh', paddingTop: '5vh', fontSize: 20}} 
                                    onClick = {() => {
                                        if (!seen[catIdx][scoreIdx]){
                                            setIdx1(catIdx);
                                            setIdx2(scoreIdx);
                                            setShowModal(true); 
                                            const newSeen = [...seen];
                                            newSeen[catIdx][scoreIdx] = true;
                                            setSeen(newSeen)
                                        }
                                       }}>
                                        {!seen[catIdx][scoreIdx] ? score : "--"}
                                    </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            
        </div>
        
    )
}
export default Board;