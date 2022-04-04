class Tooltip {
}

class ProjectItem {

    // create the id
    constructor(id) {
        this.id = id;
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
        switchBtn.addEventListener('click', )
    }

}

class ProjectList {
    projects = [];

    // parse the project type
    constructor(type) {
        // select based on id of finish or active and the list item
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        //get the id with the loop
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects);
    }

    addProject() {

    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // // delete the project based on its index.
        // this.projects.splice(projectIndex, 1)
        this.addProject();
        this.projects = this.projects.filter(p => p.id !== projectId)
    }
}

class App {

    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }

}

App.init();