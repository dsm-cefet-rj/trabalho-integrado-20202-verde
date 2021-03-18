import React, { useState } from 'react';
import { connect } from "react-redux";

import './Feed.css';
import {
  Link
} from "react-router-dom"

const Feed = ({id}) => (
        
    /*
          const [post , setPost] = useState([
          {id: '0'},
          {id: '1'},
          {id: '2'},
          ]);
    */      
    /*    function Favorito(id){
          const newFav = post.map( post => {
            return post.id === id ? {...post, favorito: !post.favorito} : post
          });
          setPost(newFav);
      }
    */

    /*  curtir = () => {
          this.props.dispatch({ type: "CURTIR" });
      };
    */
 
  <aside>
   {id.map(post => (
    <div className = "container">
      
        <div className = "li">
        <div className="caixa">
            <Link to = "/Projeto">
            <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU " alt="P2"/>  </Link>
            
            
            
            </div>
        </div>
       
    </div>
   ))}
   </aside>
);
/*
const mapStateToProps = state => ({
        count: state.count
  });
export default connect(mapStateToProps)(Feed);
*/
export default connect(state => ({ id : state }))(Feed);