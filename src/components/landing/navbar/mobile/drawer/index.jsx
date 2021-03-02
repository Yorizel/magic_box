import {
    Avatar,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Typography,
    ListItemIcon,
    ListItem,
    Collapse,
    List,
    ListItemText,
} from '@material-ui/core'
import { ExitToApp, ExpandLess, ExpandMore, Home, Instagram, Search, ViewHeadline } from '@material-ui/icons'
import image from '../../../../../assets/avatar.jpg'
import useStyles from './style'
import { useState } from 'react'
import { BackstageIcon, HeadshotIcon, HeroesIcon, ShinobiIcon } from '../../../../../assets'

export default function MobileDrawer() {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
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
            <Grid direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <IconButton>
                        <Search />
                    </IconButton>
                </Grid>
                <Grid item>
                    <InputBase
                        placeholder={'Pesquise aqui'}
                    />
                </Grid>
            </Grid>
            <Divider />
            <Grid alignItems={'flex-start'} direction={'column'} spacing={1} justify={'space-evenly'} container>


                <Grid item>

                    <IconButton onClick={() => setOpen(!open)}>
                        <ViewHeadline/>
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
                    <IconButton>
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