import React from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Container,
    Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectDialog from './ProjectDialog';


interface props {
    project: {
        name: string,
        url: string,
        img: string,
        logo: string,
        gif: string,
        description: string,
        ghlink: string,
        tech: string[]
    }
};

const useStyles = makeStyles({
    card: {
        backgroundColor: 'white',
        width: '100%',
        boxShadow: '5px 5px 15px 5px black'
    },
    cardMedia: {
        width: '90%',
        margin: '0 auto'
    },
    cardButton: {
        margin: '0 auto'
    },
    cardActions: {
        margin: '0 auto'
    },
    cardAvatar: {
        backgroundColor: 'grey',
        '& img': {
            height: '70%',
            width: '70%'
        }
    },
    cardHeader: {
        fontSize: '2.5em',
        '& span': {
            fontSize: '.7em'
        }
    }
});

const ProjectCard = ({ project }: props) => {
    const MuiStyles = useStyles();

    const [isDialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogClose = (): void => {
        setDialogOpen(false);
    };

    const handleDialogOpen = (): void => {
        setDialogOpen(true);
    }

    return (
        <>
          <ProjectDialog
                project={{
                    name: project.name,
                    url: project.url,
                    gif: project.gif,
                    ghlink: project.ghlink,
                    tech: project.tech
                }}
                isDialogOpen={isDialogOpen}
                handleDialogClose={handleDialogClose}
            />
            <div className="cardContainer">
                <Container>
                    <Card className={MuiStyles.card}>
                        <CardHeader
                            className={MuiStyles.cardHeader}
                            title={project.name}
                            avatar={
                                <Avatar className={MuiStyles.cardAvatar} alt={project.name} src={project.logo} />
                            } 
                        />
                        <CardMedia className={MuiStyles.cardMedia}><img className='cardImage' src={project.img} /></CardMedia>
                        <CardContent>{project.description}</CardContent>
                        <CardActions className={MuiStyles.cardActions}>
                            <Button color='primary' variant='contained' className={MuiStyles.cardButton} onClick={() => handleDialogOpen()} >More</Button>
                        </CardActions>
                    </Card>
                </Container>
            </div>


    <style jsx>{`
        .cardContainer {
            margin-bottom: 25px;
        }

        .cardImage{
            border: 1px solid grey;
            box-shadow: 5px 2px 10px 1px black;
        }
    `}</style>
    </>
    );
};

export default ProjectCard;