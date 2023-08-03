import React, { useState } from "react";
import Layout from "./layout";
import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@mui/material";
import { Card, Button, Link } from "@nextui-org/react";
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CharacterCards(props) {
  const { characters } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Characters
      </Typography>

      <Box sx={{ width: "100%" }}>
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
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Main Characters" {...a11yProps(0)} />
            <Tab label="Supporting Characters" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {characters &&
              characters
                .filter((character) => character.role === "Main Characters")
                .map((character) => (
                  <Grid key={character.index} item xs={12} md={6}>
                    <Card isPressable isHoverable variant="bordered">
                      <Accordion>
                        <AccordionSummary>
                          <Image
                            src={character.image}
                            height={character.image_height}
                            width={character.image_width}
                            style={{
                              margin: "auto",
                              borderRadius: "5px",
                            }}
                            alt={character.name}
                          />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="h6">{character.name}</Typography>
                          <Card.Divider />
                          <Card.Body css={{ textAlign: "center" }}>
                            {character.description}
                          </Card.Body>
                          <Card.Divider />
                          <Card.Footer>
                            <Button
                              bordered
                              color="gradient"
                              borderWeight
                              size="xs"
                              auto
                              ghost
                              css={{ margin: "auto" }}
                            >
                              <Link
                                href={character.link}
                                className="buttonLink"
                              >
                                Learn More →
                              </Link>
                            </Button>
                          </Card.Footer>
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </TabPanel>

        {/* Render the character cards for Supporting Characters */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            {characters &&
              characters
                .filter(
                  (character) => character.role === "Supporting Characters"
                )
                .map((character) => (
                  <Grid key={character.index} item xs={12} md={6}>
                    <Card isPressable isHoverable variant="bordered">
                      <Accordion>
                        <AccordionSummary>
                          <Image
                            src={character.image}
                            height={character.image_height}
                            width={character.image_width}
                            style={{
                              margin: "auto",
                              borderRadius: "5px",
                            }}
                            alt={character.name}
                          />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="h6">{character.name}</Typography>
                          <Card.Divider />
                          <Card.Body css={{ textAlign: "center" }}>
                            {character.description}
                          </Card.Body>
                          <Card.Divider />
                          <Card.Footer>
                            <Button
                              bordered
                              color="gradient"
                              borderWeight
                              size="xs"
                              auto
                              ghost
                              css={{ margin: "auto" }}
                            >
                              <Link
                                href={character.link}
                                className="buttonLink"
                              >
                                Learn More →
                              </Link>
                            </Button>
                          </Card.Footer>
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </TabPanel>
      </Box>
    </Layout>
  );
}
