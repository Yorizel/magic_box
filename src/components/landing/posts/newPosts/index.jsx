import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import PostCard from '../small_post_card'
import React from 'react'
import useStyles from './style'
import PropTypes from 'prop-types'
function NewPosts({ posts }) {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <Grid
      direction={'row'}
      alignItems={'center'}
      justify={'center'}
      spacing={5}
      lg={12}
      md={12}
      container
      item
    >
      {responsive ? (
        <>
          <Grid item>
            <Typography className={classes.responsiveTitle}>
              Novos Posts
            </Typography>
          </Grid>
          <Grid
            spacing={5}
            direction={'row'}
            style={{ display: 'flex' }}
            xs={10}
            sm={10}
            alignContent={'center'}
            justify={'center'}
            container
            item
          >
            {posts.map((item) => (
              <Grid key={item.id} item>
                <PostCard data={item} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid
            direction={'column'}
            alignItems={'center'}
            justify={'center'}
            container
            item
          >
            <Grid
              spacing={5}
              direction={'column'}
              alignContent={'center'}
              alignItems={'center'}
              justify={'center'}
              container
              item
            >
              <Grid item>
                <Typography className={classes.title}>Novos Posts</Typography>
              </Grid>
              <Grid
                spacing={10}
                direction={'row'}
                alignContent={'center'}
                alignItems={'center'}
                justify={'center'}
                container
              >
                {posts.map((item) => (
                  <Grid key={item.id} item>
                    <PostCard data={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  )
}
NewPosts.propTypes = {
  posts: PropTypes.object,
}
export default NewPosts
