import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  card: {
    width: 250,
  },
  cardTitle: {
    flexGrow: 1,
    color: "#5d4128",
  },
  cardSubtitle: {
    flexGrow: 1,
    color: "black",
  },
};

export function ProductCard(props) {
  const { id, model, brand, img, price } = props;
  const { t } = useTranslation();

  return (
    <Link to={"product/" + id}>
      <Card id={id} sx={styles.card}>
        <CardMedia component="img" image={img} height={400} alt={model} />
        <CardContent>
          <Typography variant="h5" component="div" sx={styles.cardTitle}>
            {model}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={styles.cardSubtitle}
          >
            {brand}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={styles.cardSubtitle}
          >
            {price == "" ? "-" : price} {t("currency")}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
