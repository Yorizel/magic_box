import { Divider, Grid, Typography } from '@material-ui/core'

export default function MobilePostFocus({ data }) {
    return (
        <Grid
            style={{ marginTop: 15 }}
            direction={'column'}
            alignItems={'center'}
            justify={'center'}
            container
        >
            <Grid item>
                <img
                    src={data.image}
                    style={{
                        height: '30vh',
                        width: '90vw',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        borderRadius: 15,
                    }}
                    alt={'ok'}
                />
            </Grid>
            <Grid item>
                <Typography style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>
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
                    <Typography
                        style={{ fontSize: '1.15rem', fontWeight: 'bold' }}
                    >
                        {`Escrito por ${data.writer}`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography style={{ fontSize: '1.10rem' }}>
                        {data.date}
                    </Typography>
                </Grid>
            </Grid>

            <Grid style={{ maxWidth: '90%' }} item>
                <Divider />

                <Typography
                    style={{
                        wordBreak: 'break-word',
                        marginTop: 15,
                        fontSize: '1.25rem',
                    }}
                >
                    {data.description}
                </Typography>
            </Grid>
        </Grid>
    )
}
