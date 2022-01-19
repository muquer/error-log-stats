import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
    createStyles,
    makeStyles,
    Theme,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { DrawerItem } from "../../ts";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            textDecoration: 'none',
            color: 'inherit'
        }
    }))

type Props = DrawerItem & {
    selected?: boolean;
    onClick?: () => void;
};

const MenuItem: React.FC<Props> = ({
    route,
    literal,
    Icon,
    selected,
    onClick,
}) => {
    const classes = useStyles();
    const link = (
        <ListItem
            button
            selected={selected}
            onClick={onClick}
        >
            <ListItemIcon >
                <Icon />
            </ListItemIcon>
            <ListItemText primary={literal} />
        </ListItem>
    );
    return route ? <Link className={classes.link} to={route}>{link}</Link> : link;
};

export default MenuItem;
