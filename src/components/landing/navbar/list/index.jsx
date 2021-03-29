import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core'
import {
    BackstageIcon,
    HeadshotIcon,
    HeroesIcon,
    ShinobiIcon,
} from '../../../../assets'
import useStyles from '../desktop/style'

export default function MenuList() {
    const classes = useStyles()
    return (
        <List style={{ paddingLeft: 15 }} component="div" disablePadding>
            <ListItem button>
                <ListItemIcon>
                    <img
                        src={HeroesIcon}
                        alt={'deu ruim'}
                        className={classes.icon}
                    />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.textButton}>
                        Heroes
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <img
                        src={HeadshotIcon}
                        alt={'deu ruim'}
                        className={classes.icon}
                    />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.textButton}>
                        Headshot
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <img
                        src={BackstageIcon}
                        alt={'deu ruim'}
                        className={classes.icon}
                    />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.textButton}>
                        Backstage
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <img
                        src={ShinobiIcon}
                        alt={'deu ruim'}
                        className={classes.icon}
                    />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.textButton}>
                        Shinobi
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    )
}
