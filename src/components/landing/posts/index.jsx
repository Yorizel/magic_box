import { Divider, Grid, useMediaQuery } from '@material-ui/core'
import bg from '../../../assets/homebg.png'
import React, { useState } from 'react'
import PostsHighLights from './highlights'
import NewPosts from './newPosts'

export default function Posts() {
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
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
      writer: 'Edgar Santos',
    },
    {
      id: 4,
      image: 'https://wallpaperaccess.com/full/4850883.png',
      Title: 'Snyder Cut',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
      writer: 'Edgar Santos',
    },
  ]

  const [posts] = useState(Data)
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('sm'))
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
      <PostsHighLights posts={posts} />
      <Divider />
      <NewPosts posts={posts} />
    </Grid>
  )
}
