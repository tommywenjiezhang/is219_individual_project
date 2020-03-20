
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')


jsdoc2md.render(
    {files:["./Random/RandomCalculator.js", "./Statistic/StatisticsOperation.js","./basicCalculation/Calculator.js", "./Sampling/SampleCalculator.js"] }
    )
    .then( data => {
       fs.writeFile("./out.txt", data, ()=>{
           if (err) return console.log(err);
           console.log("write completed")
       })
    })

