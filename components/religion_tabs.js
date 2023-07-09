import { Tabs, Tab, Typography, Box } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ReligionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="basic tabs"
        textColor="none"
        indicatorColor="none"
      >
        <Tab label="Maesters" href={`/maesters/`} />
        <Tab label="Summoners" href={`/summoners/`} />
        <Tab label="Aeons" href={`/aeons/`} />
      </Tabs>
    </Box>
  );
}
