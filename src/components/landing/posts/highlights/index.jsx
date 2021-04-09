import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import PostCard from '../small_post_card'
import LargePostCard from '../large_post_card'
import React from 'react'
import useStyles from './style'
import PropTypes from 'prop-types'

function PostsHighLights({ posts }) {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const classes = useStyles()
  return (
    <Grid
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
      spacing={3}
      container
      item
    >
      {responsive ? (
        <>
          <Grid item>
            <Typography className={classes.responsiveText}>
              Destaques
            </Typography>
          </Grid>
          <Grid item>
            <Carousel
              animation={'slide'}
              cycleNavigation={true}
              className={classes.carousel}
              navButtonsAlwaysInvisible={responsive}
            >
              {posts.map((item) => (
                <Grid key={item.id} item>
                  <PostCard data={item} />{' '}
                </Grid>
              ))}
            </Carousel>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <Typography className={classes.title}>Destaques</Typography>
          </Grid>
          <Grid
            direction={'row'}
            alignItems={'center'}
            justify={'center'}
            spacing={3}
            container
            item
          >
            <Carousel
              animation={'slide'}
              cycleNavigation={true}
              navButtonsAlwaysInvisible={!responsive}
            >
              {posts.map((item) => (
                <Grid key={item.id} item>
                  {' '}
                  <LargePostCard data={item} />
                </Grid>
              ))}
            </Carousel>
          </Grid>
        </>
      )}
    </Grid>
  )
}
PostsHighLights.propTypes = {
  posts: PropTypes.array,
}
export default PostsHighLights
