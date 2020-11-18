function onComplete(){
    console.log('dependencies loaded')
    let backlogButtons = new BacklogButtons('backlogButtonContainer', 'r1LHS')
}

loadDependencies(onComplete)

function loadDependencies(onComplete){
    let toLoad = [
        // Boilerplate
        '/js/jquery-3.2.1.min.js',
        '/js/SearchSpace.js',

        // Creators
        '/js/creators/CreateBacklogButtons.js',
    ]

    let loadNext = function() {
        let script = document.createElement('script')
        script.src = toLoad[0]
        script.onload = function (e) {
            toLoad.shift()
            if (toLoad.length == 0){
                onComplete()
                return false
            }
            else{
                loadNext()
            }
        }
        document.head.appendChild(script)
    }
    loadNext()
}