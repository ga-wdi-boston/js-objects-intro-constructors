'use strict'

const Runner = function (name, email, runs) {
  this.name = name
  this.email = email
  this.runs = runs
}

const Jon = new Runner('Jon Cohen', 'jon.cohen08@gmail.com', {date: '2017-03-23', distance: 1, time: 400})
console.log(Jon.runs)

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],

  totalDistance: function () {
    // define an auxillary variable
    const runs = this.runs

    // define an accumulator
    let result = 0

    // work on accumulator
    for (let i = 0; i < runs.length; i++) {
      result += runs[i].distance
    }

    // return accumulator
    return result
  },

  longestRun: function () {
    // define an auxillary variable
    const runs = this.runs

    let result = runs[0].distance

    for (let i = 1; i < runs.length; i++) {
      if (runs[i].distance > result) {
        result = runs[i].distance
      }
    }

    return result
  },

  averageSpeed: function () {
    // define an auxillary variable
    const runs = this.runs

    let totalTime = 0

    for (let i = 0; i < runs.length; i++) {
      totalTime += runs[i].timeTaken
    }

    return this.totalDistance() / totalTime
  }
}

module.exports = mcFaceRuns
