import { HashLink } from "react-router-hash-link";
import Countdown from "../Countdown";
import { useModal } from "../hooks/useModal";
import "./Modal.css";
import { FigureModal } from "./FigureModal";
import { useState } from "react";
import FormConfirm from "./FormConfirm";

export default function Home() {
  // Aquí poner la fecha y hora a calcular, en formato "YYYY/MM/DD HH:MM:SS".
  const limitDate = "2023/03/12 19:00:00";

  // Datos Cumpleañera/o y flia
  const dataCumple = {
    name: "Joaquín",
    whatsapp: 3515222418,
    añosCumple: 4,
    fecha: "El domingo 12 de marzo",
    horario: "de 19 a 21:30",
    invitacion: "./assets/hero.jpg",
    images: [
      { id: 1, foto: "./assets/foto01.jpg" },
      { id: 2, foto: "./assets/foto02.jpg" },
      { id: 3, foto: "./assets/foto03.jpg" },
      { id: 4, foto: "./assets/foto04.jpg" },
      { id: 5, foto: "./assets/foto05.jpg" },
      { id: 6, foto: "./assets/foto06.jpg" },
      { id: 7, foto: "./assets/foto07.jpg" },
      { id: 8, foto: "./assets/foto08.jpg" },
      { id: 9, foto: "./assets/foto09.jpg" },
      { id: 10, foto: "./assets/foto10.jpg" },
      { id: 11, foto: "./assets/foto11.jpg" },
      { id: 12, foto: "./assets/foto12.jpg" },
      { id: 13, foto: "./assets/foto13.jpg" },
      { id: 14, foto: "./assets/foto14.jpg" },
      { id: 15, foto: "./assets/foto15.jpg" },
    ],
    fotosEvento: true,
  };

  // Datos Salón:
  const salon = {
    name: "Arlekin",
    whatsapp: 3515127986,
    instagram: "https://www.instagram.com/arlekinfiestasinfantiles",
    facebook:
      "https://www.facebook.com/Arlekin-Fiestas-Infantiles-1423939864491867/",
    tiktok: "",
    youtube: "",
    imageFront: "./assets/arlekin2.jpg",
    images: [],
    direccion: "Av. Sagrada Familia 1328",
  };

  //  -  Menu y UpButton -
  const handleMenu = () => {
    //  switcheamos la clase "is-active" de esta forma: buscamos el selector "panel" y luego entra a su lista de clases y con el método toggle añade o quita la clase "is-active"
    document.querySelector(".panel").classList.toggle("is-active");
    document.querySelector(".hamburguer-btn").classList.toggle("is-active");
  };
  const handleLinkMenu = () => {
    // con este tercer parámetro quitamos el "is-active" cuando se selecciona algún link del menú, cerrándolo.
    document.querySelector(".panel").classList.remove("is-active");
    document.querySelector(".hamburguer-btn").classList.remove("is-active");
  };

  // Para que el botón aparezca cuando hacemos scroll para abajo, y desaparezca cuando suba. Usamos las propiedades: "pageYOffset" del objeto Window, || o la propiedad "documentElement.scrollTop" del Document, para detectar a qué distancia se ha hecho scroll vertical, y luego determinar que cuando sea mayor de 400 haga aparecer (quita el hidden) al botón. Con else volvemos a ocultarlo.
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 450) {
      document.querySelector(".scroll-top-boton").classList.remove("hidden");
    } else {
      document.querySelector(".scroll-top-boton").classList.add("hidden");
    }
    //podríamos ver la actividad del scroll con console.log(window.pageYOffset, document.documentElement.scrollTop)
  });

  /* Apertura y Cierre Fotos - Modales */
  const [isOpenModal, openModal, closeModal] = useModal(false);

  // Esta var de estado envía la ubicacion de la foto como props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  function openOneModal(id) {
    setData({});
    dataCumple.images.map((el) => {
      if (id === el.id) {
        setData({
          id: el.id,
          foto: el.foto,
        });
      }
    });
    openModal();
  }
  return (
    <>
      {/* Menu Desplegado */}
      <aside className="panel">
        <nav className="menu">
          <HashLink onClick={handleLinkMenu} smooth to="#cuando">
            ¿Cuándo se festeja?
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#salon">
            ¿Dónde se festeja?
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#fotos">
            Mirá estas fotos!
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#formConfirm">
            Confirmá tu participación!
          </HashLink>
        </nav>
      </aside>

      {/*  // Contenido principal  */}
      <main className="container-fluid">
        <div className="hero-image">
          <img src={dataCumple.invitacion} alt="invitacion" />
          {/*  // Si usamos la Hero Image en el background de un elemento
          <h3>
            Subtitulo dos líneas - linea uno
            <br /> Subtitulo de dos líneas para HeroImage
          </h3>
          <div>
            <h1>Título Principal Hero Image</h1>
          </div> */}
        </div>
        <article id="inicio" className="nombre-cumple">
          <h2>
            Festejamos el cumple {dataCumple.añosCumple} de {dataCumple.name}
          </h2>
        </article>

        <article id="cuando" className="content">
          <div className="highlight">
            <h2>¿Cuándo es?</h2>
            <h3>
              {dataCumple.fecha}
              <br />
              {dataCumple.horario}
            </h3>
          </div>

          <Countdown
            limitDate={limitDate}
            name={dataCumple.name}
            fotosEvento={dataCumple.fotosEvento}
          />
        </article>
        <article id="salon" className="content">
          <div className="highlight">
            <h2>¿Dónde festejamos?</h2>
            <h3>En el salón {salon.name}</h3>
            <div className="imagenes-salon">
              <img
                className="salon-frente"
                src={salon.imageFront}
                alt="foto fachada salón"
              />
            </div>
            <h4>{salon.direccion}</h4>
            {/* - - Redes Sociales Salón - - */}
            <p>Podés contactar al salón por:</p>
            <div className="redes-salon">
              {/*  WHATSAPP */}
              <a
                href={
                  window.navigator.platform === "Win32"
                    ? `https://wa.me/54${salon.whatsapp}?text=Mensaje%20desde:%20INVITACION%20VIRTUAL%20INTELIGENTE®%0AHola%20les%20consulto%20por%20el%20salón%20${salon.name}.%0AIndicar%20fecha%20y%20cuántos%20años%20cumple :-)`
                    : `https://wa.me/54${salon.whatsapp}?text=Mensaje%20desde:%20INVITACION%20VIRTUAL%20INTELIGENTE®%0AHola%20les%20consulto%20por%20el%20salón%20${salon.name}%20 😄Indicar%20fecha%20y%20cuántos%20años%20🎊%20cumple:%20`
                }
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="bi bi-whatsapp"
                  style={{
                    color: "rgb(18, 175, 10)",
                  }}
                ></i>
              </a>
              <a href={salon.instagram} target="_blank" rel="noreferrer">
                <i
                  className="bi bi-instagram"
                  style={{
                    color: "rgb(188, 42, 141)",
                  }}
                ></i>
              </a>
              <a href={salon.facebook} target="_blank" rel="noreferrer">
                <i
                  className="bi bi-facebook"
                  style={{
                    color: "rgb(59,89,151)",
                  }}
                ></i>
              </a>
              {/* <a href={salon.tiktok} target="_blank" rel="noreferrer">
                <i
                  className="bi bi-tiktok"
                  style={{
                    color: "#000",
                  }}
                ></i>
              </a>
              
              <a href={salon.youtube} target="_blank" rel="noreferrer">
                <i
                  className="bi bi-youtube"
                  style={{
                    color: "#f00",
                  }}
                ></i>
              </a> */}
            </div>
            <iframe
              title="Ubicacion Salon en gmaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9945390790076!2d-64.22904348464644!3d-31.386714101958383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298dba6407d2f%3A0x17633a4330ac8eab!2sArlek%C3%ADn%20Fiestas%20Infantiles!5e0!3m2!1ses!2sar!4v1677618379217!5m2!1ses!2sar"
              style={{
                width: "100%",
                height: "30vh",
                maxHeight: "40vh",
                style: "border:0",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>

        <article id="joa4banner" className="hero-image">
          <img src="./assets/joa4.png" alt="logo joaquin 4" />
        </article>

        {/*  - - Fotos cumpleañero/a - -  */}
        <article id="fotos" className="content">
          <div className="grid-insta">
            {dataCumple.images.map((el) => (
              <img
                onClick={(e) => openOneModal(el.id)}
                src={el.foto}
                key={el.id}
                alt="foto"
              />
            ))}
          </div>
        </article>

        {/*  Modals para la apertura de las fotos  */}
        {isOpenModal && (
          <FigureModal
            key={data.id}
            foto={data.foto}
            isOpenModal={isOpenModal}
            closeModal={closeModal}
          />
        )}

        <article id="formConfirm" className="content">
          <FormConfirm />
        </article>
      </main>

      {/* Botón Up */}
      <button className="scroll-top-boton btn btn-dark hidden">
        <HashLink smooth to="#top">
          <div>
            <i className="bi bi-arrow-up-circle-fill"></i>
          </div>
        </HashLink>
      </button>

      {/* Hamburguer Menu */}
      <button
        onClick={handleMenu}
        className="hamburguer-btn hamburger hamburger--spring"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
}
