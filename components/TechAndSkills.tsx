import React from 'react';
import SkillBox from './SkillBox';
import SkillSectionArray from '../utils/skills_array';

const TechAndSkills = () => {

    return (
        <>
            <section className='TechAndSkillsSection'>
                <div className='wrapper'>
                    <h2 className="skillsHeader">Technologies and Skills</h2>
                    {SkillSectionArray.map(section => {
                        return <SkillBox SkillSection={section} />
                    })}
                </div>
            </section>

    <style jsx>{`
    
    .TechAndSkillsSection{
        color: white;
        width: 100%;
    }

    .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px auto;
    }

    `}</style>
    </>
    );
};

export default TechAndSkills;