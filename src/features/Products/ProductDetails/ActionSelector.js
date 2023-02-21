import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Container } from "@mui/material";

export default function ActionSelector(props) {
  const { data, title } = props;
  const [option, setOption] = useState(data?.[0]);

  useEffect(() => {
    if (data) {
      setOption(data?.[0]);
    }
  }, [data]);

  const handleChange = (event, newOption) => {
    if (newOption !== null) {
      setOption(newOption);
    }
  };

  const control = {
    value: option,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Container>
      <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
        {title}
      </Typography>
      <Stack spacing={1} alignItems="center" sx={{ display: "flex" }}>
        <ToggleButtonGroup size="small" {...control} aria-label="Medium sizes">
          {data
            ? data.map((item) => (
                <ToggleButton
                  value={item}
                  key={item}
                  sx={{
                    margin: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.12) !important",
                  }}
                >
                  {item === " " ? "N/A" : item}
                </ToggleButton>
              ))
            : null}
        </ToggleButtonGroup>
      </Stack>
    </Container>
  );
}
