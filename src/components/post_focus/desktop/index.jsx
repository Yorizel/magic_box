import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './style'
function DesktopPostFocus({ data }) {
  const classes = useStyles()
  return (
    <Grid
      className={classes.root}
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
      container
    >
      <Grid item>
        <img src={data.image} className={classes.img} alt={'ok'} />
      </Grid>
      <Grid item>
        <Typography className={classes.title}>{data.Title}</Typography>
      </Grid>
      <Grid
        spacing={3}
        justify={'center'}
        alignItems={'center'}
        direction={'row'}
        container
      >
        <Grid item>
          <Typography className={classes.writer}>
            {`Escrito por ${data.writer}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.date}>{data.date}</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.descriptionContainer} item>
        <Divider />

        <Typography className={classes.description}>
          {data.description}
        </Typography>
      </Grid>
    </Grid>
  )
}
DesktopPostFocus.propTypes = {
  data: PropTypes.object,
}
export default DesktopPostFocus
