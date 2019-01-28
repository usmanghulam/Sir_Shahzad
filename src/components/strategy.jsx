import React from 'react';
import $ from 'jquery';

const strategy = (props) => {
    $(document).ready(()=>{
        $('.iconLeft').click(()=>{
            $('.Component2').css({
                marginLeft: '0px'
            })
        })
        $('.iconRight').click(()=>{
            $('.Component2').css({
                marginLeft: '-1050px'
            })
        })
    })
    var section2 = props.section2.map((res,index)=>{
        return(
            <div  key={index}>
                <div className="Component2">
                    <div className="innerDiv">
                        <div className="img">
                            <img src={res.img} />
                        </div>
                        <div className="CenterupperaDiv">
                            <h1>{res.heading}</h1>
                            <h2 className="">{res.dollar}</h2>
                            <h3>{res.monthly}</h3>
                        </div>
                        <div className="endDiv">
                            <h4>{res.smallHeading}</h4>
                            <p>{res.p}</p>
                            <button className="btn">{res.btn}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div>
            <section className="strategy">
                <div className="row" style={{margin:'0',padding:'0'}}>
                    <div className="col-md-8 col-md-offset-2">
                        <h1>{props.section1[0].headings.h1}</h1>
                        <p className="text-center">{props.section1[0].paragraph.p1}</p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="iconLeft"><i className="fas fa-chevron-left"></i></div>
                <div className="rowDiv">
                    {section2}
                </div>
                <div className="iconRight"><i className="fas fa-chevron-right"></i></div>
            </section>
        </div>
    );
};

export default strategy;