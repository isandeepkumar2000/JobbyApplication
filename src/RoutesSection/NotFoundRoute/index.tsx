import JobbyHeader from "../Header";
import {
  ErrorInfo,
  GoHomeBtn,
  NotFoundContainer,
  NotFoundInfoContainer,
  TextDanger,
} from "./stylecomponets";

const NotFound = (props: any) => {
  const { history } = props;

  const onClickOfGoHome = () => {
    history.replace("/");
  };

  return (
    <NotFoundContainer className="not-found-container">
      <JobbyHeader />
      <NotFoundInfoContainer className="not-found-info-container">
        <TextDanger className="text-danger">404 - Page Not Found</TextDanger>
        <ErrorInfo className="error-info">
          Uh oh, we can't seem to find the page you're looking for.Try going
          back or to Home.
        </ErrorInfo>

        <GoHomeBtn className="go-home-btn" onClick={onClickOfGoHome}>
          Go Home
        </GoHomeBtn>
      </NotFoundInfoContainer>
    </NotFoundContainer>
  );
};

export default NotFound;
