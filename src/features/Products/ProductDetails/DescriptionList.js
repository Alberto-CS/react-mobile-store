import * as React from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { useGetProductDetailsByIdQuery } from "../productsApi";

export default function DescriptionList() {
  const { id } = useParams();
  const { data } = useGetProductDetailsByIdQuery(id);
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        marginLeft: { xs: "10px", sm: "10px" },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemText
            primary={t("brand")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.brand} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("model")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.model} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("price")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText
            primary={
              data?.price === ""
                ? "- " + t("currency")
                : data?.price + " " + t("currency")
            }
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("cpu")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.cpu} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("ram")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.ram} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("operativeSystem")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.os} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("screenResolution")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.displayResolution} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("battery")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.battery} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("camera")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          {data?.secondaryCmera !== "" ? (
            <ListItemText
              primary={t("firstCamera")}
              secondary={
                typeof data?.primaryCamera === "string"
                  ? data?.primaryCamera
                  : data?.primaryCamera.join(", ")
              }
            />
          ) : null}
          {data?.secondaryCmera !== "" ? (
            <ListItemText
              primary={t("secondCamera")}
              secondary={
                typeof data?.secondaryCmera === "string"
                  ? data?.secondaryCmera
                  : data?.secondaryCmera.join(", ")
              }
            />
          ) : null}
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("dimensions")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.dimentions} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={t("weight")}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
          <ListItemText primary={data?.weight + " gr"} />
        </ListItem>
      </List>
    </Box>
  );
}
