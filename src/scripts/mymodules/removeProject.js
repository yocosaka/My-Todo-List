const removeProject = (projectId, projects) => {
  const targetIndex = projects.findIndex(project => project.id === projectId);
  if (targetIndex >= 0) {
    projects.splice(targetIndex, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

export default removeProject;
