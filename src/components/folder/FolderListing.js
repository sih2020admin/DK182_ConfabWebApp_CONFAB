import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "../../App.css";
import addIcon from '../../images/addIcon.png' ;

import FolderList from "./FolderList";

class FolderListing extends Component {
    render() {
        return (
            <div className="flex flex-wrap ml5">
            	<div className="newPost flex black b  br4 " style={{marginTop:"4.5vh", height:'8.5vh',border:"0.5",  background:'#FDECF4'}}>
                        <img src={addIcon} alt="" style={{height:'20px' , padding:'2.5vh 0.5vw 0 1vw'}}/>
                        <Link   className="f6 fm new  pt3 pr3 br4 no-underline "
                                style={{fontSize:'0.7em' ,color:"#ED5A9E" , height:'2vh'  }}
                                to="/new"> New Post</Link>
                
            	</div>
                <div style={{}}>
                    <FolderList />
                </div>
            </div>
        );
    }
}

export default FolderListing;
