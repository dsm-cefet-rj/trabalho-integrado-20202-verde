import React from 'react';
import ReactDOM from 'react-dom';
import './Perfil.css';

class Perfil extends React.Component {
  render(){
   return(
     <div className = "container">
       <div id="fotoprojeto">
         <div className="col-xs-12">
           <div className="linha">
             <div className="coluna">
               <div><h3>Seguidor de Linha</h3></div>
               <div><p>Participantes do Projeto<br /></p></div>
               <div><img className="img-responsive" src="https://http2.mlstatic.com/kit-rob-seguidor-de-linha-d2-1-kit-robotica-motor-reduco-D_Q_NP_834031-MLB31153469338_062019-F.webp" alt="Foto do Projeto 1" height="300px" width="500px" /></div>
               <div><p>Descri&ccedil;&atilde;o do Projeto</p></div>
               <hr />
               </div>
              <div className="coluna">
               <div><h3>C&oacute;digo</h3></div>
               <div><p>Participantes do Projeto<br /></p></div>
               <div><img className="img-responsive" src="https://l3software.com.br/wp-content/uploads/2019/03/jscrambler.jpg" alt="Foto do Projeto 2" height="300px" width="600px" /></div>
               <div><p>Descri&ccedil;&atilde;o do Projeto</p></div>
               <hr />
               </div>
           </div>
           <div className="linha">
             <div className="coluna">
               <div><h3>Jogo Eletr&ocirc;nico</h3></div>
               <div><p>Participantes do Projeto<br /></p></div>
               <div><img className="img-responsive" src="https://i.pinimg.com/originals/25/9e/78/259e78b7c9f99e754b9cb8c7dfad7a36.jpg" alt="Foto do Projeto 3" height="300px" width="500px" /></div>
               <div><p>Descri&ccedil;&atilde;o do Projeto</p></div>
               <hr />
               </div>
             <div className="coluna">
                <div><h3>Sintetizador Modular</h3></div>
                <div><p>Participantes do Projeto<br /></p></div>
                <div><img className="img-responsive" src="https://factmag-images.s3.amazonaws.com/wp-content/uploads/2017/09/vcv-rack-120917.png" alt="Foto do Projeto 4" height="300px" width="600px" /></div>
                <div><p>Descri&ccedil;&atilde;o do Projeto</p></div>
               <hr />
               </div>
             </div>
           </div>
          </div>
          </div>
     );
  }
}

ReactDOM.render(
  <Perfil/>,
  document.getElementById('root')
);

export default Perfil;