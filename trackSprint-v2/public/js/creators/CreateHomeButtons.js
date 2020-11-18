class CreateHomeButtons {
    constructor(parent_id, container_id) {
        this.buttons = ['newSprint','manageBacklog','viewReports','trello']
        this.container_id = container_id
        this.parent_id = parent_id

        // attached html 
        this.draw()
        // set listeners on buttons
        this.addListeners(this.buttons)
    }

    get parent() {
        return $(`#${this.parent_id}`)
    }

    get container(){
        return $(`#${this.container_id}`)
    }

    draw(){
        let h = ``
        h += `<div id = 'row1' class = 'buttons'>
            <button id='newSprint' class = 'button button1'>NEW SPRINT</button>
            <button id='manageBacklog' class = 'button button2'>MANAGE BACKLOG</button>
            </div>
            <div id = 'row2' class = 'buttons'>
            <button id='viewReports' class = 'button button3'>VIEW REPORTS</button>
            </div>
            <div id = 'row3' class = 'buttons'>
            <button id = 'trello' class = 'button button4'>CONNECT TO TRELLO</button>
            </div>
        `
        this.parent.prepend(h)
    }

    handleClick(button){
        // set path accordingly
        window.location.href = window.location.href + button.target.id
    }

    addListeners(buttons){
        for (let button of buttons){
            this.container.find('#'+button).on('click',this.handleClick.bind(button))
        }
    }
}