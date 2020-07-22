import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Anime from 'react-anime';

interface props {
    project: {
        name: string,
        url: string,
        gif: string,
        ghlink: string,
        tech: string[]
    },
    isDialogOpen: boolean,
    handleDialogClose(): void
};

const useStyles = makeStyles({
    dialogTitle: {
        margin: '0 auto'
    },
    dialogContent: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gif: {
        width: '100%',
        height: '250px'
    },
    header: {
        margin: '0 auto'
    },
    list: {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        '& li': {
            margin: '10px 10px 0 10px'
        }
    },
    button: {
        textAlign: 'center',
        margin: '0 auto'
    }
});

const ProjectDialog = ({ project, isDialogOpen, handleDialogClose }: props) => {
    const MuiStyles = useStyles();

    return (
        <>
            <Dialog
                open={isDialogOpen}
                keepMounted
                onClose={handleDialogClose}
            >
                <DialogTitle className={MuiStyles.dialogTitle}>
                    {project.name}
                </DialogTitle>
                <DialogContent className={MuiStyles.dialogContent}>
                    <img src={project.gif} className={MuiStyles.gif} />
                    <br/>
                    <h3 className={MuiStyles.header} >Technologies used</h3>
                    <ul className={MuiStyles.list}>
                        {project.tech.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </DialogContent>
                <DialogActions>
                    {!project.url ? null : 
                    <Button className={MuiStyles.button} color="primary" href={project.url}>
                        Visit
                    </Button>}
                    <Button className={MuiStyles.button} color="primary" href={project.ghlink}>
                        View on Github
                    </Button>
                    <Button className={MuiStyles.button} onClick={() => handleDialogClose()}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
    </>
    );
};

export default ProjectDialog;