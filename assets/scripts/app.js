class Tooltip {
}

class ProjectItem {

    // create the id
    constructor(id, updateProjectsListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectsListsFunction
        this.connectMoreInfoButton()
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        // id that we are storing in the constructor
        const projectItemElement = document.getElementById(this.id)
        // selecting the button individually
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler)
    }

}

class ProjectList {
    projects = [];

    // parse the project type
    constructor(type) {
        this.type = type;
        // select based on id of finish or active and the list item
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        //get the id with the loop
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // // delete the project based on its index.
        // this.projects.splice(projectIndex, 1)
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {

    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        //setting active to finished
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(finishedProjectsList));
    }

}

App.init();