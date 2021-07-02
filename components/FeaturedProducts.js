import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { allProducts } from '../data/data';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  homeContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  product: {
    marginRight: '1rem',
  },
  productPrice: {
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
    width: '100%',
  },
  link: {
    cursor: 'pointer',
  },
  type: {
    margin: '1rem',
  },
  bullets: {
    margin: '1rem 1rem 1rem 3rem',
  },
  services: {
    marginLeft: '3rem',
  },
});

export default function FeaturedProducts() {
  const router = useRouter();
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.type} color="primary" variant="h4">
        Welcome to Armstrong Welding and Fabrication!
      </Typography>
      <Typography className={classes.type} variant="subtitle1">
        Our website is currently a work in progress but feel free browse our
        Featured Products or{' '}
        <Link className={classes.link} onClick={() => router.push('/contact')}>
          Contact Us
        </Link>{' '}
        for a quote or more information below!
      </Typography>
      <div className={classes.homeContent}>
        <div>
          <Typography className={classes.type} variant="h4" color="primary">
            Featured Products
          </Typography>
          <div className={classes.container}>
            {allProducts.map((product) => (
              <Card key={product.name} className={classes.root}>
                <Image
                  src={product.img}
                  width="350"
                  height="250"
                  alt={product.name}
                />
                <CardContent>
                  <div className={classes.productPrice}>
                    <Typography
                      className={classes.product}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {product.price}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => window.open(product.offerLink, '_blank')}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Make an Offer
                  </Button>
                  <Button
                    onClick={() => window.open(product.secondaryLink, '_blank')}
                    variant="contained"
                    size="small"
                    color="secondary"
                  >
                    Visit Steinhauser's
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
        <div className={classes.services}>
          <Typography className={classes.type} variant="h4" color="primary">
            Featured Services
          </Typography>
          <Typography className={classes.type} variant="h5" color="primary">
            Wrought Iron Work
          </Typography>
          <Typography className={classes.bullets} variant="h6" color="primary">
            • Fences
          </Typography>
          <Typography className={classes.bullets} variant="h6" color="primary">
            • Entry Ways
          </Typography>
          <Typography className={classes.bullets} variant="h6" color="primary">
            • Staircases
          </Typography>
        </div>
      </div>
    </>
  );
}
