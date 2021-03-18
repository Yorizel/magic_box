import { Divider, Grid, IconButton } from '@material-ui/core'
import { Instagram } from '@material-ui/icons'

export default function PostsSideBar(){
    return(


            <Grid container component={'div'}>
                <Divider orientation={'vertical'}/>
                <Grid item>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </Grid>
            </Grid>

    )
}