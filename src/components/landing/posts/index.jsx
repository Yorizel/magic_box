import { Divider, Grid, Typography, useMediaQuery } from '@material-ui/core'
import PostCard from './small_post_card'
import LargePostCard from './large_post_card'
import Carousel from 'react-material-ui-carousel'
import DesktopPostCard from './desktop_card'
import useStyles from './style'
import bg from '../../../assets/homebg.png'
import { useState } from 'react'

export default function Posts() {
    const responsive = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const classes = useStyles()
    const Data = [
        {
            id: 1,
            image:
                'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/20201126-godzilla-kong-2021-sera.jpg',
            Title: 'KingKong VS Godzilla',
            description:
                'sdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasddasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasdadasdfasdfasdfasdfasdfasda',
            date: '15 de maio 2020',
            writer: 'Edgar Santos',
        },
        {
            id: 2,
            image: 'https://i.ytimg.com/vi/8Tk8sqXlogM/maxresdefault.jpg',
            Title: 'Mortal Kombat',
            description:
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf',
            date: '15 de maio 2020',
            writer: 'Edgar Santos',
        },
        {
            id: 3,
            image:
                'https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2020/01/Tensei-Shitara-Slime-Datta-Ken.jpg',
            Title: 'Tensei Shitara',
            description: 'asdfasdfasdfasdfasdfasd',
            date: '15 de maio 2020',
            writer: 'Edgar Santos',
        },
    ]

    const highlights = [
        {
            id: 1,
            image:
                'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/20201126-godzilla-kong-2021-sera.jpg',
            Title: 'KingKong VS Godzilla',
            description:
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf' +
                'asdfasdfasdfasdfasdfasdaaishdbflkajshdlfouahsldioufhalçosiudhfçoasdf',
            date: '15 de maio 2020',
            writer: 'Edgar Santos',
        },
    ]
    const [posts] = useState(Data)
    return (
        <Grid
            container
            spacing={10}
            alignItems={'center'}
            justify={'center'}
            component={'div'}
        >
            {responsive ? null : (
                <img src={bg} alt={'the end'} style={{ marginTop: 100 }} />
            )}

            <Grid
                direction={'column'}
                alignItems={'center'}
                justify={'center'}
                spacing={3}
                container
                item
            >
                {responsive ? (
                    <>
                        <Grid item>
                            <Typography
                                style={{
                                    fontSize: '2.40rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.30rem',
                                    fontFamily: 'GlacialIndifferenceRegular',
                                }}
                            >
                                Destaques
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Carousel
                                animation={'slide'}
                                cycleNavigation={true}
                                className={classes.carousel}
                                navButtonsAlwaysInvisible={responsive}
                            >
                                {highlights.map((item) => (
                                    <Grid key={item.id} item>
                                        <PostCard data={item} />{' '}
                                    </Grid>
                                ))}
                            </Carousel>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item>
                            <Typography
                                style={{
                                    fontSize: '4.00rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.50rem',
                                    fontFamily: 'GlacialIndifferenceRegular',
                                }}
                            >
                                Destaques
                            </Typography>
                        </Grid>
                        <Grid
                            direction={'row'}
                            alignItems={'center'}
                            justify={'center'}
                            spacing={3}
                            container
                            item
                        >
                            <Carousel
                                animation={'slide'}
                                cycleNavigation={true}
                                navButtonsAlwaysInvisible={!responsive}
                            >
                                {highlights.map((item) => (
                                    <Grid key={item.id} item>
                                        {' '}
                                        <LargePostCard data={item} />
                                    </Grid>
                                ))}
                            </Carousel>
                        </Grid>
                    </>
                )}
            </Grid>

            <Grid
                direction={'row'}
                alignItems={'center'}
                justify={'center'}
                spacing={5}
                container
                item
            >
                {responsive ? (
                    <>
                        <Grid item>
                            <Typography
                                style={{
                                    fontSize: '2.35rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.30rem',
                                    fontFamily: 'GlacialIndifferenceRegular',
                                }}
                            >
                                Novos Posts
                            </Typography>
                        </Grid>
                        <Grid
                            spacing={5}
                            direction={'column'}
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
                            style={{ display: 'flex' }}
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
                                        style={{
                                            fontSize: '4.00rem',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.50rem',
                                            fontFamily:
                                                'GlacialIndifferenceRegular',
                                        }}
                                    >
                                        Novos Posts
                                    </Typography>
                                </Grid>
                                {posts.map((item) => (
                                    <Grid key={item.id} item>
                                        <DesktopPostCard data={item} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
            <Divider />
        </Grid>
    )
}
