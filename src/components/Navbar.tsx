import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent, ReactNode } from "react";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  style: {
    backgroundColor: "#00addb",
    maxHeight: "10vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.5",
  },
  grow: {
    flexGrow: 2,
  },
  title: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

type NavbarProps = {
  searchBar: ReactNode;
};

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.style}>
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            <Link href="/" className={classes.link}>
              Prisjakt deals
            </Link>
          </Typography>
          {props.searchBar}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
