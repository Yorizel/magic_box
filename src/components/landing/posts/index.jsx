import { Grid } from '@material-ui/core'
import PostCard from './small_post_card'
import LargePostCard from './large_post_card'
import { useResponsive } from '../../../hooks/useResponsive'
import { useEffect } from 'react'

export default function Posts() {
    const { responsive, setResponsive } = useResponsive()
    const posts = [{ id: 1, Title: 'mortal kombat', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 2, Title: 'mortal kombat', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 3, Title: 'mortal kombat', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 4, Title: 'mortal kombat', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' },
        { id: 5, Title: 'mortal kombat', description: 'asdfasdfasdfasdfasdfasd', date: '15 de maio 2020' }]




    return (

        <Grid direction={'row'} alignItems={'center'} justify={'center'} spacing={3} style={{ minHeight: '100%' }}
              container>
            {posts.map((item) => <Grid key={item.id} item><PostCard data={item} /> </Grid>)}





        </Grid>


    )
}