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
      questionSet: "Preventative Care Measures",
      sectionData: [
        {
          'q': "Talked with provider about things in life that cause worry or stress in the past two years, among those with a history of mental illness",
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
          'q': "Talked with provider about healthy diet, exercise and physical activity in the past two years",
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
          'q': "Talked with provider about health risks of smoking and ways to quit in the past two years, among smokers",
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
          'q': "Talked with provider about alcohol use in the past two years",
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
          'q': "Women age 50-69 with mammography screening in the past year",
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
          'q': "Older adults (age 65 plus) with influenza vaccination in the past year",
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
          'q': "Avoidable hospital admissions for diabetes, age-sex standardized rates per 100,000",
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
          'q': "Avoidable hospital admissions for asthma, age-sex standardized rates per 100,000",
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
          'q': "Avoidable hospital admissions for congestive heart failure, age-sex standardized rates per 100,000",
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
      questionSet: "Safe Care",
      sectionData: [
        {
         'q': "Experienced a medical, medication, or lab mistake in the past two years ",
         data: [
           {country: "AUS", value: 11},
           {country: "CAN", value: 15},
           {country: "FRA", value: 8},
           {country: "GER", value: 7},
           {country: "NETH", value: 10},
           {country: "NZ", value: 16},
           {country: "NOR", value: 21},
           {country: "SWE", value: 17},
           {country: "SWIZ", value: 14},
           {country: "UK", value: 11},
           {country: "US", value: 19},
         ]
       },
       {
         'q': "Primary care physician reports electronic clinical decision support in practice",
         data: [
           {country: "AUS", value: 72},
           {country: "CAN", value: 28},
           {country: "FRA", value: 28},
           {country: "GER", value: 13},
           {country: "NETH", value: 22},
           {country: "NZ", value: 70},
           {country: "NOR", value: 28},
           {country: "SWE", value: 16},
           {country: "SWIZ", value: 13},
           {country: "UK", value: 81},
           {country: "US", value: 60},
         ]
       },
       {
         'q': "Health care professional did not review medications in past year, among those taking two or more prescription medications ",
         data: [
           {country: "AUS", value: 22},
           {country: "CAN", value: 22},
           {country: "FRA", value: 54},
           {country: "GER", value: 34},
           {country: "NETH", value: 27},
           {country: "NZ", value: 29},
           {country: "NOR", value: 45},
           {country: "SWE", value: 41},
           {country: "SWIZ", value: 36},
           {country: "UK", value: 21},
           {country: "US", value: 17},
         ]
       },
      ]
    },
    {
      questionSet: 'Coordinated Care',
      sectionData:[
        {
         'q': "Primary care doctor always or often receives timely and relevant information when needed after patient sees specialist",
         data: [
           {country: "AUS", value: 58},
           {country: "CAN", value: 61},
           {country: "FRA", value: 80},
           {country: "GER", value: 61},
           {country: "NETH", value: 63},
           {country: "NZ", value: 69},
           {country: "NOR", value: 66},
           {country: "SWE", value: 37},
           {country: "SWIZ", value: 78},
           {country: "UK", value: 47},
           {country: "US", value: 62},
         ]
       },
       {
         'q': "Primary care doctor is always or often informed of changes to a patient's medication or care plan after patient sees specialist ",
         data: [
           {country: "AUS", value: 83},
           {country: "CAN", value: 78},
           {country: "FRA", value: 94},
           {country: "GER", value: 73},
           {country: "NETH", value: 66},
           {country: "NZ", value: 94},
           {country: "NOR", value: 88},
           {country: "SWE", value: 53},
           {country: "SWIZ", value: 88},
           {country: "UK", value: 86},
           {country: "US", value: 72},
         ]
       },
       {
         'q': "Specialist lacked medical history or regular doctor not informed about specialist care in the past two years",
         data: [
           {country: "AUS", value: 20},
           {country: "CAN", value: 27},
           {country: "FRA", value: 25},
           {country: "GER", value: 19},
           {country: "NETH", value: 28},
           {country: "NZ", value: 17},
           {country: "NOR", value: 36},
           {country: "SWE", value: 31},
           {country: "SWIZ", value: 27},
           {country: "UK", value: 21},
           {country: "US", value: 31},
         ]
       },
       {
         'q': "Experienced gaps in hospital discharge planning in the past two years",
         data: [
           {country: "AUS", value: 29},
           {country: "CAN", value: 40},
           {country: "FRA", value: 60},
           {country: "GER", value: 28},
           {country: "NETH", value: 47},
           {country: "NZ", value: 31},
           {country: "NOR", value: 61},
           {country: "SWE", value: 52},
           {country: "SWIZ", value: 45},
           {country: "UK", value: 28},
           {country: "US", value: 22},
         ]
       },
       {
         'q': "Doctor is always notified when patient is seen in ED and when patient is discharged from the hospital ",
         data: [
           {country: "AUS", value: 14},
           {country: "CAN", value: 23},
           {country: "FRA", value: 16},
           {country: "GER", value: 16},
           {country: "NETH", value: 59},
           {country: "NZ", value: 43},
           {country: "NOR", value: 25},
           {country: "SWE", value: 4},
           {country: "SWIZ", value: 21},
           {country: "UK", value: 32},
           {country: "US", value: 26},
         ]
       },
       {
         'q': "Practice routinely communicates with home care provider about patient's needs and services ",
         data: [
           {country: "AUS", value: 29},
           {country: "CAN", value: 32},
           {country: "FRA", value: 36},
           {country: "GER", value: 51},
           {country: "NETH", value: 56},
           {country: "NZ", value: 28},
           {country: "NOR", value: 63},
           {country: "SWE", value: 53},
           {country: "SWIZ", value: 55},
           {country: "UK", value: 34},
           {country: "US", value: 52},
         ]
       },
       {
         'q': "Practice frequently coordinates care with social services or community providers ",
         data: [
           {country: "AUS", value: 45},
           {country: "CAN", value: 50},
           {country: "FRA", value: 35},
           {country: "GER", value: 63},
           {country: "NETH", value: 42},
           {country: "NZ", value: 58},
           {country: "NOR", value: 51},
           {country: "SWE", value: 42},
           {country: "SWIZ", value: 60},
           {country: "UK", value: 65},
           {country: "US", value: 43},
         ]
       }
      ]
    },
    {
      questionSet: 'Engagement and Patient Preferences',
      sectionData:[
        {
         'q': "Regular doctor always or often knew important information about their medical history ",
         data: [
           {country: "AUS", value: 79},
           {country: "CAN", value: 83},
           {country: "FRA", value: 75},
           {country: "GER", value: 89},
           {country: "NETH", value: 91},
           {country: "NZ", value: 86},
           {country: "NOR", value: 74},
           {country: "SWE", value: 57},
           {country: "SWIZ", value: 77},
           {country: "UK", value: 84},
           {country: "US", value: 81},
         ]
       },
       {
         'q': "Regular doctor always or often spent enough time with them and explained things in a way they could understand",
         data: [
           {country: "AUS", value: 88},
           {country: "CAN", value: 74},
           {country: "FRA", value: 64},
           {country: "GER", value: 78},
           {country: "NETH", value: 88},
           {country: "NZ", value: 83},
           {country: "NOR", value: 70},
           {country: "SWE", value: 62},
           {country: "SWIZ", value: 79},
           {country: "UK", value: 79},
           {country: "US", value: 77},
         ]
       },
       {
         'q': "With same doctor for five years or more",
         data: [
           {country: "AUS", value: 61},
           {country: "CAN", value: 63},
           {country: "FRA", value: 42},
           {country: "GER", value: 65},
           {country: "NETH", value: 76},
           {country: "NZ", value: 67},
           {country: "NOR", value: 60},
           {country: "SWE", value: 54},
           {country: "SWIZ", value: 63},
           {country: "UK", value: 69},
           {country: "US", value: 49},
         ]
       },
       {
         'q': "Specialist always or often told patient about treatment choices and involved patient in decisions about care and treatment, among adults age 65 and older",
         data: [
           {country: "AUS", value: 74},
           {country: "CAN", value: 66},
           {country: "FRA", value: 62},
           {country: "GER", value: 58},
           {country: "NETH", value: 67},
           {country: "NZ", value: 63},
           {country: "NOR", value: 40},
           {country: "SWE", value: 50},
           {country: "SWIZ", value: 64},
           {country: "UK", value: 79},
           {country: "US", value: 81},
         ]
       },
       {
         'q': "Doctors always treated the patient with courtesy and respect during their hospital stay",
         data: [
           {country: "AUS", value: 80},
           {country: "CAN", value: 73},
           {country: "FRA", value: 69},
           {country: "GER", value: 48},
           {country: "NETH", value: 79},
           {country: "NZ", value: 80},
           {country: "NOR", value: 73},
           {country: "SWE", value: 75},
           {country: "SWIZ", value: 72},
           {country: "UK", value: 76},
           {country: "US", value: 74},
         ]
       },
       {
         'q': "Nurses always treated the patient with courtesy and respect during their hospital stay",
         data: [
           {country: "AUS", value: 81},
           {country: "CAN", value: 65},
           {country: "FRA", value: 51},
           {country: "GER", value: 52},
           {country: "NETH", value: 81},
           {country: "NZ", value: 74},
           {country: "NOR", value: 76},
           {country: "SWE", value: 80},
           {country: "SWIZ", value: 69},
           {country: "UK", value: 81},
           {country: "US", value: 71},
         ]
       },
       {
         'q': "Chronically ill patients discussed with health professional their main goals and priorities in caring for their condition in the past two years",
         data: [
           {country: "AUS", value: 71},
           {country: "CAN", value: 56},
           {country: "FRA", value: 66},
           {country: "GER", value: 67},
           {country: "NETH", value: 59},
           {country: "NZ", value: 62},
           {country: "NOR", value: 41},
           {country: "SWE", value: 26},
           {country: "SWIZ", value: 64},
           {country: "UK", value: 61},
           {country: "US", value: 63},
         ]
       },
       {
         'q': "Chronically ill patients discussed with health professional their treatment options, including side effects in the past two years",
         data: [
           {country: "AUS", value: 67},
           {country: "CAN", value: 57},
           {country: "FRA", value: 61},
           {country: "GER", value: 60},
           {country: "NETH", value: 57},
           {country: "NZ", value: 62},
           {country: "NOR", value: 32},
           {country: "SWE", value: 30},
           {country: "SWIZ", value: 59},
           {country: "UK", value: 54},
           {country: "US", value: 60},
         ]
       },
       {
         'q': "Had a written plan describing treatment they want at the end of life, among adults age 65 and older ",
         data: [
           {country: "AUS", value: 31},
           {country: "CAN", value: 46},
           {country: "FRA", value: 5},
           {country: "GER", value: 58},
           {country: "NETH", value: 16},
           {country: "NZ", value: 23},
           {country: "NOR", value: 4},
           {country: "SWE", value: 5},
           {country: "SWIZ", value: 25},
           {country: "UK", value: 20},
           {country: "US", value: 55},
         ]
       },
       {
         'q': "Had a written plan naming someone to make treatment decisions for them if they cannot do so, among adults age 65 and older ",
         data: [
           {country: "AUS", value: 53},
           {country: "CAN", value: 62},
           {country: "FRA", value: 16},
           {country: "GER", value: 58},
           {country: "NETH", value: 16},
           {country: "NZ", value: 38},
           {country: "NOR", value: 6},
           {country: "SWE", value: 8},
           {country: "SWIZ", value: 28},
           {country: "UK", value: 47},
           {country: "US", value: 67},
         ]
       }
      ]
    }
  ]
}







































