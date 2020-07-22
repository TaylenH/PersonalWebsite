import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    },
    header: {
        margin: '25px auto 0 auto',
        color: 'white'
    },
    contactInfo: {
        listStyleType: 'none'
    },
    listText: {
        margin: 'auto 0 auto 4px'
    },
    listImage: {
        backgroundColor: 'white',
        borderRadius: '25%'
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2px'
    },
    resumeLink: {
        color: 'white',
        textDecoration: 'none',
        margin: '25px auto 40px auto'
    }
});

const Footer = () => {
    const MuiStyles = useStyles();

    return (
        <>
            <section className={MuiStyles.footer}>
                <h2 className={MuiStyles.header}>Contact</h2>
                <ul className={MuiStyles.contactInfo}>
                    <li className={MuiStyles.item}><img src="https://img.icons8.com/color/20/000000/gmail.png"/><span className={MuiStyles.listText}>- TheyNel3@Gmail.com</span></li>
                    <li className={MuiStyles.item}><img src="https://img.icons8.com/ios-filled/20/000000/github.png" className={MuiStyles.listImage}/><span className={MuiStyles.listText}>- <a href='https://github.com/TaylenH'>TaylenH</a></span></li>
                    <li className={MuiStyles.item}><img src="https://img.icons8.com/cute-clipart/20/000000/linkedin.png" className={MuiStyles.listImage}/><span className={MuiStyles.listText}> - <a href='https://www.linkedin.com/in/taylen-heyder-nelson-a1a2681b3/'>Taylen Heyder-Nelson</a></span></li>
                </ul>
                <a href='/Taylen-Heyder-Nelson.pdf' className={MuiStyles.resumeLink} download>
                    <Button color='primary' variant='contained' >
                        Download Resume
                    </Button>
                </a>
            </section>
        </>
    );
};

export default Footer;