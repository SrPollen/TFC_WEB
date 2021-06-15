import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import GetAppIcon from '@material-ui/icons/GetApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import LogoImage from "../../resources/logo.png";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const ScrollComponent = ({ cookies }) => {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}> ¡Bienvenid@ <span style={{ color: "#216ad6" }}>{cookies.get('username')}</span>! 😀</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <div style={{display: "flex",justifyContent: "center", alignItems: "center",height: "100%"}}>
              <span style={{ fontSize: "40px", textAlign: "center" }}>¡Gracias por probar el acceso anticipado de <span style={{ color: "#216ad6" }}>FIREWAVE <img alt="logo" src={LogoImage} width="30"/></span>!</span>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <div style={{display: "flex",justifyContent: "center", alignItems: "center",height: "100%",}}>
              <span style={{ fontSize: "40px", textAlign: "center" }}>Un proyecto personal realizado con ilusión para <span style={{ color: "#216ad6" }}>vosotros jugadores</span>.</span>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "30px" }}>
              <Animator animation={MoveIn(-1000, 0)}><span style={{ fontSize: "40px" }}>En esta página web podrás encontrar:</span></Animator>
              <Animator animation={MoveIn(1000, 0)}>🔵 Tus datos personales en  <a className="link" href="./account" >PERFIL</a></Animator> 🔵 Información de otros jugadores en <a className="link" href="./top" >TOPS</a>
              <Animator animation={MoveOut(1000, 0)}>🔵 DESCARGA del videojuego 🎮</Animator>
              <Animator animation={MoveOut(-1000, 0)}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                  <span style={{ fontSize: "40px", textAlign: "center" }}>¡Hasta otra 💙!</span>
                </div>
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="final-container" id="download">
              <div className="button-container">
                <a className="rgb" href="./top" ><span><BarChartIcon style={{ fontSize: 80 , marginTop: 80 }} /><p>Ir a tops</p></span></a>
              </div>
              <div className="break"></div>
              <div className="button-container">
                <a href="/images/user.png" download className="rgb"><span><GetAppIcon style={{ fontSize: 80 , marginTop: 80 }} /> <br />Descargar </span></a>
              </div>
            </div>
          </Animator>
      </ScrollPage>
    </ScrollContainer>
    );
  };
  
  export default ScrollComponent;

  

