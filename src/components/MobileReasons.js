import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { AiOutlineRise } from "react-icons/ai";
import "./MobileReasons.css";
import pinnacle from "../images/pinnacle.jpeg";
import {
  FcSearch,
  FcAlarmClock,
  FcSportsMode,
  FcBullish,
  FcCalculator,
  FcApproval,
  FcIdea,
  FcHome,
  FcCancel,
  FcMultipleInputs,
  FcVip,
  FcDonate,
  FcCustomerSupport,
  FcHeadset,
  FcCallback,
} from "react-icons/fc";
import { GiMoneyStack, GiArchiveResearch } from "react-icons/gi";
import ac from "../images/asianconnect.png";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function MobileReasons(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.reasonNumber == 1 && (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="button_title">
              <AiOutlineRise size={25} />
            </div>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Nutze die besten Quoten
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Du hast keine Lust mehr, für jedes Spiel die{" "}
                    <b>besten Quoten</b> herauszusuchen?
                  </a>
                  <FcSearch size={30} />
                </div>
              </Typography>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    {" "}
                    Dann wende dich von den Mainstream-Buchmachern wie Bet365
                    und Co. ab und spare dir <b>Zeit</b> und <b>Geld</b>!
                  </a>
                  <div>
                    {" "}
                    <FcAlarmClock size={30} /> <GiMoneyStack size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                Wie? Ganz einfach! Nutze <b>Pinnacle Sports</b> und profitiere
                von den besten Quoten auf dem Wettmarkt!
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                <a
                  className="mobile_register_button"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {props.reasonNumber == 2 && (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="button_title">
              <FcCalculator size={35} />
            </div>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Pinnacle Sports
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Pinnacle ist einfach ein Muss jür jeden ambitionierten
                    Tipper!
                  </a>
                  <FcSportsMode size={30} />
                </div>
              </Typography>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Pinnacle Sports weiß mit seinen <b>Top-Quoten</b> und{" "}
                    <b>hohen Einsatzlimits</b> seit Jahren zu überzeugen
                  </a>
                  <div>
                    {" "}
                    <FcBullish size={30} /> <FcCalculator size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                Zudem musst du bei Pinnacle <b>keine Wettsteuer</b> abführen und
                es bestehen <b>keine Einzahlungs- oder Einsatzlimits</b>!
              </Typography>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                <a
                  className="mobile_register_button"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {props.reasonNumber == 3 && (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="button_title">
              <FcHome size={25} />
            </div>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Pinnacle aus Deutschland nutzen
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Seit 2016 ist Pinnacle <b>eigentlich</b> nicht mehr aus
                    Deutschland aus zu nutzen
                  </a>
                  <div>
                    {" "}
                    <FcCancel size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    BetSmart hat jedoch die <b>Lösung</b>!
                  </a>
                  <div>
                    {" "}
                    <FcIdea size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                Mit unserem Partner <b>AsianConnect</b> bieten wir die
                Möglichkeit, Pinnacle Sports völlig <b>legal</b> und{" "}
                <b>bequem</b> aus Deutschland asu zu nutzen
              </Typography>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                <a
                  className="mobile_register_button"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {props.reasonNumber == 4 && (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="button_title">
              <FcVip size={35} />
            </div>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              AsianConnect
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    AsianConnect mietet ein sog. Agentenkonto bei Pinnacle. Dies
                    ist ausschließlich <b>exklusiven Partnern </b>wie
                    AsianConnect vorbehalten
                  </a>
                  <div>
                    {" "}
                    <FcVip size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Über dieses Konto kannst du dann ganz normal{" "}
                    <b>Wetten bei Pinnacle platzieren</b>
                  </a>
                  <div>
                    {" "}
                    <FcDonate size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                <br></br>
                Du wirst die <b>volle Kontrolle</b> haben und kannst ganz{" "}
                <b>entspannt</b> die Vorzüge von Pinnacle <b>genießen</b>!
              </Typography>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                <a
                  className="mobile_register_button"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {props.reasonNumber == 5 && (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="button_title">
              {" "}
              {/* Top Kunden-Service */}
              <FcCustomerSupport size={30} />
            </div>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              AsianConnect (2)
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    AsianConnect bietet einen{" "}
                    <b>exzellenten Customer Support</b>
                  </a>
                  <div>
                    {" "}
                    <FcCustomerSupport size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a>
                    Egal ob <b>Live-Chat, Skype oder E-Mail</b>, unser Partner
                    AsianConnect steht dir immer zur Verfügung
                  </a>
                  <div>
                    {" "}
                    <FcHeadset size={30} /> <FcCallback size={30} />
                  </div>
                </div>
              </Typography>
              <Typography gutterBottom>
                Schaue hier in unseren <b>Anleitungen</b> nach, wie du dich bei
                AsianConnect registrierst und deren Services nutzt
              </Typography>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                <a
                  className="mobile_register_button"
                  target="_blank"
                  href="https://de.asianconnect88.com/register/?pk_kwd=YbzPaMfriy"
                >
                  Registrieren
                </a>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
}
