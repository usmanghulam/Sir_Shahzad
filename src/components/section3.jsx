import React from 'react';

const section3 = (props) => {
    var section3 = props.section3.map((res,index)=>{
        return(
            <div key={index}>
                <div className="row Section3">
                    <div className="col-md-5 col-md-offset-3">
                        <div className="img">
                                <img src={res.img} />
                        </div>
                            <p>{res.p}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-3 headingParagraph">
                        <h1>{res.h1}</h1>
                        <p>{res.p2}</p>
                    </div>
                </div>
            </div>
        )
    })
    var FourDivs = props.section3[0].FourDivs.map((res,index)=>{
        return( 
            <div key={index}>
                
                        <div className="col-md-6 BottomSection">
                            <i className={res.icon}></i>
                            <h1>{res.h}</h1>
                            <p>{res.p}</p>
                            </div>
                        </div>
        )
    })
    return (
        <div>
            {section3}
            <div className="row">
                <div className="container">
                    {FourDivs}
                </div>
            </div>
        </div>
    );
};

export default section3;