import {
    Avatar,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    TextField,
    Tooltip,
    Typography,
} from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import { ExpandLess, ExpandMore, Search } from '@material-ui/icons'
import useStyles from './style'
import image from '../../../../assets/avatar.jpg'
import { BackstageIcon, HeadshotIcon, HeroesIcon, ShinobiIcon } from '../../../../assets'
import { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'

export default function DesktopNavbar() {
    const classes = useStyles()
    const Data = [
        {
            id: 1,
            image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/20201126-godzilla-kong-2021-sera.jpg',
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
            image: 'https://animesonehd.xyz/wp-content/uploads/2020/12/tensei-shitara-2-online-em-HD.png',
            Title: 'Tensei Shitara',
            description: 'asdfasdfasdfasdfasdfasd',
            date: '15 de maio 2020',
        },

    ]

    const [anchor, setAnchor] = useState(null)
    return (
        <>
            <Grid spacing={2} direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <img alt={'deu ruim'} src={Logo} className={classes.logoImage} />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoText}>
                        MagicBox
                    </Typography>
                </Grid>
            </Grid>
            <Grid direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <IconButton>
                        <Search />
                    </IconButton>
                </Grid>
                <Grid style={{ width: '80%', maxWidth: 300 }} item>
                    <Autocomplete id='searchBar'  freeSolo renderInput={(params) => (

                        <TextField
                            {...params}
                            placeholder={'Pesquise aqui'}
                        />)} options={Data.map((option) => option.Title)} />

                </Grid>
            </Grid>
            <Grid alignItems={'center'} justify={'center'} spacing={5} container>
                <Grid item>
                    <Typography className={classes.textButton}>
                        Home
                    </Typography>
                </Grid>
                <Grid item>

                    <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
                        <Typography className={classes.textButton}>
                            Seções
                        </Typography>
                        {Boolean(anchor) ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                    <Menu open={Boolean(anchor)}
                          PaperProps={{
                              style:
                                  {
                                      left: '50%',
                                      transform: 'translateX(5%) translateY(15%)',
                                  } }}
                          onClose={() => setAnchor(null)}
                          anchorEl={anchor}>
                        <List style={{ paddingLeft: 3 }} component='div' disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src={HeroesIcon} alt={'deu ruim'} className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textButton}>
                                        Heroes
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src={HeadshotIcon} alt={'deu ruim'} className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textButton}>
                                        Headshot
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src={BackstageIcon} alt={'deu ruim'} className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textButton}>
                                        Backstage
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src={ShinobiIcon} alt={'deu ruim'} className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textButton}>
                                        Shinobi
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Menu>


                </Grid>

                <Grid item>
                    <Tooltip title={'Edgar Santos'}>
                        <Avatar src={image} className={classes.avatar} />
                    </Tooltip>

                </Grid>
            </Grid>

        </>
    )
}