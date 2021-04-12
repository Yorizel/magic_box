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
      <Grid item>
        <Typography
          className={'text-5xl md:text-7xl'}
          classes={{ root: classes.responsiveText }}
        >
          Destaques
        </Typography>
      </Grid>
      <Grid item>
        <Carousel
          animation={'slide'}
          cycleNavigation={true}
          navButtonsAlwaysInvisible={true}
        >
          {responsive
            ? posts.map((item) => (
                <Grid key={item.id} item>
                  <PostCard data={item} />{' '}
                </Grid>
              ))
            : posts.map((item) => (
                <Grid key={item.id} item>
                  {' '}
                  <LargePostCard data={item} />
                </Grid>
              ))}
        </Carousel>
      </Grid>
    </Grid>
  )
}
PostsHighLights.propTypes = {
  posts: PropTypes.array,
}
export default PostsHighLights
