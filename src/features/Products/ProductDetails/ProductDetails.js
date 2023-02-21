import React from "react";
import { useParams } from "react-router";
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

export function ProductDetails() {
  const { id } = useParams();
  const { data } = useGetProductDetailsByIdQuery(id);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  console.log(data)

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid xs={12} sm={6} mt={2} mb={2}>
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
          mt={2}
          mb={2}
        >
          <Grid xs={12} sm={6} mt={2} mb={2}>
            <Card sx={{ minWidth: "30vw" }}>
              <CardContent>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("brand")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.brand}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("model")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.model}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("price")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.price === "" ? "-" : data?.price} {t("currency")}{" "}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("cpu")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.cpu}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("ram")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.ram}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("operativeSystem")}:
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.os}{" "}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("screenResolution")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.displayResolution}
                  </Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("battery")}:{" "}
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.battery}
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  xs
                >
                  <Grid xs={4}>
                    <Typography variant="h5">{t("camera")}:</Typography>
                  </Grid>
                  <Grid xs={8}>
                    <Grid xs>
                      <Typography variant="body1">
                        {data?.primaryCamera}
                      </Typography>
                    </Grid>
                    <Grid xs>
                      <Typography variant="body1">
                        {data?.secondaryCamera}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs>
                  <Typography variant="h5">{t("dimensions")}:</Typography>
                </Grid>
                <Grid xs>
                  <Typography variant="h5" display="inline">
                    {t("weight")}:
                  </Typography>
                  <Typography variant="body1" display="inline">
                    {data?.weight}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} mt={2} mb={2}>
            <Card sx={{ minWidth: "30vw" }}>
              <CardContent>
                <Grid>Almacenamiento</Grid>
                <Grid>Colores</Grid>
                <Grid>
                  <Button
                    onClick={() => {
                      dispatch(increment());
                    }}
                  >
                    Añadir a la cesta
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
