import {
    Avatar,
    Collapse,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
} from '@material-ui/core'
import { ExitToApp, ExpandLess, ExpandMore, Home, Instagram, Search, ViewHeadline } from '@material-ui/icons'
import image from '../../../../../assets/avatar.jpg'
import useStyles from './style'
import { useState } from 'react'
import { BackstageIcon, HeadshotIcon, HeroesIcon, ShinobiIcon } from '../../../../../assets'
import { Autocomplete } from '@material-ui/lab'

export default function MobileDrawer() {
    const [open, setOpen] = useState(false)
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
    return (
        <>
            <Grid direction={'column'} justify={'center'} alignItems={'center'} className={classes.root} container>
                <Grid item>
                    <Avatar src={image} className={classes.avatar} />
                </Grid>
                <Grid item>
                    <Typography className={classes.avatarTitle}>
                        Edgar Santos
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid direction={'row'}  justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <IconButton>
                        <Search />
                    </IconButton>
                </Grid>
                <Grid style={{width: '60vw'}} item>
                    <Autocomplete
                        style={{width: '90%'}}
                        id='free-solo-demo'
                        freeSolo
                        renderInput={
                            (params) =>
                                (<TextField
                                    {...params}
                                    placeholder={'Pesquise aqui'}
                                />)}
                        options={Data.map((option) => option.Title)} />
                </Grid>
            </Grid>
            <Divider />
            <Grid alignItems={'flex-start'} direction={'column'} spacing={1} justify={'space-evenly'} container>


                <Grid item>

                    <IconButton onClick={() => setOpen(!open)}>
                        <ViewHeadline />
                        <Typography className={classes.textButton}>
                            Seções
                        </Typography>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>

                    <Collapse in={open} timeout='auto' unmountOnExit>
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
                    </Collapse>


                </Grid>
                <Grid item>
                    <IconButton>
                        <Home />
                        <Typography className={classes.textButton}>
                            Home
                        </Typography>
                    </IconButton>


                </Grid>
                <Grid item>
                    <IconButton  href={'https://www.instagram.com/magicbox.tv/'}>
                        <Instagram />
                        <Typography className={classes.textButton}>
                            Instagram
                        </Typography>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <ExitToApp />
                        <Typography className={classes.textButton}>
                            Logout
                        </Typography>
                    </IconButton>
                </Grid>
            </Grid>

        </>
    )
}