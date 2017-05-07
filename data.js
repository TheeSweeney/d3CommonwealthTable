var tableData = [
    ['   '],
    ['header','AUS','CAN','FRA','GER','NETH','NZ','NOR','SWE','SWIZ','UK','US'],
    ['   '],
    ['OVERALL RANKING',1,9,10,8,3,4,5,6,7,2,11],
    ['   '],
    ['Quality',2,6,9,8,4,3,10,11,7,1,5],
    ['   '],
    ['Access',4,10,9,2,1,7,5,6,8,3,11],
    ['   '],
    ['Administrative Burden',1,6,11,7,9,2,4,5,8,3,10],
    ['   '],
    ['Equity',7,9,10,6,2,8,5,3,4,1,11],
    ['   '],
    ['Health Care Outcomes',1,9,5,8,6,7,3,2,4,10,11],
    ['   '],
    ['Health Spending per Capita*',"$4,207","$4,724","$4,620","$5,119","$5,277","$4,038","$6,432","$5,306","$6,787","$4,094","$9,364"]
]



var barData = [
  {key: "Glazed",   value: 132},
  {key: "Jelly",    value: 71},
  {key: "Holes",    value: 200},
  {key: "Sprinkles",  value: 93},
  {key: "Crumb",    value: 78},
  {key: "Chocolate",  value: 43},
  {key: "Coconut",  value: 20},
  {key: "Cream",    value: 16},
  {key: "Cruller",  value: 30},
  {key: "Éclair",   value: 8},
  {key: "Fritter",  value: 17},
  {key: "Bearclaw",   value: 21}
];

var subsectionData = {
  QualityQuestions: [
    {
      questionSet: "Preventative Car Measures",
      sectionData: [
        {
          qid:'1',
          "q": "Talked with provider about things in life that cause worry or stress in the past two years, among those with a history of mental illness",
          data:[
            {country: "AUS", value: 74},
            {country: "CAN", value: 63},
            {country: "FRA", value: 0},
            {country: "GER", value: 46},
            {country: "NETH", value: 62},
            {country: "NZ", value: 67},
            {country: "NOR", value: 62},
            {country: "SWE", value: 58},
            {country: "SWIZ", value: 72},
            {country: "UK", value: 58},
            {country: "US", value: 64},
          ],
        },
        {
          qid:'2',
          "q": "Talked with provider about healthy diet, exercise and physical activity in the past two years",
          data:[
            {country: "AUS", value: 38},
            {country: "CAN", value: 41},
            {country: "FRA", value: 16},
            {country: "GER", value: 17},
            {country: "NETH", value: 24},
            {country: "NZ", value: 37},
            {country: "NOR", value: 20},
            {country: "SWE", value: 21},
            {country: "SWIZ", value: 28},
            {country: "UK", value: 33},
            {country: "US", value: 59},
          ],
        },
        {
          qid:'3',
          "q": "Talked with provider about health risks of smoking and ways to quit in the past two years, among smokers",
          data:[
            {country: "AUS", value: 56},
            {country: "CAN", value: 71},
            {country: "FRA", value: 49},
            {country: "GER", value: 17},
            {country: "NETH", value: 53},
            {country: "NZ", value: 59},
            {country: "NOR", value: 25},
            {country: "SWE", value: 49},
            {country: "SWIZ", value: 36},
            {country: "UK", value: 57},
            {country: "US", value: 74},
          ],
        },
        {
          qid:'4',
          "q": "Talked with provider about alcohol use in the past two years",
          data:[
            {country: "AUS", value: 25},
            {country: "CAN", value: 23},
            {country: "FRA", value: 9},
            {country: "GER", value: 8},
            {country: "NETH", value: 25},
            {country: "NZ", value: 23},
            {country: "NOR", value: 9},
            {country: "SWE", value: 20},
            {country: "SWIZ", value: 11},
            {country: "UK", value: 25},
            {country: "US", value: 33},
          ],
        },
        {
          qid:'5',
          "q": "Women age 50-69 with mammography screening in the past year",
          data:[
            {country: "AUS", value: 54},
            {country: "CAN", value: 72},
            {country: "FRA", value: 75},
            {country: "GER", value: 71},
            {country: "NETH", value: 80},
            {country: "NZ", value: 72},
            {country: "NOR", value: 75},
            {country: "SWE", value: 0},
            {country: "SWIZ", value: 47},
            {country: "UK", value: 75},
            {country: "US", value: 81},
          ],
        },
        {
          qid:'6',
          "q": "Older adults (age 65 plus) with influenza vaccination in the past year",
          data:[
            {country: "AUS", value: 0},
            {country: "CAN", value: 63},
            {country: "FRA", value: 49},
            {country: "GER", value: 59},
            {country: "NETH", value: 72},
            {country: "NZ", value: 69},
            {country: "NOR", value: 27},
            {country: "SWE", value: 50},
            {country: "SWIZ", value: 46},
            {country: "UK", value: 75},
            {country: "US", value: 68},
          ],
        },
        {
          qid:'7',
          "q": "Avoidable hospital admissions for diabetes, age-sex standardized rates per 100,000",
          data:[
            {country: "AUS", value: 141},
            {country: "CAN", value: 95},
            {country: "FRA", value: 181},
            {country: "GER", value: 216},
            {country: "NETH", value: 68},
            {country: "NZ", value: 187},
            {country: "NOR", value: 76},
            {country: "SWE", value: 111},
            {country: "SWIZ", value: 44},
            {country: "UK", value: 64},
            {country: "US", value: 198},
          ],
        },
        {
          qid:'8',
          "q": "Avoidable hospital admissions for asthma, age-sex standardized rates per 100,000",
          data:[
            {country: "AUS", value: 65},
            {country: "CAN", value: 15},
            {country: "FRA", value: 30},
            {country: "GER", value: 23},
            {country: "NETH", value: 31},
            {country: "NZ", value: 72},
            {country: "NOR", value: 26},
            {country: "SWE", value: 23},
            {country: "SWIZ", value: 13},
            {country: "UK", value: 61},
            {country: "US", value: 103},
          ],
        },
        {
          qid:'9',
          "q": "Avoidable hospital admissions for congestive heart failure, age-sex standardized rates per 100,000",
          data:[
           {country:  "AUS", value: 240},
           {country:  "CAN", value: 179},
           {country:  "FRA", value: 238},
           {country:  "GER", value: 382},
           {country:  "NETH", value: 199},
           {country:  "NZ", value: 229},
           {country:  "NOR", value: 175},
           {country:  "SWE", value: 300},
           {country:  "SWIZ", value: 174},
           {country:  "UK", value: 99},
           {country:  "US", value: 367},
         ]
        }
      ]
    },
    {
      questionSet: "Other Measures",
      sectionData: [
        {
          qid:'1',
          "q": "Talked with provider about things in life that cause worry or stress in the past two years, among those with a history of mental illness",
          data:[
            {country: "AUS", value: 74},
            {country: "CAN", value: 63},
            {country: "FRA", value: 0},
            {country: "GER", value: 46},
            {country: "NETH", value: 62},
            {country: "NZ", value: 67},
            {country: "NOR", value: 62},
            {country: "SWE", value: 58},
            {country: "SWIZ", value: 72},
            {country: "UK", value: 58},
            {country: "US", value: 64},
          ],
        },
      ]
    }
  ]
}










































