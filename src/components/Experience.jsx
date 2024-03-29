import ExperienceInfo from './ExperienceInfo'
import jobsData from '../data/jobs'

function Experience() {

    return (
        <div className="experience-content">
            <h2>Laboral Experience</h2>

            <div className='jobs-container'>
                {jobsData.map((job, index) => (
                    <ExperienceInfo
                        key={index}
                        company={job.company}
                        role={job.role}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience