import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: "16em",
  },
});

const Welcome: FC = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image="https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/description-bg_vrat9r.jpg"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Easyway класическа сугестопедия
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button href="/">
          <HomeIcon style={{ paddingRight: "0.5em" }} />
          Уеб сайт
        </Button>
      </CardActions>
    </Card>
  );
};

export default Welcome;
