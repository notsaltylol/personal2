import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import minion from '../assets/images/minion.jpg';
import reddit from '../assets/images/reddit.jpg';
import webtoon from '../assets/images/webtoon.png';
import Card from '../components/Card';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Banana',
                    subTitle: 'bananananna',
                    imgSrc: minion,
                    link: 'https://one.ufl.edu',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Reddit',
                    subTitle: 'lol',
                    imgSrc: reddit,
                    link: 'https://www.reddit.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'webtoon',
                    subTitle: 'read',
                    imgSrc: webtoon,
                    link: 'https://www.webtoons.com/en/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) =>{
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        });
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel