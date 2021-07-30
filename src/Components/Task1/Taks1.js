import React from 'react'
import {Card} from 'react-bootstrap'
import styles from './Taks1.module.css'

function Taks1(props) {
    const {characterData}=props
    return (
        <div className={styles.cards_container}>
            {
                characterData ? characterData.map((item,index)=>{
                    const src = (item.images!== undefined) ?  item.images.main : ""
                    const name = (item.name!==undefined)? `${item.name.first} ${item.name.middle} ${item.name.last}` : "No-Name"
                    return (<Card key={index} style={{ width: '18rem',height:'auto',marginBottom:'20px' }}>
                    <Card.Img variant="top" style={{ width: '18rem',height:'300px' ,textAlign:"center" }} alt="Image" src={src} />
                    <Card.Body>
                        <Card.Title>{`Name:-${name}`}</Card.Title>
                        <Card.Text>
                            <h6>{`Planet:-${item.homePlanet}`}</h6>
                            <h6>{`Age:-${item.age}`}</h6>
                            <h6>{`Gender:-${item.gender}`}</h6>
                        </Card.Text>
                    </Card.Body>
                    </Card>)
                }):null
            }
        </div>
    )
}

export default Taks1
