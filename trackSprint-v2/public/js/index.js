function onComplete(link){
    console.log('dependencies loaded')
    if(link.substring(21) == '/'){
        let homeButtons = new CreateHomeButtons('buttonContainer', 'body')
    }
    else if (link.substring(21) == '/newSprint'){
        let backlogButtons = new CreateBacklogButtons('backlogButtonContainer', 'r1LHS')
    }
}

loadDependencies(onComplete)

function loadDependencies(onComplete){
    let toLoad = []
    if(window.location.href == "http://localhost:3002/"){
        toLoad = [
            // Boilerplate
            '/js/jquery-3.2.1.min.js',
            '/js/SearchSpace.js',
    
            // Creators
            '/js/creators/CreateHomeButtons.js',
        ]
    }

    else if(window.location.href == "http://localhost:3002/newSprint"){
        toLoad = [
            // Boilerplate
            '/js/jquery-3.2.1.min.js',
            '/js/SearchSpace.js',    
    
            // Creators
            '/js/creators/CreateBacklogButtons.js',
        ]
    }

    let loadNext = function() {
        let script = document.createElement('script')
        script.src = toLoad[0]
        script.onload = function (e) {
            toLoad.shift()
            if (toLoad.length == 0){
                onComplete(window.location.href)
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