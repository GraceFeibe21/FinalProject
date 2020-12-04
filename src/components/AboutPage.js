import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem"}}>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Episode List</Card.Title>
                    <Card.Text>
                        Dibuat oleh Grace Feibe Pikirang
                        <br/>
                        <br/>
                        API Endpoint yang saya gunakan adalah episode list dari TVMAZE 
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage