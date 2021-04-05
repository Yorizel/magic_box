import { InputAdornment, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'

export default function SearchBar() {
  const Data = [
    {
      id: 1,
      image:
        'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/20201126-godzilla-kong-2021-sera.jpg',
      Title: 'KingKong VS Godzilla',
      description: 'asdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/8Tk8sqXlogM/maxresdefault.jpg',
      Title: 'Mortal Kombat',
      description: 'asdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
    },
    {
      id: 3,
      image:
        'https://animesonehd.xyz/wp-content/uploads/2020/12/tensei-shitara-2-online-em-HD.png',
      Title: 'Tensei Shitara',
      description: 'asdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020',
    },
  ]
  const DefaultInput = (params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        type: 'search',
        startAdornment: (
          <InputAdornment position={'start'}>
            <Search />
          </InputAdornment>
        ),
      }}
      placeholder={'Pesquise aqui'}
    />
  )
  return (
    <Autocomplete
      id='searchBar'
      freeSolo
      renderInput={(params) => <DefaultInput {...params} />}
      options={Data.map((option) => option.Title)}
    />
  )
}
