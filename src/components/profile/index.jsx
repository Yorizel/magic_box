import React, { useState } from 'react'
import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import DefaultAvatar from '../@global/avatar'
import NewPosts from '../landing/posts/newPosts'

function ProfileContent() {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
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
      id: 3,
      image:
        'https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2020/01/Tensei-Shitara-Slime-Datta-Ken.jpg',
      Title: 'Tensei Shitara',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
      writer: 'Edgar Santos',
    },
  ]

  const newArray = Data.slice(0, 3)
  const [posts] = useState(newArray)
  return (
    <Grid
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
      container
      spacing={6}
      style={{ padding: 30 }}
    >
      <Grid item>
        <DefaultAvatar
          fontSize={responsive ? '3.00rem' : '3.50rem'}
          size={responsive ? 150 : 200}
        />
      </Grid>
      <Grid item>
        <Typography style={{ fontSize: '1.80rem' }}>
          Redator chefe do magicbox
        </Typography>
      </Grid>
      <Grid style={{ width: '100vw' }} item>
        <NewPosts posts={posts} />
      </Grid>
    </Grid>
  )
}
export default ProfileContent
