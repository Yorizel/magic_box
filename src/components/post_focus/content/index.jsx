import React from 'react'
import { Divider, Grid, Typography, useMediaQuery } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './style'

function PostFocusContent({ data }) {
  const classes = useStyles()
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  return (
    <Grid
      className={'mt-4 overflow-hidden'}
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
      container
      spacing={4}
    >
      <Grid item>
        <img
          src={data.image}
          className={responsive ? classes.img : classes.desktopImg}
          alt={'ok'}
        />
      </Grid>
      <Grid item>
        <Typography className={'text-5xl md:text-6xl font-bold'}>
          {data.Title}
        </Typography>
      </Grid>
      <Grid
        spacing={3}
        justify={'center'}
        alignItems={'center'}
        direction={'row'}
        container
      >
        <Grid item>
          <Typography className={'font-bold text-xl md:text-2xl'}>
            {`Escrito por ${data.writer}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={'text-lg md:text-xl'}>{data.date}</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.descriptionContainer} item>
        <Divider />

        <Typography className={'break-words text-lg md:text-xl mt-4'}>
          {data.description}
        </Typography>
      </Grid>
    </Grid>
  )
}
PostFocusContent.propTypes = {
  data: PropTypes.object,
}
export default PostFocusContent
