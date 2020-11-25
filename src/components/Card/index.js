import React from 'react'
import './styles.css'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GlobalContext } from '../../context/GlobalContext'

const Card = (props) => {
    const {criarLembrete,editarLembrete} = React.useContext(GlobalContext);
    const [open, setOpen] = React.useState(false);
    const [lembrete, setLembrete] = React.useState('');
    const [cor, setCor] = React.useState('#000');
    const [cidade, setCidade] = React.useState('');
    const [hora, setHora] = React.useState('');
    const [idLembrete, setIdLembrete] = React.useState(null);

    const [item, setItem] = React.useState([])

        const itens = JSON.parse(window.localStorage.getItem("lembretes"));

    function handleClick(){
        const dados = {
            idDay: props.id,
            active: true,
            lembrete,
            cor,
            cidade,
            hora
        }
        criarLembrete(dados);
        setLembrete('');
        setCor('');
        setCidade('');
        setHora('');
        setOpen(false);
    }

    function edit(id){
        console.log(id);
        // const dados = {
        //     idDay: props.id,
        //     active: true,
        //     lembrete,
        //     cor,
        //     cidade,
        //     hora
        // }
        // editarLembrete(dados, id);
    }

    const handleClickOpen = () => {
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
            <button className="btnnovo" onClick={handleClickOpen}>lembrete +</button>
            {itens && itens.map((i)=> {
                return i.idDay === props.id 
                ?
                <div>
                <div onClick={edit("oi")} style={{backgroundColor:i.cor, height: '20px', width: "90%", zIndex: '1000', cursor: 'pointer'}}>
                    <p className="lembreteP">horas: {i.hora}</p>
                </div>
                </div>
                : <div></div>
            })}
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Lembrete para o dia {props.number}</DialogTitle>
            <DialogContent  className="dialogContent">
            <TextField
                id="name"
                value={cor}
                onChange={(e)=> setCor(e.target.value)}
                label="Cor para o lembrete"
                type="color"
                fullWidth
            />
            <TextField
            id="standard-multiline-flexible"
            label="Lembrete"
            multiline
            rowsMax={4}
            value={lembrete.substring(0,30)}
            onChange={(e)=> setLembrete(e.target.value)}
            fullWidth
            />
            <TextField
            id="date"
            label="Horas"
            value={hora}
            onChange={(e)=> setHora(e.target.value)}
            type="time"
            defaultValue="2017-05-24"
            InputLabelProps={{
            shrink: true,
            }}
            style={{width:"48%", marginTop: "20px"}}

            />
            <TextField
            id="standard-multiline-flexible"
            label="Cidade"
            multiline
            rowsMax={4}
            value={cidade}
            onChange={(e)=> setCidade(e.target.value)}
            style={{width:"48%", marginLeft: "20px", marginTop: "20px"}}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={handleClick} color="primary">
                Criar
            </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default Card
