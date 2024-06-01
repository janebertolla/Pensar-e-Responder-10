import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DeletarTarefa = ({open, excluirTarefa, cancelaExclusao}) => {
     
    return(
      <Dialog
        open={open}
        onClose = {cancelaExclusao}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Aviso"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja excluir a tarefa? 
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={cancelaExclusao}>Não</Button>
          <Button onClick={excluirTarefa} autoFocus> Sim </Button>
        </DialogActions>
      </Dialog>
    )
};

export default DeletarTarefa;