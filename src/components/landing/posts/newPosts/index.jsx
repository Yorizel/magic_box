import { Grid, Typography } from '@material-ui/core'
import PostCard from '../small_post_card'
import React from 'react'
import useStyles from './style'
import PropTypes from 'prop-types'

function NewPosts({ posts }) {
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
              <Typography
                classes={{ root: classes.title }}
                className={'text-5xl xs:text-2xl md:text-7xl'}
              >
                Novos Posts
              </Typography>
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
    </Grid>
  )
}
NewPosts.propTypes = {
  posts: PropTypes.array,
}
export default NewPosts
