import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";

const styles = {
  navbar: {
    backgroundColor: "primary",
    height: "10vh",
  },
  navbarItem: {
    textDecoration: "none",
    flexGrow: 1,
    color: "white",
  },
};

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("es")
      : i18n.changeLanguage("en");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navbar} position="static">
        <Toolbar>
          {location?.pathname == "/" ? (
            <Typography
              variant="h5"
              component={Link}
              to={"/"}
              sx={styles.navbarItem}
            >
              {t("mainTitle")}
            </Typography>
          ) : (
            <Breadcrumbs aria-label="breadcrumb" sx={styles.navbarItem}>
              <Link underline="hover" color="inherit" href="/">
                <Typography
                  variant="h5"
                  component={Link}
                  to={"/"}
                  sx={styles.navbarItem}
                >
                  {t("mainTitle")}
                </Typography>
              </Link>
              <Typography color="text.primary" sx={styles.navbarItem}>
                {location?.pathname.split("/").slice(-1)}
              </Typography>
            </Breadcrumbs>
          )}

          <TranslateIcon onClick={changeLanguage} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
