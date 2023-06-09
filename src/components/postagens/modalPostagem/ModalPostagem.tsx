import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Button } from "@material-ui/core"
import {Box, Modal} from '@mui/material';
import React from 'react'
import CadastroPostagem from '../cadastroPostagem/CadastroPostagem';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#FBF2DF',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );

function ModalPostagem() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <Box display="flex" justifyContent="flex-end" className="cursor">
          <CloseIcon onClick={handleClose}/>
        
        </Box>
        
        <CadastroPostagem/>
        
      </div>
    );

  return (
    <div>
      <Button
        variant="outlined"
        className="btnModal"
        onClick={handleOpen}
        style={{borderRadius: '20px'}}>Nova Postagem</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default ModalPostagem