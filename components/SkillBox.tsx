import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VisibilitySensor from 'react-visibility-sensor';

interface props {
    SkillSection: {
        header: string,
        skills: {
            name: string,
            bolded: boolean
        }[]
    }
};

const useStyles = makeStyles({
    skillBox: {
        marginTop: '30px',
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        padding: '25px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px 5px black'
    },
    boxHeader: {
        opacity: '100%',
        color: 'black'
    },
    skillList: {
        listStyleType: 'none',
        textAlign: 'center',
        fontSize: '15px',
        marginTop: '20px',
        color: 'black'
    },
    bolded: {
        fontWeight: 'bold'
    }
});

const SkillBox = ({ SkillSection }: props) => {
    const MuiStyles = useStyles();
    const [isVisible, setVisible] = React.useState(false);

    return (
        <>
            <VisibilitySensor onChange={(visible) => setVisible(visible)}>
            <div className={MuiStyles.skillBox} style={{opacity: isVisible ? 1 : 0, transition: 'opacity 500ms linear'}}>
                <h3 className={MuiStyles.boxHeader}>{SkillSection.header}</h3>
                    <ul className={MuiStyles.skillList}>
                        {SkillSection.skills.map(skill => {
                            return <li className={skill.bolded ? MuiStyles.bolded : null} key={skill.name}>
                                {skill.name}
                            </li>
                        })}
                    </ul>
                </div>
            </VisibilitySensor>
        </>
    );
};

export default SkillBox;