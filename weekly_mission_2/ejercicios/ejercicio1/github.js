const repo = {

    name: "reponame",
    author: "iker",
    lenguage: "python",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issuesOpen: 10,
    issuesClose: 10,

    getTotalIssues: function(){

        return this.issuesOpen + this.issuesClose
    },


    getGeneralInfo: function(){

        return `This repository ${this.name} was created by ${this.author}`
    }

};



console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())




const Issue = {

    title:"non complete",
    repositoryNameAssociated: "reponame",
    status: "down",
    numberOfComments: 10,
    labels: 20,
    author: "pepe",
    dateCreated: "10-10-2020",
    lastUpdated: "10-10-2022",

    getTitleAndAuthor: function(){
        return `we have this author ${this.author} for this title ${this.title}`
    },

    getGeneralInfo: function(){
        return ` Acd uthor ${this.author} for this title ${this.title}`
    }
}