import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GlobalContext } from "../../context/GlobalContext";

const Card = (props) => {
  const { criarLembrete, editarLembrete } = React.useContext(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const [lembrete, setLembrete] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");
  const [textColor, setTextColor] = React.useState("#000000");
  const [cidade, setCidade] = React.useState("");
  const [hora, setHora] = React.useState("");
  const [idLembrete, setIdLembrete] = React.useState(null);

  function handleClick() {
    const dados = {
      idDay: props.id,
      active: true,
      lembrete,
      backgroundColor,
      textColor,
      cidade,
      hora,
    };
    if( idLembrete ) {
      editarLembrete(dados, idLembrete)
    } else {
      criarLembrete(dados);
    }
    handleClose();
  }

  const removeLembrete = () => {
    const dados = {
      idDay: props.id,
      active: false,
      lembrete,
      backgroundColor,
      textColor,
      cidade,
      hora,
    };
    editarLembrete(dados, idLembrete);
    handleClose();
  }

  const handleClickOpen = (data = null) => {
    if(data) {
      setLembrete(data.lembrete);
      setBackgroundColor(data.backgroundColor);
      setTextColor(data.textColor);
      setCidade(data.cidade);
      setHora(data.hora);
      setIdLembrete(data.id)
    } else {
      setLembrete("");
      setBackgroundColor("#ffffff");
      setTextColor("#000000");
      setCidade("");
      setHora("");
      setIdLembrete(null)
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div id="card">
        {/* <div className="clickAdd"></div> */}
        <p>{props.number}</p>
        <button className="btnnovo" onClick={() => handleClickOpen()}>
          Novo lembrete
        </button>
        {props.lembretes &&
          props.lembretes
            .filter(l => !!l.active)
            .map(i => (
              <div key={i.id}>
                <div
                  onClick={() => handleClickOpen(i)}
                  style={{
                    backgroundColor: i.backgroundColor,
                    color: i.textColor,
                    height: "20px",
                    width: "90%",
                    zIndex: "1000",
                    cursor: "pointer",
                  }}
                >
                  <p className="lembreteP">{i.lembrete} | {i.hora}</p>
                </div>
              </div>
            ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {
            idLembrete 
              ? 'Editar lembrete'
              : `Novo Lembrete para o dia ${props.number}`
          }
          {
            !!idLembrete && (
              <Button style={{marginLeft: 5}} onClick={removeLembrete} color="secondary" variant="contained" size="small">
                Remover
              </Button>
            )
          }
        </DialogTitle>
        <DialogContent className="dialogContent">
          <TextField
            id="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            label="Cor de fundo"
            type="color"
            style={{ width: "48%", marginTop: "20px" }}
          />
          <TextField
            id="textColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            label="Cor do texto"
            type="color"
            style={{ width: "48%", marginLeft: "20px", marginTop: "20px" }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Lembrete"
            multiline
            rowsMax={4}
            value={lembrete.substring(0, 30)}
            onChange={(e) => setLembrete(e.target.value)}
            style={{ marginTop: "20px" }}
            fullWidth
          />
          <TextField
            id="date"
            label="Horas"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            type="time"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: "48%", marginTop: "20px" }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Cidade"
            multiline
            rowsMax={4}
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            style={{ width: "48%", marginLeft: "20px", marginTop: "20px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClick} color="primary">
            {
              idLembrete ? 'Editar' : 'Criar'
            }
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Card;
