import React from 'react';

export const Footer = (props) => {
    var upperSection1 = props.submitSection.map((res,index)=>{
        return(
            <div key={index}>
                <div className="row upperSection1" style={{margin: '0', padding: '0'}}>
                    <div className="container">
                        <div className="col-md-3">
                            <h3>{res.Heading1.h1}</h3>
                            <h3>{res.Heading1.h2}</h3>
                            <h3>{res.Heading1.h3}</h3>
                            <h3>{res.Heading1.h4}</h3>
                            <h3>{res.Heading1.h5}</h3>
                            <h3>{res.Heading1.h6}</h3>
                            <h3>{res.Heading1.h7}</h3>
                        </div>
                        <div className="col-md-3">
                            <h1>Address</h1>
                            <h3>{res.Heading2[0].Info.address}</h3>
                            <h4><span>Phone no: <span>{res.Heading2[0].Info.phone}</span></span></h4>
                            <h2>{res.Heading2[0].h1}</h2>
                            <h3>{res.Heading2[0].p1}</h3>
                            <h2>{res.Heading2[0].h2}</h2>
                            <h3>{res.Heading2[0].p2}</h3>
                            <h2>{res.Heading2[0].h3}</h2>
                            <h3>{res.Heading2[0].p4}</h3>
                        </div>
                        <div className="col-md-6">
                            <form className="">
                                <div className="form-group">
                                    <label>First Name *</label>
                                    <input type="text" className="form-control input-lg" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name *</label>
                                    <input type="text" className="form-control input-lg" />
                                </div>
                                <div className="form-group">
                                    <label>Company *</label>
                                    <input type="text" className="form-control input-lg" />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="text" className="form-control input-lg" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control input-lg" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <textarea className="form-control" style={{height: '100px'}}>

                                    </textarea>
                                    <button className="btn btn-block btn-danger" style={{marginTop: '40px !important'}}>{res.Heading2[0].btn}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {upperSection1}
        </div>
    );
};
