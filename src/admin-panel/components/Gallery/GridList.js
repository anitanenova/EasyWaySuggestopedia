import React from "react";
import MuiGridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import { Link } from "react-router-dom";
import { linkToRecord } from "ra-core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "-2px",
  },
  gridList: {
    width: "100%",
    margin: 0,
  },
  tileBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)",
  },
  placeholder: {
    backgroundColor: theme.palette.grey[300],
    height: "100%",
  },
  price: {
    display: "inline",
    fontSize: "1em",
  },
  link: {
    color: "#fff",
  },
}));

const getColsForWidth = (width) => {
  if (width === "xs") return 2;
  if (width === "sm") return 3;
  if (width === "md") return 4;
  if (width === "lg") return 5;
  return 6;
};

const times = (nbChildren, fn) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = ({ width, nbItems = 20 }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiGridList
        cellHeight={180}
        cols={getColsForWidth(width)}
        className={classes.gridList}
      >
        {" "}
        {times(nbItems, (key) => (
          <GridListTile key={key}>
            <div className={classes.placeholder} />
          </GridListTile>
        ))}
      </MuiGridList>
    </div>
  );
};

const LoadedGridList = ({ ids, data, basePath, width }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiGridList
        cellHeight={180}
        cols={getColsForWidth(width)}
        className={classes.gridList}
      >
        {ids.map((id) => (
          <GridListTile
            component={Link}
            key={id}
            to={linkToRecord(basePath, data[id].id)}
          >
            <img src={data[id].image} alt="" />
          </GridListTile>
        ))}
      </MuiGridList>
    </div>
  );
};

const GridList = ({ loaded, ...props }) => {
  return loaded ? (
    <LoadedGridList {...props} />
  ) : (
    <LoadingGridList {...props} />
  );
};

export default withWidth()(GridList);
