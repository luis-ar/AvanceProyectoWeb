import React from "react";
import ImagenHamburguesa from "../Imagenes/hamburguesa.svg";
import ImagenClose from "../Imagenes/close.svg";
import ImagenCheckList from "../Imagenes/checklist.svg";
import ImagenPieChart from "../Imagenes/pie_chart.svg";
import ImagenSearchEngine from "../Imagenes/search_engine.svg";
import ImagenSecurity from "../Imagenes/security.svg";
import Imagen1 from "../Imagenes/uno.jpg";
import Imagen2 from "../Imagenes/dos.jpg";
import Imagen3 from "../Imagenes/tres.jpg";
import Imagen4 from "../Imagenes/cuatro.jpg";
import Imagen5 from "../Imagenes/cinco.jpg";
import Imagen6 from "../Imagenes/seis.jpg";

const Conoce = ({ setRegistro, setNosotros }) => {
  const Mostrar = () => {
    const hamburguer = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-navegacion");
    hamburguer.addEventListener("click", () => {
      menu.classList.toggle("spread");
    });
    window.addEventListener("click", (e) => {
      if (
        menu.classList.contains("spread") &&
        e.target != menu &&
        e.target != hamburguer
      ) {
        menu.classList.toggle("spread");
      }
    });
  };

  const ImagenAmplia = () => {
    const hamburguer1 = document.querySelector(".hamburger");
    const imagenes = document.querySelectorAll(".img-galeria");
    const imagenesLight = document.querySelector(".agregar-imagen");
    const contenedorLight = document.querySelector(".imagen-light");
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", () => {
        aparecerImagen(imagen.getAttribute("src"));
      });
    });

    contenedorLight.addEventListener("click", (e) => {
      if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");
        hamburguer1.style.opacity = "1";
      }
    });
    const aparecerImagen = (imagen) => {
      imagenesLight.src = imagen;
      contenedorLight.classList.toggle("show");
      imagenesLight.classList.toggle("showImage");
      hamburguer1.style.opacity = "0";
    };
  };
  return (
    <div>
      <header className="header" id="inicio">
        <img
          src={ImagenClose}
          alt=""
          className="cerrarVentana"
          onClick={(e) => {
            setRegistro(false);
            setNosotros(false);
          }}
        />

        <img
          src={ImagenHamburguesa}
          alt=""
          className="hamburger"
          onClick={Mostrar}
        />
        <nav className="menu-navegacion">
          <a href="#inicio">Inicio</a>
          <a href="#servicio">Servicio</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#expertos">Expertos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="contenedor1 head">
          <h1 className="titulo">Convertimos tus sueños en realidad</h1>
          <p className="copy">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
      </header>
      <main>
        <section className="services contenedor1" id="servicio">
          <h2 className="subtitulo">Nuestro Servicio</h2>
          <div className="contenedor-servicio">
            <img src={ImagenCheckList} alt="" />
            <div className="checklist-servicio">
              <div className="service">
                <h3 className="n-service">
                  <span className="number">1</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
              <div className="service">
                <h3 className="n-service">
                  <span className="number">2</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
              <div className="service">
                <h3 className="n-service">
                  <span className="number">3</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery" id="portafolio">
          <div className="contenedor1">
            <h2 className="subtitulo">Galeria</h2>
            <div className="contenedor-galeria">
              <img
                src={Imagen1}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen2}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen3}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen4}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen5}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen6}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
            </div>
          </div>
        </section>
        <section className="imagen-light" onClick={ImagenAmplia}>
          <img src={ImagenClose} alt="" className="close" />
          <img src={Imagen1} alt="" className="agregar-imagen" />
        </section>
        <div className="contenedor1" id="expertos">
          <h2 className="subtitulo">Expertos en:</h2>
          <section className="experts">
            <div className="cont-expert">
              <img src={ImagenPieChart} alt="" />
              <h3 className="n-expert">Analytics</h3>
            </div>
            <div className="cont-expert">
              <img src={ImagenSearchEngine} alt="" />
              <h3 className="n-expert">Analytics</h3>
            </div>
            <div className="cont-expert">
              <img src={ImagenSecurity} alt="" />
              <h3 className="n-expert">Analytics</h3>
            </div>
          </section>
        </div>
      </main>
      <footer id="contacto">
        <div className="contenedor1 footer-content">
          <div className="contact-us">
            <h2 className="brand">Luis Design</h2>
            <p>Somos expertos en la creación de tus sueños</p>
          </div>
          <div className="social-media">
            <a href="./" className="social-media-icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="./" className="social-media-icon">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/expen.semanager?igshid=ZDdkNTZiNTM="
              className="social-media-icon"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="line"></div>
      </footer>
    </div>
  );
};

export default Conoce;