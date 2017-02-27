import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import './public/public.scss';

class App extends Component {
    constructor(){
        super();
        this.state={
            Aa:'aaaaaaaaaaa'
        };

    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            mousewheelControl: true
        });
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));

