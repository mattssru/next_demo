import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">Footer</Container>
    </Box>
  );
};

export default Footer;
