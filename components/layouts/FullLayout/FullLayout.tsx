import React from "react";
import dynamic from "next/dynamic";
import { Box, Container, makeStyles, Theme } from "@material-ui/core";

const SideDrawer = dynamic(import("../SideDrawer"));
const Footer = dynamic(import("../Footer"));

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    "& .wrapper": {
      width: "100%",
      height: "100%",
    },
  },
  content: {
    flexGrow: 1,
    padding: "24px 0",
    minHeight: "calc(100vh - 123px)",
    marginTop: 64,
  },
  toolbar: theme.mixins.toolbar,
}));

const FullLayout = (props: any) => {
  // const { display,fontsize } = useSelector((state: IStates) => state.globalReducer)
  const { children } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SideDrawer />
      <Box className="wrapper">
        <main className={classes.content}>
          <Container maxWidth="lg">{children}</Container>
        </main>
        <Footer />
      </Box>
    </Box>
  );
};

export default FullLayout;
