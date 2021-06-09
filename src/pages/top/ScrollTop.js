import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import TopTable from "./Table";
import Users from "../../components/users";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const ScrollTop = ({ cookies, users }) => {
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
                Estas en el puesto:
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
