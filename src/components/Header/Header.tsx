import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDrawerContext } from "../../contexts/drawer-context";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        padding: theme.spacing(1),
    },
    title: {
        margin: "auto",
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();
    const { isOpened, toggleIsOpened } = useDrawerContext();
    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={() => toggleIsOpened(!isOpened)}
                    className={classes.icon}
                >
                    {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Message Log
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
