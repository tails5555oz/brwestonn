//scroll to https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
let activeTabId = "about-me-tab"

const tabs = {
    "about-me-tab": {
        content: `<div id="about-me">
                Bridget Weston. 2nd year Computer Science at UVic. Web dev.
            </div>`
    },
    "projects-tab" : {
        content: `<div id="projects">
                <div class="project">
                    <div class="title">HighTechU Project Hub</div>
                    <div class="description">Community member-based platform to connect members of HighTechU and engage students in project-based learning.</div>
                    <div class="links">
                    <div class="icon"><i class="fa fa-github"></i></div>
                    <div class="icon"><i class="fa fa-external-link"></i></div>
                    </div>
                </div>
                <div class="project">
                    <div class="title">Project 2</div>
                    <div class="description">Community member-based platform to connect members of HighTechU and engage students in project-based learning.</div>
                    <div class="links">
                    <div class="icon"><i class="fa fa-github"></i></div>
                    <div class="icon"><i class="fa fa-external-link"></i></div>
                    </div>
                </div>
                <div class="project">
                    <div class="title">Project 3</div>
                    <div class="description">Community member-based platform to connect members of HighTechU and engage students in project-based learning.</div>
                    <div class="links">
                    <div class="icon"><i class="fa fa-github"></i></div>
                    <div class="icon"><i class="fa fa-external-link"></i></div>
                    </div>
                </div>
            </div>`
    },
    "resume-tab": {
        content: `<div id="resume">
                <embed src="resume.pdf" />
            </div>`
    }
}

window.addEventListener("load", (e) => {
    const main = document.getElementById("main")

    //Set default tab to active
    switchTabs(activeTabId)

    //Set listeners for tab clicks
    Object.keys(tabs).forEach(tabId => {
        const tabEl = document.getElementById(tabId)
        tabEl.addEventListener("click", (e) => {
            switchTabs(tabId)
        })
    })
})

function switchTabs(tabId) {
    //Put tab content into main el
    main.innerHTML = tabs[tabId].content

    //Change active tab styling
    document.getElementById(activeTabId).classList.remove("active")
    document.getElementById(tabId).classList.add("active")
    activeTabId = tabId
}