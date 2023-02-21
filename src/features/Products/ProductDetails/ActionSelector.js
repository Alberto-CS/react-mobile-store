import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ActionSelector(props) {
  const { data } = props;
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
    <Stack spacing={2} alignItems="center">
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
                {item}
              </ToggleButton>
            ))
          : null}
      </ToggleButtonGroup>
    </Stack>
  );
}
