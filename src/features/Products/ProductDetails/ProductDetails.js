import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";
import { useGetProductDetailsByIdQuery } from "../productsApi";
import AspectRatio from "@mui/joy/AspectRatio";
import { increment } from "../../ShoppingCart/ShoppingCartSlice";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionList from "./DescriptionList";
import ActionSelector from "./ActionSelector";

export function ProductDetails() {
  const { id } = useParams();
  const { data } = useGetProductDetailsByIdQuery(id);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid xs={12} sm={12} md={6} mt={1} mb={1}>
          <AspectRatio minHeight={120} maxHeight={"80vh"} ratio="4/5">
            <img src={data?.imgUrl} srcSet={data?.imgUrl} alt={data?.model} />
          </AspectRatio>
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={1}
        >
          <Grid xs={12} sm={12} md={6}>
            <Card sx={{ minWidth: "30vw" }}>
              <Typography variant="h6" sx={{ textAlign: "left" }} ml={2}>
                {t("description")}
              </Typography>
              <CardContent>
                <DescriptionList />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} mt={1} mb={1}>
            <Card sx={{ minWidth: "30vw" }}>
              <Typography variant="h6" sx={{ textAlign: "left" }} ml={2}>
                {t("actions")}
              </Typography>
              <CardContent>
                <Grid container mb={1}>
                  <ActionSelector data={data?.colors} title={t("color")} />
                  <ActionSelector
                    data={data?.internalMemory}
                    title={t("internalMemory")}
                  />
                </Grid>

                <Grid mt={2}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      dispatch(increment());
                    }}
                    startIcon={<ShoppingCartIcon />}
                  >
                    {t("addToCart")}
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} mt={1} mb={1}>
        <Button
          sx={{ minWidth: "30vw" }}
          variant="contained"
          size="large"
          onClick={() => nav(-1)}
        >
          {t("goback")}
        </Button>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
