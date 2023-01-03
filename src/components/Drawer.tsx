import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import MailIcon from "@material-ui/icons/Mail";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import perfil from "../perfil.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginLeft: "15px",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "90%",
    },
    formControlArea: {
      margin: theme.spacing(1),
      minWidth: "97%",
    },
    formControlRequisito: {
      margin: theme.spacing(1),
      minWidth: "96%",
    },
    textField: {
      margin: theme.spacing(1),
      width: "100%",
    },
  })
);

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState("Accion Correctiva");
  const [age, setAge] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        background: "#15253D",
        height: "100%",
      }}
    >
      <div className={classes.toolbar} />
      <img
        src={perfil}
        style={{ width: 180, display: "block", margin: "auto" }}
      />
      <Divider />
      <List style={{ color: "white", marginTop: "55px" }}>
        {["Bandeja SIG", "Bandeja Responsable", "Administracion"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* <Hidden smUp implementation="css"> */}
        <Drawer
          // container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
        {/* <Hidden xsDown implementation="css"> */}
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
      </nav>
      <main className={classes.content}>
        <Grid style={{ textAlign: "center", marginBottom: "30px" }}>
          <Typography variant="h5" gutterBottom>
            Nuevo Registro SAM
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={12}
          spacing={1}
          style={{ alignItems: "center", marginBottom: "20px" }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ marginRight: "150px", marginTop: "5px" }}
          >
            Tipo de solicitud*:
          </Typography>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              style={{ marginRight: "150px" }}
              value="Accion Correctiva"
              control={<Radio color="primary" />}
              label="Accion Correctiva"
            />

            <FormControlLabel
              value="Accion De Mejora"
              control={<Radio color="primary" />}
              label="Accion De mejora"
            />
          </RadioGroup>
        </Grid>
        <Grid container md={12} spacing={1} style={{ alignItems: "center" }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Criterio*:
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleChange1}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Hallazgo*:
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleChange1}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Tipo de Hallazgo*:
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleChange1}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Proceso*:
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleChange1}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Fecha de Solicitud*:
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Solicitante*:
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Proveedor / Auditado*:
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Codigo de Auditoria*:
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Responsable SAM*:
            </Typography>
            <FormControl className={classes.formControl}>
              <TextField />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px" }}
            >
              Descripcion del Hallazgo*:
            </Typography>
            <FormControl className={classes.formControlArea}>
              <textarea
                style={{
                  height: "80px",
                  padding: "15px",
                }}
              ></textarea>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginRight: "40px", marginTop: "5px" }}
            >
              Requisito:
            </Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <FormControl className={classes.formControlRequisito}>
              <TextField />
            </FormControl>
          </Grid>
          <Grid
            item
            md={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
              marginRight: "25px",
            }}
          >
              <Button variant="contained">Cancelar</Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "30px" }}
              >
                Registrar
              </Button>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
