import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFilm } from './useFilm'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  genre: {
    fontSize: 14
  },
  main:{
    minHeight:'70vh'
  }
}));

export default function Album() {
  const classes = useStyles();

  const {
    film
  } = useFilm();

  return (
    <React.Fragment>

      <main className={classes.main}>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Film layout
            </Typography>
          </Container>
        </div> */}
        <Container className={classes.cardGrid} maxWidth="md">
          {film.map((item, key) => {

            return (<>
              {/* End hero unit */}

              <Grid container spacing={3}>
                <Grid item xs>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://thumbs.dreamstime.com/b/film-reel-film-strip-isolated-white-background-95058729.jpg"
                      title={item.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title} <span className={classes.genre}>({item.genre})</span>
                        
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={8}>
                  {item.description}
                </Grid>
              </Grid>

            </>)
          })}
        </Container>
      </main>

    </React.Fragment>
  );
}