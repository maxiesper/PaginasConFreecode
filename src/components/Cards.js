import React from "react";
import Card from './Card';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const cards = [
  {id:1,
  title:"Venta de Producto ",
  image: image1,
  url:'https://paginadeproducto.netlify.app/',
  text:"pagina destinada para la venta directa de Freidoras de aire"
    },
  { id:2,
    title:"Encuesta Web",
    image:image2,
    url:'https://formularioencuestas.netlify.app/',
    text:"modelo de encuesta academica web"
  },
  { id:3,
    title:"Fan Page",
    image:image3,
    url:'https://paginatributo.netlify.app/',
    text:"pagina dedicada al fandom de Taylor Swift"

    }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
       {
       cards.map( card => (
       <div className="col-md-4" key={card.id}>
          <Card title={card.title}
          imageSource={card.image}
          url={card.url}
          text={card.text}/>
        </div>))
        }
      </div>
    </div>
  );
}

export default Cards;
