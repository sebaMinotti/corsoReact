import React from 'react'

import '../style/Navigation.css';
const icons =[
   {icona:'fa-brands fa-github',nome:'gitHub',id:1},
   {icona:'fa-brands fa-linkedin',nome:'linkedin',id:2},
   {icona:'fa-brands fa-facebook',nome:'facebook',id:3},
   {icona:'fa-brands fa-instagram',nome:'instagram',id:4},
]

function Navigation() {
  return (
     <>
        <div className='container'>
             <nav>
                 <div className='boxSocial'>
                       {
                         icons.map(icona=>(
                             <div className='box' key={icona.id}> 
                                 <i className={icona.icona}></i>
                                   <label>{icona.nome}</label>
                             </div>
                         ))
                       }
                 </div>
                 
             </nav>
        </div>

     </>
  )
}

export default Navigation