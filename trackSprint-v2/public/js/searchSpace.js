class searchSpace{
    constructor()
    {}

    static get all(){
        let options = []
        options.push(
            'new CreateHomeButtons()',
            'new CreateBacklogButtons()',
        )
    options = options.flat()
    return options
    }
}