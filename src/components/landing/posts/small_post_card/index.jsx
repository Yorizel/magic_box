import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import image from '../../../../assets/mortalKombat.jpg'
import useStyles from './style'

export default function PostCard({data}) {
    const classes = useStyles()
    return (

        <>
            <Card className={classes.root}>
                <Grid direction={'column'} alignItems={'flex-start'} container>
                    <Grid style={{ maxHeight: '30%' }} item>
                        <CardMedia
                            image={image} component={'img'}
                            className={classes.media}

                        />

                    </Grid>
                    <Grid item>
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
                    <Grid justify={'space-around'} alignItems={'center'} container item>
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
            </Card>

        </>
    )
}