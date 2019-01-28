import React, { Component } from 'react';
import $ from 'jquery';

class header extends Component {
    componentDidMount(){
        $('.RelativeParentDiv').click((e)=>{
            $('.upperDiv').css({
                width: e.pageX+'px'
            })
        })

        // var width = $('.upperDiv').width(900)+'px';
        // var PageWidth;
        // $('.mousemove').click((e)=>{
        //     $('*').mousedown(()=>{
        //         console.log(e)
        //     })
        // })
        // $('.mousemove').mousedown((e)=>{
        //     // console.log('working');
        //     $('.upperDiv').css({
        //         width: e.pageX+'px'
        //     })
        //     // $('*').mouseup(()=>{
        //     // })
        // })


    }
    render() {
        return (
            <div>
                <header>
                    <div className="RelativeParentDiv">
                        <div className="containerDiv">
                            <div className="headerLeftText">
                                <h2>The combination of great design and diligent app development.</h2>
                                <button className="btn">View Theme<i className="fas fa-chevron-right btnright"></i></button>
                            </div>
                            <div className="headerCenterImage">
                                <div className="centerInsideDiv">
                                    <img src="/Images/bird-standard-min.png" className="image-responsive" />
                                </div>
                            </div>
                            <div className="headerRightText">
                                <img src="./Images/head-dot.png" />
                                <h2>We make <span>sleek and modern</span>designs for your business.</h2>
                            </div>
                        </div>


                        <section className="upperDiv">
                            <div className="containerDiv2">
                                <div className="headerLeftText2">
                                    <h2>The combination of great design and diligent app development.</h2>
                                    <button className="btn">View Theme<i className="fas fa-chevron-right btnright"></i></button>
                                </div>
                                <div className="headerCenterImage2">
                                    <div className="centerInsideDiv2">
                                        <img src="/Images/bird-code-min.png" className="image-responsive" />
                                    </div>
                                </div>
                                <div className="headerRightText2">
                                    <img src="./Images/head-dot.png" />
                                    <h2>We make <span>sleek and modern</span>designs for your business.</h2>
                                </div>
                            </div>
                            <div className="mousemove">

                            </div>
                        </section>
                    </div>
                </header>
            </div>
        )
    }
}

export default header;