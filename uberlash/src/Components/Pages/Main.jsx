import { Products, Item, Carousel, ItemsCarousel } from "../Styles/MainStyles";
import { ChevronLeft, ChevronRight, Key } from "react-feather";
import { useState } from "react";

export default function Main() {
  const slides = [
    "./src/Images/Slides/Slide1.png",
    "./src/Images/Slides/Slide2.png",
    "./src/Images/Slides/Slide3.png",
    "./src/Images/Slides/Slide4.jpg",
  ];

  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current) => current === 0 ? slides.length - 1 : current - 1)
  const next = () => setCurrent((current) => current === slides.length - 1 ? 0  : current + 1)

  return (
    <main>
      <Carousel>
        <ItemsCarousel curr={current}>
          {slides.map((s, index) => (
            <img
              key={index}
              src={s}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </ItemsCarousel>
        <div>
          <button onClick={prev}>
            <ChevronLeft size={40}/>
          </button>
          <button onClick={next}>
            <ChevronRight size={40}/>
          </button>
        </div>
      </Carousel>
      <Products>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
        <Item>
          <img src="https://placehold.co/300x330" alt="" />
          <div>
            <small>Cilios YY Nagaraku - Volume Brasileiro</small>
            <p>
              R$31,90 <small className="Destaque">-20% OFF</small>
            </p>
            <small className="Cortado">R$39,90</small>
            <p>R$30,94 com Pix</p>
          </div>
        </Item>
      </Products>
    </main>
  );
}
