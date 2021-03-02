import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import image from '../../../../assets/mortalKombat.jpg'
import useStyles from './style'

export default function LargePostCard({data}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>


                        <Grid spacing={3} direction={'column'}  container>
                            <Grid  item>
                                <CardContent>
                                    <Typography className={classes.titleText}>
                                        {data.Title}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item>
                                <CardContent>
                                    <Typography className={classes.bodyText}>
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid justify={'space-around'} spacing={10} alignItems={'center'} container item>
                                <Grid item>
                                    <Typography className={classes.textDate}>
                                        {data.date}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <CardActions>
                                        <Typography className={classes.buttonText}>
                                            Leia mais
                                        </Typography>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <CardMedia
                                image={image} component={'img'}
                                className={classes.media}

                            />

                        </Grid>






        </Card>
    )
}