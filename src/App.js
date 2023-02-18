import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./app/NavBar";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import NotFound from "./app/404";
import { CircularProgress, Typography } from "@mui/material";

const styles = {
  center: {
    textAlign: "center",
    position: "absolute",
    top: { xs: "32%", md: "22%", lg: "32%" },
    left: { xs: "40%", md: "40%", lg: "45%" },
    transform: "translate(-50%, -50%)",
    color: "white",
  },
};

function App() {
  const { t } = useTranslation();
  // const {error, isLoading} =
  const error = false;
  const isLoading = false;

  return (
    <BrowserRouter>
      <Helmet>
        <title>{t("mainTitle")}</title>
      </Helmet>
      <div className="App">
        <NavBar />
        <Routes>
          {error ? (
            <Route
              exact
              path="/"
              element={
                <Typography variant="h1" component="h1" sx={styles.center}>
                  {t("error")}
                </Typography>
              }
            />
          ) : isLoading ? (
            <Route
              exact
              path="/"
              element={<CircularProgress sx={styles.center} size={150} />}
            />
          ) : (
            <Route exact path="/" element={<></>} />
          )}
          <Route exact path="/product/:id/*" element={<NotFound />} />
          <Route path="/product/:id" element={<></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
