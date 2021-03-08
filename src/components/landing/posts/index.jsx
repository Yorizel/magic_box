import { Grid, Typography } from '@material-ui/core'
import PostCard from './small_post_card'
import LargePostCard from './large_post_card'
import { useResponsive } from '../../../hooks/useResponsive'
import Carousel from 'react-material-ui-carousel'
import ReactElasticCarousel from 'react-elastic-carousel'

import useStyles from './style'
import bg from '../../../assets/homebg.png'

export default function Posts() {
    const { responsive } = useResponsive()
    const classes = useStyles()
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 5 },
    ]
    const highlights = [{
        id: 1,
        Title: 'mEste é um destaque',
        description: 'asdfasdfasdfasdfasdfasd',
        date: '15 de maio 2020',
    },
        {
            id: 2,
            Title: 'mEste é um destaque2',
            description: 'asdfasdfasdfasdfasdfasd',
            date: '15 de maio 2020',
        }]
    const posts = [{ id: 1, Title: 'Teste 1', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 2, Title: 'Teste 2', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 3, Title: 'Teste 3', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 4, Title: 'teste 4', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 5, Title: 'TEste 5', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' }]


    return (
        <Grid container spacing={10} alignItems={'center'} justify={'center'} component={'div'}>
            {responsive ? null : <img src={bg} alt={'the end'} style={{ marginTop: 30 }} />}

            <Grid direction={'column'} alignItems={'center'} justify={'center'} spacing={3} container item>
                {responsive ?
                    <>
                        <Grid item>
                            <Typography style={{
                                fontSize: '2.35rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.30rem',
                                fontFamily: 'GlacialIndifferenceRegular',
                            }}>
                                Destaques
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Carousel animation={'slide'} cycleNavigation={true} navButtonsAlwaysInvisible={responsive}>
                                {highlights.map((item) => <Grid key={item.id} item><PostCard data={item} /> </Grid>)}
                            </Carousel>
                        </Grid>

                    </>

                    :
                    <>
                        <Grid item>
                            <Typography style={{
                                fontSize: '4.00rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.50rem',
                                fontFamily: 'GlacialIndifferenceRegular',
                            }}>
                                Destaques
                            </Typography>
                        </Grid>
                        <Grid direction={'row'} alignItems={'center'} justify={'center'} spacing={3} container item>

                            <Carousel animation={'slide'} cycleNavigation={true}
                                      navButtonsAlwaysInvisible={!responsive}>
                                {highlights.map((item) => <Grid key={item.id} item> <LargePostCard
                                    data={item} /></Grid>)}
                            </Carousel>

                        </Grid>
                    </>}
            </Grid>


            <Grid direction={'column'} alignItems={'center'} justify={'center'} spacing={3}
                  container item>
                {responsive ?
                    <>
                        <Grid item>
                            <Typography style={{
                                fontSize: '2.35rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.30rem',
                                fontFamily: 'GlacialIndifferenceRegular',
                            }}>
                                Novos Posts
                            </Typography>
                        </Grid>
                        <Carousel animation={'slide'} cycleNavigation={true} navButtonsAlwaysInvisible={responsive}>
                            {posts.map((item) => <Grid key={item.id} item><PostCard data={item} /> </Grid>)}
                        </Carousel>
                    </>

                    :
                    <>

                        <Grid item>
                            <Typography style={{
                                fontSize: '4.00rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.50rem',
                                fontFamily: 'GlacialIndifferenceRegular',
                            }}>
                                Novos Posts
                            </Typography>
                        </Grid>
                        <ReactElasticCarousel easing={'ease-in'} className={classes.carousel} breakPoints={breakPoints}
                                              enableAutoPlay={true}
                                              showArrows={false} autoPlaySpeed={2000} isRTL={false}>

                            {posts.map((item) =>


                                <PostCard key={item.id} data={item} />,
                            )}

                        </ReactElasticCarousel>
                    </>

                }

            </Grid>
        </Grid>


    )
}