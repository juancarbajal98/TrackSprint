class CreateBacklogButtons {
    constructor(parent_id, container_id) {
        this.buttons = ['addItem','editItem']
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
        h += `
        <button class = "buttons backlog mdc-button" id ="addItem">Add Item</button>
        <button class = "buttons backlog" id = "editItem">Edit Item(s)</button>
        `
        this.parent.prepend(h)
    }

    // draw dialog for user to add item
    drawDialog(){
        console.log('darwing')
        let h = ``
        h+= `
        <div id="confirmation-dialog" class="mdc-dialog mdc-dialog--open" role="alertdialog" aria-modal="true" aria-labelledby="confirmation-dialog-label" aria-describedby="confirmation-dialog-description"><div class="mdc-dialog__scrim"></div><div class="mdc-dialog__container"><div class="mdc-dialog__surface"><h2 id="confirmation-dialog-label" class="mdc-dialog__title">Phone ringtone</h2><section id="confirmation-dialog-description" class="mdc-dialog__content"><ul class="mdc-list" style="list-style-type: none;"><li class="mdc-list-item" tabindex="0" aria-checked="true"><span class="mdc-list-item__graphic"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-1" name="test-dialog-baseline-confirmation-radio-group" value="1" checked="" tabindex="-1"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div></span><label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-1">Never Gonna Give You Up</label></li><li class="mdc-list-item" tabindex="-1" aria-checked="false"><span class="mdc-list-item__graphic"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-2" name="test-dialog-baseline-confirmation-radio-group" value="2" tabindex="-1"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div></span><label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-2">Hot Cross Buns</label></li><li class="mdc-list-item" tabindex="-1"><span class="mdc-list-item__graphic"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-3" name="test-dialog-baseline-confirmation-radio-group" value="3" tabindex="-1"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div></span><label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-3">None</label></li></ul></section><footer class="mdc-dialog__actions"><button type="button" class="mdc-button mdc-dialog__button mdc-ripple-upgraded" data-mdc-dialog-action="close" style="--mdc-ripple-fg-size:45px; --mdc-ripple-fg-scale:2.10168; --mdc-ripple-fg-translate-start:8.81641px, 1.46484px; --mdc-ripple-fg-translate-end:15.7656px, -4.5px;">Cancel</button><button type="button" class="mdc-button mdc-dialog__button mdc-dialog__button--default mdc-ripple-upgraded" data-mdc-dialog-action="accept">OK</button></footer></div></div></div>
        `
        this.parent.prepend(h)
    }

    handleClick(button){
        // set path accordingly
        console.log(this.parent_id)
        if(button.target.id == "addItem"){
            this.drawDialog()
        }
        // window.location.href = window.location.href + button.target.id
    }

    addListeners(buttons){
        for (let button of buttons){
            this.container.find('#'+button).on('click',this.handleClick.bind(button))
        }
    }
}