import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import GetAppIcon from '@material-ui/icons/GetApp';
import BarChartIcon from '@material-ui/icons/BarChart';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function goTops() {
  window.location.href = "./top";
};

const ScrollComponent = ({ cookies }) => {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}> Bienvenido {cookies.get('username')} 😀</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>Sigue bajando✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="final-container" id="download">
              <div className="button-container">
                <a className="rgb" href="#" onClick={goTops}><span><BarChartIcon style={{ fontSize: 80 , marginTop: 80 }} /><p>Ir a tops</p></span></a>
              </div>
              <div className="break"></div>
              <div className="button-container">
                <a className="rgb" href="#"><span><GetAppIcon style={{ fontSize: 80 , marginTop: 80 }} /> <br />Descargar </span></a>
              </div>
            </div>
          </Animator>
      </ScrollPage>
    </ScrollContainer>
    );
  };
  
  export default ScrollComponent;

  

