import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import useStyles from './style'
import { useHistory } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
function DesktopPostCard({ data }) {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Card className={classes.root}>
      <Grid spacing={2} direction={'column'} container>
        <Grid item>
          <CardContent>
            <Typography className={classes.titleText}>{data.Title}</Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardContent className={classes.content}>
            <Typography noWrap className={classes.bodyText}>
              {data?.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          justify={'space-between'}
          alignItems={'center'}
          style={{ marginTop: 'auto' }}
          container
          item
        >
          <Grid style={{ marginLeft: 20 }} item>
            <Typography className={classes.textDate}>{data.date}</Typography>
          </Grid>
          <Grid item>
            <CardActions>
              <Typography
                onClick={() => history.push('/post', { data })}
                className={classes.buttonText}
              >
                Leia mais
              </Typography>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
      <CardMedia
        image={data.image}
        component={'img'}
        className={classes.media}
      />
    </Card>
  )
}
DesktopPostCard.propTypes = {
  data: PropTypes.object,
}
export default DesktopPostCard
