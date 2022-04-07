import React from "react";
import {
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Hidden,
  Drawer,
  CssBaseline,
  AppBar,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { ListItem, ListItemProps } from "@material-ui/core";
import { useRouter } from "next/router";
import { IconLogo } from "components/icon";

const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiIconButton-edgeStart": {
        marginLeft: "auto",
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: {
      minHeight: 64,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    drawerPaper: {
      width: drawerWidth,
      "& .listMenu": {
        "& .btnMenu": {
          color: "#172978",
          fontSize: "1rem",
          lineHeight: "1rem",
        },
        "& .active": {
          backgroundColor: "red",
        },
      },
      "& .MuiListItemIcon-root": {
        minWidth: 40,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  window?: () => Window;
}
const listMenu = [
  {
    name: "ภาพรวม",
    icon: <HomeOutlinedIcon color="primary" />,
    href: "/overview",
  },
  {
    name: "กลยุทธ์การลงทุน",
    icon: <EmojiObjectsOutlinedIcon color="primary" />,
    href: "/investment",
  },
  {
    name: "ประวัติการทำรายการ",
    icon: <CalendarTodayIcon color="primary" />,
    href: "/history",
  },
  {
    name: "ตลาดและข่าวสาร",
    icon: <TrendingUpOutlinedIcon color="primary" />,
    href: "/market-news",
  },
  {
    name: "เครื่องมือ",
    icon: <BuildOutlinedIcon color="primary" />,
    href: "/tools",
  },
];

const SideDrawer = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  const drawer = (
    <>
      <div className={classes.toolbar}>
        <IconLogo />
      </div>
      <List className="listMenu">
        {listMenu.map((menu, index) => (
          <ListItemLink
            className={`btnMenu ${
              router.pathname.match(menu.href) ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              router.push(menu.href);
            }}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            {menu.name}
          </ListItemLink>
        ))}
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default SideDrawer;
