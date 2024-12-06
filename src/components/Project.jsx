import React from 'react';
import languagesData from '../data';

function Project() {
    const projects = languagesData.tr.project;

    return (
        <div className="flex gap-10">
            {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0">
                    <div className="text-center text-2xl mt-4">{project.projectHeader || "Projects"}</div>
                    <div className="bg-blue-100 p-8 rounded shadow-lg w-[508px] h-[30rem] ml-14">
                        <div className="mb-4 space-y-4">
                            <h1 className="text-xl font-semibold">{project.name || project.name1}</h1>
                            <p className="text-gray-700">{project.description || project.description1}</p>
                        </div>
                        <div className="mt-4 space-y-4">
                            <h2 className="text-lg font-semibold space-y-10">Skills:</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(project.skill || project.skill1 || []).map((skill, skillIndex) => (
                                    <div key={skillIndex} className="bg-white rounded-lg px-4 py-2 shadow">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between gap-10">
                            <a href="#" className="font-bold block mb-2 mt-4">
                                {project.wievToGithub || project.wievToGithub1}
                            </a>
                            <a href="#" className="font-bold mt-4">
                                {project.application || project.application1} →
                            </a>
                        </div>
                        <img className="mt-4" src={project.photo} alt={project.photo[0]} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;