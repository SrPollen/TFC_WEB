import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import TopTable from "./Table";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const ScrollTop = ({ position, users }) => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                Aquí podrás ver los jugadores con mejores puntuaciones
              </span>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                Tu pósicion es la número <br/> 
                <span style={{ color: "#216ad6",  fontSize: "80px",}}>{ position }</span>

              </span>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <div className="table-container">
        <TopTable users={users} />
      </div>
    </div>
  );
};

export default ScrollTop;
