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

export default function PostCard({ data }) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <Card style={{ display: 'flex' }} className={classes.root}>
                <Grid
                    direction={'column'}
                    alignItems={'flex-start'}
                    alignContent={'center'}
                    justify={'center'}
                    container
                >
                    <Grid item>
                        <CardMedia
                            image={data.image}
                            component={'img'}
                            className={classes.media}
                            style={{ objectFit: 'cover', maxHeight: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <CardContent>
                            <Typography className={classes.titleText}>
                                {data.Title}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid
                        style={{
                            maxWidth: '90%',
                        }}
                        item
                    >
                        <CardContent className={classes.content}>
                            <Typography noWrap className={classes.bodyText}>
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid
                        justify={'space-around'}
                        alignItems={'center'}
                        container
                        style={{ marginTop: 'auto' }}
                    >
                        <Grid item>
                            <Typography className={classes.textDate}>
                                {data.date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CardActions>
                                <Typography
                                    onClick={() =>
                                        history.push('/post', { data })
                                    }
                                    className={classes.buttonText}
                                >
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
