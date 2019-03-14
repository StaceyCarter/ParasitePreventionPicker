// Contains data for all diseases, for each state. Individual county data not included.

export const giantArrayOfDiseases = [
  [
    "Lyme",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 28,
          tested: 7512,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 269 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 45,
          tested: 9633,
          risk: "low",
          percentage: 0.47,
          ratio: { is: 1, of: 215 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 9,
          tested: 4721,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 525 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 276,
          tested: 35518,
          risk: "medium",
          percentage: 0.78,
          ratio: { is: 1, of: 129 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 24,
          tested: 5415,
          risk: "low",
          percentage: 0.44,
          ratio: { is: 1, of: 226 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3053,
          tested: 20885,
          risk: "high",
          percentage: 14.62,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 275,
          tested: 5117,
          risk: "high",
          percentage: 5.37,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 146,
          tested: 2146,
          risk: "high",
          percentage: 6.8,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 446,
          tested: 50871,
          risk: "medium",
          percentage: 0.88,
          ratio: { is: 1, of: 115 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 77,
          tested: 21251,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 276 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3,
          tested: 1613,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 538 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 16,
          tested: 1373,
          risk: "medium",
          percentage: 1.17,
          ratio: { is: 1, of: 86 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1134,
          tested: 43203,
          risk: "medium",
          percentage: 2.62,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 798,
          tested: 20743,
          risk: "medium",
          percentage: 3.85,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 504,
          tested: 13714,
          risk: "medium",
          percentage: 3.68,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 15,
          tested: 6879,
          risk: "low",
          percentage: 0.22,
          ratio: { is: 1, of: 459 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 233,
          tested: 10089,
          risk: "medium",
          percentage: 2.31,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3,
          tested: 2628,
          risk: "low",
          percentage: 0.11,
          ratio: { is: 1, of: 876 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1960,
          tested: 13829,
          risk: "high",
          percentage: 14.17,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2028,
          tested: 32185,
          risk: "high",
          percentage: 6.3,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 5931,
          tested: 44147,
          risk: "high",
          percentage: 13.43,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 642,
          tested: 42053,
          risk: "medium",
          percentage: 1.53,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1407,
          tested: 21574,
          risk: "high",
          percentage: 6.52,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 7,
          tested: 2513,
          risk: "low",
          percentage: 0.28,
          ratio: { is: 1, of: 359 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 39,
          tested: 13033,
          risk: "low",
          percentage: 0.3,
          ratio: { is: 1, of: 335 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2,
          tested: 97,
          risk: "medium",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 9,
          tested: 1585,
          risk: "medium",
          percentage: 0.57,
          ratio: { is: 1, of: 177 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 4,
          tested: 585,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 147 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1611,
          tested: 13032,
          risk: "high",
          percentage: 12.36,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2989,
          tested: 32215,
          risk: "high",
          percentage: 9.28,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 0,
          tested: 1981,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 5635,
          tested: 54270,
          risk: "high",
          percentage: 10.38,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1326,
          tested: 55767,
          risk: "medium",
          percentage: 2.38,
          ratio: { is: 1, of: 43 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 75,
          tested: 1869,
          risk: "medium",
          percentage: 4.01,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1039,
          tested: 45128,
          risk: "medium",
          percentage: 2.3,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 15,
          tested: 8094,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 540 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 17,
          tested: 2878,
          risk: "medium",
          percentage: 0.59,
          ratio: { is: 1, of: 170 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 7433,
          tested: 59389,
          risk: "high",
          percentage: 12.52,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 459,
          tested: 4028,
          risk: "high",
          percentage: 11.4,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 171,
          tested: 13927,
          risk: "medium",
          percentage: 1.23,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 13,
          tested: 1508,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 106,
          tested: 13246,
          risk: "medium",
          percentage: 0.8,
          ratio: { is: 1, of: 125 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 97,
          tested: 48162,
          risk: "low",
          percentage: 0.2,
          ratio: { is: 1, of: 497 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 4,
          tested: 208,
          risk: "medium",
          percentage: 1.92,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 706,
          tested: 5035,
          risk: "high",
          percentage: 14.02,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3998,
          tested: 54607,
          risk: "high",
          percentage: 7.32,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 10,
          tested: 1502,
          risk: "medium",
          percentage: 0.67,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 856,
          tested: 7084,
          risk: "high",
          percentage: 12.08,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2008,
          tested: 28641,
          risk: "high",
          percentage: 7.01,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2,
          tested: 254,
          risk: "medium",
          percentage: 0.79,
          ratio: { is: 1, of: 127 }
        },
        thresholds: { high: 5, medium: 0.5 }
      }
    ]
  ],
  [
    "Anaplasmosis",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 241,
          tested: 7512,
          risk: "high",
          percentage: 3.21,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 299,
          tested: 9633,
          risk: "high",
          percentage: 3.1,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 867,
          tested: 4721,
          risk: "high",
          percentage: 18.36,
          ratio: { is: 1, of: 6 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 406,
          tested: 35518,
          risk: "medium",
          percentage: 1.14,
          ratio: { is: 1, of: 88 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 134,
          tested: 5415,
          risk: "high",
          percentage: 2.47,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 380,
          tested: 20790,
          risk: "high",
          percentage: 1.83,
          ratio: { is: 1, of: 55 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 313,
          tested: 5117,
          risk: "high",
          percentage: 6.12,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 100,
          tested: 2146,
          risk: "high",
          percentage: 4.66,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 919,
          tested: 50871,
          risk: "high",
          percentage: 1.81,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 797,
          tested: 21250,
          risk: "high",
          percentage: 3.75,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 38,
          tested: 1613,
          risk: "high",
          percentage: 2.36,
          ratio: { is: 1, of: 43 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 27,
          tested: 1373,
          risk: "high",
          percentage: 1.97,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 947,
          tested: 43203,
          risk: "high",
          percentage: 2.19,
          ratio: { is: 1, of: 46 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 428,
          tested: 20743,
          risk: "high",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 183,
          tested: 13693,
          risk: "medium",
          percentage: 1.34,
          ratio: { is: 1, of: 75 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 308,
          tested: 6879,
          risk: "high",
          percentage: 4.48,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 668,
          tested: 10089,
          risk: "high",
          percentage: 6.62,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 47,
          tested: 2628,
          risk: "high",
          percentage: 1.79,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 213,
          tested: 13829,
          risk: "high",
          percentage: 1.54,
          ratio: { is: 1, of: 65 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1514,
          tested: 32185,
          risk: "high",
          percentage: 4.7,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 829,
          tested: 44147,
          risk: "high",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 331,
          tested: 42053,
          risk: "medium",
          percentage: 0.79,
          ratio: { is: 1, of: 128 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 294,
          tested: 21574,
          risk: "medium",
          percentage: 1.36,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 200,
          tested: 2513,
          risk: "high",
          percentage: 7.96,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1213,
          tested: 13033,
          risk: "high",
          percentage: 9.31,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1,
          tested: 97,
          risk: "medium",
          percentage: 1.03,
          ratio: { is: 1, of: 97 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 28,
          tested: 1585,
          risk: "high",
          percentage: 1.77,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 5,
          tested: 585,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 222,
          tested: 13032,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1121,
          tested: 32097,
          risk: "high",
          percentage: 3.49,
          ratio: { is: 1, of: 29 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 54,
          tested: 1981,
          risk: "high",
          percentage: 2.73,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 941,
          tested: 54270,
          risk: "high",
          percentage: 1.73,
          ratio: { is: 1, of: 58 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 3116,
          tested: 55767,
          risk: "high",
          percentage: 5.59,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 8,
          tested: 1869,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 234 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 554,
          tested: 45128,
          risk: "medium",
          percentage: 1.23,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 683,
          tested: 8094,
          risk: "high",
          percentage: 8.44,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 25,
          tested: 2878,
          risk: "medium",
          percentage: 0.87,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 719,
          tested: 59389,
          risk: "medium",
          percentage: 1.21,
          ratio: { is: 1, of: 83 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 70,
          tested: 4028,
          risk: "high",
          percentage: 1.74,
          ratio: { is: 1, of: 58 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 372,
          tested: 13927,
          risk: "high",
          percentage: 2.67,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 10,
          tested: 1508,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1036,
          tested: 13246,
          risk: "high",
          percentage: 7.82,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1030,
          tested: 48162,
          risk: "high",
          percentage: 2.14,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1,
          tested: 208,
          risk: "low",
          percentage: 0.48,
          ratio: { is: 1, of: 208 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 67,
          tested: 5035,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 4985,
          tested: 54607,
          risk: "high",
          percentage: 9.13,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 25,
          tested: 1502,
          risk: "high",
          percentage: 1.66,
          ratio: { is: 1, of: 61 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 112,
          tested: 7084,
          risk: "high",
          percentage: 1.58,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 410,
          tested: 28641,
          risk: "medium",
          percentage: 1.43,
          ratio: { is: 1, of: 70 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 12,
          tested: 254,
          risk: "high",
          percentage: 4.72,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      }
    ]
  ],
  [
    "Erlichiosis",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 19,
          tested: 7457,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 393 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 57,
          tested: 9632,
          risk: "low",
          percentage: 0.59,
          ratio: { is: 1, of: 169 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 17,
          tested: 4720,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 278 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 434,
          tested: 35508,
          risk: "medium",
          percentage: 1.22,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 36,
          tested: 5414,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3169,
          tested: 20790,
          risk: "high",
          percentage: 15.24,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 68,
          tested: 5117,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 33,
          tested: 2146,
          risk: "high",
          percentage: 1.54,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 321,
          tested: 50857,
          risk: "medium",
          percentage: 0.63,
          ratio: { is: 1, of: 159 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 58,
          tested: 21249,
          risk: "low",
          percentage: 0.27,
          ratio: { is: 1, of: 367 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 7,
          tested: 1612,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 231 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 1373,
          risk: "low",
          percentage: 0.44,
          ratio: { is: 1, of: 229 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 257,
          tested: 43203,
          risk: "low",
          percentage: 0.59,
          ratio: { is: 1, of: 169 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 104,
          tested: 20743,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 200 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 59,
          tested: 13693,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 233 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 23,
          tested: 6879,
          risk: "low",
          percentage: 0.33,
          ratio: { is: 1, of: 300 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 26,
          tested: 10016,
          risk: "low",
          percentage: 0.26,
          ratio: { is: 1, of: 386 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 11,
          tested: 2624,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 239 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1963,
          tested: 13829,
          risk: "high",
          percentage: 14.19,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 455,
          tested: 32185,
          risk: "high",
          percentage: 1.41,
          ratio: { is: 1, of: 71 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 5615,
          tested: 44147,
          risk: "high",
          percentage: 12.72,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 182,
          tested: 42048,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 232 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1138,
          tested: 21574,
          risk: "high",
          percentage: 5.27,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 2512,
          risk: "low",
          percentage: 0.24,
          ratio: { is: 1, of: 419 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 24,
          tested: 12822,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 535 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2,
          tested: 97,
          risk: "high",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 5,
          tested: 1582,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 317 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 583,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1647,
          tested: 13032,
          risk: "high",
          percentage: 12.64,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2167,
          tested: 32097,
          risk: "high",
          percentage: 6.75,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 10,
          tested: 1980,
          risk: "low",
          percentage: 0.51,
          ratio: { is: 1, of: 198 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3584,
          tested: 54270,
          risk: "high",
          percentage: 6.6,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 230,
          tested: 55761,
          risk: "low",
          percentage: 0.41,
          ratio: { is: 1, of: 243 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 50,
          tested: 1869,
          risk: "high",
          percentage: 2.68,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 144,
          tested: 45122,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 314 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 21,
          tested: 8094,
          risk: "low",
          percentage: 0.26,
          ratio: { is: 1, of: 386 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 43,
          tested: 2878,
          risk: "high",
          percentage: 1.49,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2727,
          tested: 59365,
          risk: "high",
          percentage: 4.59,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 407,
          tested: 4028,
          risk: "high",
          percentage: 10.1,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 58,
          tested: 13923,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 241 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 1508,
          risk: "low",
          percentage: 0.4,
          ratio: { is: 1, of: 252 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 33,
          tested: 13226,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 401 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 330,
          tested: 48139,
          risk: "medium",
          percentage: 0.69,
          ratio: { is: 1, of: 146 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 208,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 530,
          tested: 5035,
          risk: "high",
          percentage: 10.53,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 582,
          tested: 54561,
          risk: "medium",
          percentage: 1.07,
          ratio: { is: 1, of: 94 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 14,
          tested: 1502,
          risk: "medium",
          percentage: 0.93,
          ratio: { is: 1, of: 108 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 93,
          tested: 7084,
          risk: "medium",
          percentage: 1.31,
          ratio: { is: 1, of: 77 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1391,
          tested: 28641,
          risk: "high",
          percentage: 4.86,
          ratio: { is: 1, of: 21 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3,
          tested: 254,
          risk: "medium",
          percentage: 1.18,
          ratio: { is: 1, of: 85 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      }
    ]
  ],
  [
    "Roundworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 110,
          tested: 5365,
          risk: "medium",
          percentage: 2.05,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 48,
          tested: 1301,
          risk: "high",
          percentage: 3.69,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 259,
          tested: 21206,
          risk: "low",
          percentage: 1.22,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 33,
          tested: 1737,
          risk: "medium",
          percentage: 1.9,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 2890,
          tested: 128830,
          risk: "medium",
          percentage: 2.24,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 389,
          tested: 19484,
          risk: "medium",
          percentage: 2,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 667,
          tested: 33534,
          risk: "medium",
          percentage: 1.99,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 137,
          tested: 5093,
          risk: "high",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 55,
          tested: 3711,
          risk: "low",
          percentage: 1.48,
          ratio: { is: 1, of: 68 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 729,
          tested: 78993,
          risk: "low",
          percentage: 0.92,
          ratio: { is: 1, of: 109 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 680,
          tested: 34737,
          risk: "medium",
          percentage: 1.96,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 77,
          tested: 6072,
          risk: "low",
          percentage: 1.27,
          ratio: { is: 1, of: 79 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 82,
          tested: 2659,
          risk: "high",
          percentage: 3.08,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1258,
          tested: 55170,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 859,
          tested: 24523,
          risk: "high",
          percentage: 3.5,
          ratio: { is: 1, of: 29 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 175,
          tested: 6859,
          risk: "high",
          percentage: 2.55,
          ratio: { is: 1, of: 40 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 148,
          tested: 7514,
          risk: "medium",
          percentage: 1.97,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 231,
          tested: 7867,
          risk: "high",
          percentage: 2.94,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 148,
          tested: 8591,
          risk: "low",
          percentage: 1.72,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 202,
          tested: 6389,
          risk: "high",
          percentage: 3.16,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 976,
          tested: 34984,
          risk: "high",
          percentage: 2.79,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 952,
          tested: 48851,
          risk: "medium",
          percentage: 1.95,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1144,
          tested: 40861,
          risk: "high",
          percentage: 2.8,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 336,
          tested: 12475,
          risk: "high",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 48,
          tested: 1115,
          risk: "high",
          percentage: 4.3,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 416,
          tested: 15614,
          risk: "high",
          percentage: 2.66,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 52,
          tested: 1362,
          risk: "high",
          percentage: 3.82,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 70,
          tested: 3720,
          risk: "medium",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 204,
          tested: 17651,
          risk: "low",
          percentage: 1.16,
          ratio: { is: 1, of: 87 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 266,
          tested: 11994,
          risk: "medium",
          percentage: 2.22,
          ratio: { is: 1, of: 46 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1276,
          tested: 55289,
          risk: "medium",
          percentage: 2.31,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 53,
          tested: 3249,
          risk: "low",
          percentage: 1.63,
          ratio: { is: 1, of: 62 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1821,
          tested: 79076,
          risk: "medium",
          percentage: 2.3,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 683,
          tested: 36189,
          risk: "medium",
          percentage: 1.89,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 31,
          tested: 862,
          risk: "high",
          percentage: 3.6,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1199,
          tested: 38208,
          risk: "high",
          percentage: 3.14,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 125,
          tested: 4851,
          risk: "high",
          percentage: 2.58,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 350,
          tested: 15320,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1836,
          tested: 58324,
          risk: "high",
          percentage: 3.15,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 202,
          tested: 6867,
          risk: "high",
          percentage: 2.94,
          ratio: { is: 1, of: 34 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 332,
          tested: 19664,
          risk: "low",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 63,
          tested: 1139,
          risk: "high",
          percentage: 5.53,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 334,
          tested: 10697,
          risk: "high",
          percentage: 3.12,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1212,
          tested: 81201,
          risk: "low",
          percentage: 1.49,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 84,
          tested: 4441,
          risk: "medium",
          percentage: 1.89,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 108,
          tested: 4182,
          risk: "high",
          percentage: 2.58,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1035,
          tested: 48408,
          risk: "medium",
          percentage: 2.14,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 803,
          tested: 30849,
          risk: "high",
          percentage: 2.6,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 97,
          tested: 1752,
          risk: "high",
          percentage: 5.54,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 560,
          tested: 19753,
          risk: "high",
          percentage: 2.84,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 24,
          tested: 462,
          risk: "high",
          percentage: 5.19,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      }
    ]
  ],
  [
    "Hookworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 272,
          tested: 5365,
          risk: "high",
          percentage: 5.07,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 21,
          tested: 1301,
          risk: "medium",
          percentage: 1.61,
          ratio: { is: 1, of: 62 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 236,
          tested: 21206,
          risk: "low",
          percentage: 1.11,
          ratio: { is: 1, of: 90 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 71,
          tested: 1737,
          risk: "high",
          percentage: 4.09,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 951,
          tested: 128830,
          risk: "low",
          percentage: 0.74,
          ratio: { is: 1, of: 136 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 420,
          tested: 19484,
          risk: "medium",
          percentage: 2.16,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 712,
          tested: 33534,
          risk: "medium",
          percentage: 2.12,
          ratio: { is: 1, of: 48 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 140,
          tested: 5093,
          risk: "medium",
          percentage: 2.75,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 150,
          tested: 3711,
          risk: "high",
          percentage: 4.04,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 4567,
          tested: 78993,
          risk: "high",
          percentage: 5.78,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1184,
          tested: 34737,
          risk: "medium",
          percentage: 3.41,
          ratio: { is: 1, of: 30 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 120,
          tested: 6072,
          risk: "medium",
          percentage: 1.98,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 20,
          tested: 2659,
          risk: "low",
          percentage: 0.75,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1133,
          tested: 55170,
          risk: "medium",
          percentage: 2.05,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 616,
          tested: 24523,
          risk: "medium",
          percentage: 2.51,
          ratio: { is: 1, of: 40 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 108,
          tested: 6859,
          risk: "medium",
          percentage: 1.57,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 186,
          tested: 7514,
          risk: "medium",
          percentage: 2.48,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 334,
          tested: 7867,
          risk: "high",
          percentage: 4.25,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 431,
          tested: 8591,
          risk: "high",
          percentage: 5.02,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 179,
          tested: 6389,
          risk: "medium",
          percentage: 2.8,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1018,
          tested: 34984,
          risk: "medium",
          percentage: 2.91,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1040,
          tested: 48851,
          risk: "medium",
          percentage: 2.13,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 559,
          tested: 40861,
          risk: "low",
          percentage: 1.37,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 254,
          tested: 12475,
          risk: "medium",
          percentage: 2.04,
          ratio: { is: 1, of: 50 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 69,
          tested: 1115,
          risk: "high",
          percentage: 6.19,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 448,
          tested: 15614,
          risk: "medium",
          percentage: 2.87,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 11,
          tested: 1362,
          risk: "low",
          percentage: 0.81,
          ratio: { is: 1, of: 124 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 43,
          tested: 3720,
          risk: "low",
          percentage: 1.16,
          ratio: { is: 1, of: 87 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 89,
          tested: 17651,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 199 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 258,
          tested: 11994,
          risk: "medium",
          percentage: 2.15,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1258,
          tested: 55289,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 61,
          tested: 3249,
          risk: "medium",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1637,
          tested: 79076,
          risk: "medium",
          percentage: 2.07,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1517,
          tested: 36189,
          risk: "high",
          percentage: 4.19,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 7,
          tested: 862,
          risk: "low",
          percentage: 0.81,
          ratio: { is: 1, of: 124 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1028,
          tested: 38208,
          risk: "medium",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 298,
          tested: 4851,
          risk: "high",
          percentage: 6.14,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 270,
          tested: 15320,
          risk: "medium",
          percentage: 1.76,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1612,
          tested: 58324,
          risk: "medium",
          percentage: 2.76,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 168,
          tested: 6867,
          risk: "medium",
          percentage: 2.45,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 864,
          tested: 19664,
          risk: "high",
          percentage: 4.39,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 20,
          tested: 1139,
          risk: "medium",
          percentage: 1.76,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 552,
          tested: 10697,
          risk: "high",
          percentage: 5.16,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 3651,
          tested: 81201,
          risk: "high",
          percentage: 4.5,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 22,
          tested: 4441,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 202 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 164,
          tested: 4182,
          risk: "medium",
          percentage: 3.92,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1641,
          tested: 48408,
          risk: "medium",
          percentage: 3.39,
          ratio: { is: 1, of: 30 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 510,
          tested: 30849,
          risk: "medium",
          percentage: 1.65,
          ratio: { is: 1, of: 61 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 131,
          tested: 1752,
          risk: "high",
          percentage: 7.48,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 459,
          tested: 19753,
          risk: "medium",
          percentage: 2.32,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 7,
          tested: 462,
          risk: "medium",
          percentage: 1.52,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 4, medium: 1.5 }
      }
    ]
  ],
  [
    "Whipworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 50,
          tested: 5365,
          risk: "medium",
          percentage: 0.93,
          ratio: { is: 1, of: 108 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 4,
          tested: 1301,
          risk: "low",
          percentage: 0.31,
          ratio: { is: 1, of: 326 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 32,
          tested: 21206,
          risk: "low",
          percentage: 0.15,
          ratio: { is: 1, of: 663 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 32,
          tested: 1737,
          risk: "high",
          percentage: 1.84,
          ratio: { is: 1, of: 55 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 303,
          tested: 128830,
          risk: "low",
          percentage: 0.24,
          ratio: { is: 1, of: 426 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 109,
          tested: 19484,
          risk: "medium",
          percentage: 0.56,
          ratio: { is: 1, of: 179 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 268,
          tested: 33534,
          risk: "medium",
          percentage: 0.8,
          ratio: { is: 1, of: 126 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 69,
          tested: 5093,
          risk: "high",
          percentage: 1.35,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 34,
          tested: 3711,
          risk: "medium",
          percentage: 0.92,
          ratio: { is: 1, of: 110 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 288,
          tested: 78993,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 275 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 321,
          tested: 34737,
          risk: "medium",
          percentage: 0.92,
          ratio: { is: 1, of: 109 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 10,
          tested: 6072,
          risk: "low",
          percentage: 0.16,
          ratio: { is: 1, of: 608 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 8,
          tested: 2659,
          risk: "low",
          percentage: 0.3,
          ratio: { is: 1, of: 333 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 516,
          tested: 55170,
          risk: "medium",
          percentage: 0.94,
          ratio: { is: 1, of: 107 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 316,
          tested: 24523,
          risk: "high",
          percentage: 1.29,
          ratio: { is: 1, of: 78 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 48,
          tested: 6859,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 143 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 71,
          tested: 7514,
          risk: "medium",
          percentage: 0.94,
          ratio: { is: 1, of: 106 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 133,
          tested: 7867,
          risk: "high",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 61,
          tested: 8591,
          risk: "medium",
          percentage: 0.71,
          ratio: { is: 1, of: 141 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 55,
          tested: 6389,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 343,
          tested: 34984,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 102 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 340,
          tested: 48851,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 144 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 345,
          tested: 40861,
          risk: "medium",
          percentage: 0.84,
          ratio: { is: 1, of: 119 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 73,
          tested: 12475,
          risk: "medium",
          percentage: 0.59,
          ratio: { is: 1, of: 171 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 19,
          tested: 1115,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 264,
          tested: 15614,
          risk: "high",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 2,
          tested: 1362,
          risk: "low",
          percentage: 0.15,
          ratio: { is: 1, of: 681 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 3720,
          risk: "low",
          percentage: 0.46,
          ratio: { is: 1, of: 219 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 17651,
          risk: "low",
          percentage: 0.1,
          ratio: { is: 1, of: 1039 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 61,
          tested: 11994,
          risk: "medium",
          percentage: 0.51,
          ratio: { is: 1, of: 197 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 349,
          tested: 55289,
          risk: "medium",
          percentage: 0.63,
          ratio: { is: 1, of: 159 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 8,
          tested: 3249,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 407 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 544,
          tested: 79076,
          risk: "medium",
          percentage: 0.69,
          ratio: { is: 1, of: 146 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 448,
          tested: 36189,
          risk: "high",
          percentage: 1.24,
          ratio: { is: 1, of: 81 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 0,
          tested: 862,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 573,
          tested: 38208,
          risk: "high",
          percentage: 1.5,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 87,
          tested: 4851,
          risk: "high",
          percentage: 1.79,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 49,
          tested: 15320,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 313 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 698,
          tested: 58324,
          risk: "high",
          percentage: 1.2,
          ratio: { is: 1, of: 84 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 52,
          tested: 6867,
          risk: "medium",
          percentage: 0.76,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 170,
          tested: 19664,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 13,
          tested: 1139,
          risk: "high",
          percentage: 1.14,
          ratio: { is: 1, of: 88 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 182,
          tested: 10697,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 555,
          tested: 81201,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 147 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 4441,
          risk: "low",
          percentage: 0.38,
          ratio: { is: 1, of: 262 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 43,
          tested: 4182,
          risk: "high",
          percentage: 1.03,
          ratio: { is: 1, of: 98 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 473,
          tested: 48408,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 103 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 115,
          tested: 30849,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 269 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 40,
          tested: 1752,
          risk: "high",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 139,
          tested: 19753,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 143 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 3,
          tested: 462,
          risk: "medium",
          percentage: 0.65,
          ratio: { is: 1, of: 154 }
        },
        thresholds: { high: 1, medium: 0.5 }
      }
    ]
  ],
  [
    "Giardia",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 265,
          tested: 6050,
          risk: "medium",
          percentage: 4.38,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 179,
          tested: 1962,
          risk: "high",
          percentage: 9.12,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4213,
          tested: 26286,
          risk: "high",
          percentage: 16.03,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 113,
          tested: 2355,
          risk: "medium",
          percentage: 4.8,
          ratio: { is: 1, of: 21 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 19953,
          tested: 170713,
          risk: "high",
          percentage: 11.69,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3324,
          tested: 25425,
          risk: "high",
          percentage: 13.07,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3672,
          tested: 42619,
          risk: "high",
          percentage: 8.62,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 518,
          tested: 6296,
          risk: "high",
          percentage: 8.23,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 414,
          tested: 4012,
          risk: "high",
          percentage: 10.32,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3664,
          tested: 94469,
          risk: "low",
          percentage: 3.88,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2445,
          tested: 41871,
          risk: "medium",
          percentage: 5.84,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 323,
          tested: 8505,
          risk: "low",
          percentage: 3.8,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 242,
          tested: 2897,
          risk: "high",
          percentage: 8.35,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4980,
          tested: 60235,
          risk: "high",
          percentage: 8.27,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2489,
          tested: 30332,
          risk: "high",
          percentage: 8.21,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 298,
          tested: 7031,
          risk: "medium",
          percentage: 4.24,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 584,
          tested: 8533,
          risk: "medium",
          percentage: 6.84,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 773,
          tested: 10054,
          risk: "high",
          percentage: 7.69,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 402,
          tested: 9290,
          risk: "medium",
          percentage: 4.33,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 559,
          tested: 6777,
          risk: "high",
          percentage: 8.25,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3459,
          tested: 44444,
          risk: "high",
          percentage: 7.78,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4605,
          tested: 58129,
          risk: "high",
          percentage: 7.92,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2504,
          tested: 44051,
          risk: "medium",
          percentage: 5.68,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1167,
          tested: 14198,
          risk: "high",
          percentage: 8.22,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 54,
          tested: 1274,
          risk: "medium",
          percentage: 4.24,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1197,
          tested: 17635,
          risk: "medium",
          percentage: 6.79,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 118,
          tested: 1578,
          risk: "high",
          percentage: 7.48,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 312,
          tested: 4399,
          risk: "high",
          percentage: 7.09,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1678,
          tested: 20750,
          risk: "high",
          percentage: 8.09,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1198,
          tested: 13781,
          risk: "high",
          percentage: 8.69,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5663,
          tested: 69579,
          risk: "high",
          percentage: 8.14,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 614,
          tested: 5008,
          risk: "high",
          percentage: 12.26,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 9079,
          tested: 100248,
          risk: "high",
          percentage: 9.06,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1629,
          tested: 40585,
          risk: "medium",
          percentage: 4.01,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 59,
          tested: 1041,
          risk: "medium",
          percentage: 5.67,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2613,
          tested: 41196,
          risk: "medium",
          percentage: 6.34,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 366,
          tested: 6049,
          risk: "medium",
          percentage: 6.05,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2353,
          tested: 20964,
          risk: "high",
          percentage: 11.22,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5047,
          tested: 68599,
          risk: "high",
          percentage: 7.36,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 922,
          tested: 8930,
          risk: "high",
          percentage: 10.32,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 851,
          tested: 20978,
          risk: "medium",
          percentage: 4.06,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 108,
          tested: 1225,
          risk: "high",
          percentage: 8.82,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 755,
          tested: 12740,
          risk: "medium",
          percentage: 5.93,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5264,
          tested: 94965,
          risk: "medium",
          percentage: 5.54,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 766,
          tested: 6472,
          risk: "high",
          percentage: 11.84,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 308,
          tested: 4647,
          risk: "medium",
          percentage: 6.63,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3283,
          tested: 57921,
          risk: "medium",
          percentage: 5.67,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4472,
          tested: 38043,
          risk: "high",
          percentage: 11.76,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 100,
          tested: 1810,
          risk: "medium",
          percentage: 5.52,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1562,
          tested: 21203,
          risk: "high",
          percentage: 7.37,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 72,
          tested: 504,
          risk: "high",
          percentage: 14.29,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 7, medium: 4 }
      }
    ]
  ],
  [
    "Heartworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 971,
          tested: 23358,
          risk: "high",
          percentage: 4.16,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 378,
          risk: "medium",
          percentage: 1.32,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 131,
          tested: 23822,
          risk: "medium",
          percentage: 0.55,
          ratio: { is: 1, of: 182 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 774,
          tested: 17017,
          risk: "high",
          percentage: 4.55,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 482,
          tested: 128825,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 268 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 257,
          tested: 30059,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 200,
          tested: 34366,
          risk: "medium",
          percentage: 0.58,
          ratio: { is: 1, of: 172 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 32,
          tested: 6847,
          risk: "low",
          percentage: 0.47,
          ratio: { is: 1, of: 214 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 27,
          tested: 2828,
          risk: "medium",
          percentage: 0.95,
          ratio: { is: 1, of: 105 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1842,
          tested: 154737,
          risk: "medium",
          percentage: 1.19,
          ratio: { is: 1, of: 85 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1420,
          tested: 62772,
          risk: "high",
          percentage: 2.26,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 37,
          tested: 6726,
          risk: "medium",
          percentage: 0.55,
          ratio: { is: 1, of: 182 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 2231,
          risk: "low",
          percentage: 0.22,
          ratio: { is: 1, of: 447 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 909,
          tested: 83886,
          risk: "medium",
          percentage: 1.08,
          ratio: { is: 1, of: 93 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 574,
          tested: 40967,
          risk: "medium",
          percentage: 1.4,
          ratio: { is: 1, of: 72 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 84,
          tested: 17541,
          risk: "low",
          percentage: 0.48,
          ratio: { is: 1, of: 209 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 109,
          tested: 13197,
          risk: "medium",
          percentage: 0.83,
          ratio: { is: 1, of: 122 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 242,
          tested: 18154,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1679,
          tested: 23287,
          risk: "high",
          percentage: 7.21,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 75,
          tested: 14133,
          risk: "medium",
          percentage: 0.53,
          ratio: { is: 1, of: 189 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 200,
          tested: 40630,
          risk: "low",
          percentage: 0.49,
          ratio: { is: 1, of: 204 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 416,
          tested: 62045,
          risk: "medium",
          percentage: 0.67,
          ratio: { is: 1, of: 150 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 555,
          tested: 73616,
          risk: "medium",
          percentage: 0.75,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 157,
          tested: 29254,
          risk: "medium",
          percentage: 0.54,
          ratio: { is: 1, of: 187 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 948,
          tested: 10651,
          risk: "high",
          percentage: 8.9,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 524,
          tested: 33161,
          risk: "high",
          percentage: 1.58,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 348,
          risk: "medium",
          percentage: 1.44,
          ratio: { is: 1, of: 70 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 46,
          tested: 6809,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 149 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 25,
          tested: 5607,
          risk: "low",
          percentage: 0.45,
          ratio: { is: 1, of: 225 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 106,
          tested: 16087,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 152 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 263,
          tested: 61914,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 236 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 59,
          tested: 5514,
          risk: "medium",
          percentage: 1.07,
          ratio: { is: 1, of: 94 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 446,
          tested: 90921,
          risk: "low",
          percentage: 0.49,
          ratio: { is: 1, of: 204 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1783,
          tested: 88711,
          risk: "high",
          percentage: 2.01,
          ratio: { is: 1, of: 50 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 7,
          tested: 2053,
          risk: "low",
          percentage: 0.34,
          ratio: { is: 1, of: 294 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 374,
          tested: 70458,
          risk: "medium",
          percentage: 0.53,
          ratio: { is: 1, of: 189 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 327,
          tested: 15180,
          risk: "high",
          percentage: 2.15,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 49,
          tested: 9652,
          risk: "medium",
          percentage: 0.51,
          ratio: { is: 1, of: 197 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 317,
          tested: 73524,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 232 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 44,
          tested: 7207,
          risk: "medium",
          percentage: 0.61,
          ratio: { is: 1, of: 164 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 869,
          tested: 38363,
          risk: "high",
          percentage: 2.27,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 6,
          tested: 2180,
          risk: "low",
          percentage: 0.28,
          ratio: { is: 1, of: 364 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1027,
          tested: 39564,
          risk: "high",
          percentage: 2.6,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5272,
          tested: 159489,
          risk: "high",
          percentage: 3.31,
          ratio: { is: 1, of: 31 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 24,
          tested: 2652,
          risk: "medium",
          percentage: 0.9,
          ratio: { is: 1, of: 111 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 53,
          tested: 5952,
          risk: "medium",
          percentage: 0.89,
          ratio: { is: 1, of: 113 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 710,
          tested: 72685,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 103 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 62,
          tested: 7256,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 118 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 34,
          tested: 7850,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 231 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 168,
          tested: 36275,
          risk: "low",
          percentage: 0.46,
          ratio: { is: 1, of: 216 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 7,
          tested: 735,
          risk: "medium",
          percentage: 0.95,
          ratio: { is: 1, of: 105 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      }
    ]
  ],
  [
    "Lyme",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 28,
          tested: 7512,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 269 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 45,
          tested: 9633,
          risk: "low",
          percentage: 0.47,
          ratio: { is: 1, of: 215 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 9,
          tested: 4721,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 525 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 276,
          tested: 35518,
          risk: "medium",
          percentage: 0.78,
          ratio: { is: 1, of: 129 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 24,
          tested: 5415,
          risk: "low",
          percentage: 0.44,
          ratio: { is: 1, of: 226 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3053,
          tested: 20885,
          risk: "high",
          percentage: 14.62,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 275,
          tested: 5117,
          risk: "high",
          percentage: 5.37,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 146,
          tested: 2146,
          risk: "high",
          percentage: 6.8,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 446,
          tested: 50871,
          risk: "medium",
          percentage: 0.88,
          ratio: { is: 1, of: 115 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 77,
          tested: 21251,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 276 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3,
          tested: 1613,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 538 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 16,
          tested: 1373,
          risk: "medium",
          percentage: 1.17,
          ratio: { is: 1, of: 86 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1134,
          tested: 43203,
          risk: "medium",
          percentage: 2.62,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 798,
          tested: 20743,
          risk: "medium",
          percentage: 3.85,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 504,
          tested: 13714,
          risk: "medium",
          percentage: 3.68,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 15,
          tested: 6879,
          risk: "low",
          percentage: 0.22,
          ratio: { is: 1, of: 459 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 233,
          tested: 10089,
          risk: "medium",
          percentage: 2.31,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3,
          tested: 2628,
          risk: "low",
          percentage: 0.11,
          ratio: { is: 1, of: 876 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1960,
          tested: 13829,
          risk: "high",
          percentage: 14.17,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2028,
          tested: 32185,
          risk: "high",
          percentage: 6.3,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 5931,
          tested: 44147,
          risk: "high",
          percentage: 13.43,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 642,
          tested: 42053,
          risk: "medium",
          percentage: 1.53,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1407,
          tested: 21574,
          risk: "high",
          percentage: 6.52,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 7,
          tested: 2513,
          risk: "low",
          percentage: 0.28,
          ratio: { is: 1, of: 359 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 39,
          tested: 13033,
          risk: "low",
          percentage: 0.3,
          ratio: { is: 1, of: 335 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2,
          tested: 97,
          risk: "medium",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 9,
          tested: 1585,
          risk: "medium",
          percentage: 0.57,
          ratio: { is: 1, of: 177 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 4,
          tested: 585,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 147 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1611,
          tested: 13032,
          risk: "high",
          percentage: 12.36,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2989,
          tested: 32215,
          risk: "high",
          percentage: 9.28,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 0,
          tested: 1981,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 5635,
          tested: 54270,
          risk: "high",
          percentage: 10.38,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1326,
          tested: 55767,
          risk: "medium",
          percentage: 2.38,
          ratio: { is: 1, of: 43 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 75,
          tested: 1869,
          risk: "medium",
          percentage: 4.01,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 1039,
          tested: 45128,
          risk: "medium",
          percentage: 2.3,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 15,
          tested: 8094,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 540 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 17,
          tested: 2878,
          risk: "medium",
          percentage: 0.59,
          ratio: { is: 1, of: 170 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 7433,
          tested: 59389,
          risk: "high",
          percentage: 12.52,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 459,
          tested: 4028,
          risk: "high",
          percentage: 11.4,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 171,
          tested: 13927,
          risk: "medium",
          percentage: 1.23,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 13,
          tested: 1508,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 106,
          tested: 13246,
          risk: "medium",
          percentage: 0.8,
          ratio: { is: 1, of: 125 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 97,
          tested: 48162,
          risk: "low",
          percentage: 0.2,
          ratio: { is: 1, of: 497 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 4,
          tested: 208,
          risk: "medium",
          percentage: 1.92,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 706,
          tested: 5035,
          risk: "high",
          percentage: 14.02,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 3998,
          tested: 54607,
          risk: "high",
          percentage: 7.32,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 10,
          tested: 1502,
          risk: "medium",
          percentage: 0.67,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 856,
          tested: 7084,
          risk: "high",
          percentage: 12.08,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2008,
          tested: 28641,
          risk: "high",
          percentage: 7.01,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 1
        },
        stats: {
          positive: 2,
          tested: 254,
          risk: "medium",
          percentage: 0.79,
          ratio: { is: 1, of: 127 }
        },
        thresholds: { high: 5, medium: 0.5 }
      }
    ]
  ],
  [
    "Anaplasmosis",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 241,
          tested: 7512,
          risk: "high",
          percentage: 3.21,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 299,
          tested: 9633,
          risk: "high",
          percentage: 3.1,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 867,
          tested: 4721,
          risk: "high",
          percentage: 18.36,
          ratio: { is: 1, of: 6 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 406,
          tested: 35518,
          risk: "medium",
          percentage: 1.14,
          ratio: { is: 1, of: 88 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 134,
          tested: 5415,
          risk: "high",
          percentage: 2.47,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 380,
          tested: 20790,
          risk: "high",
          percentage: 1.83,
          ratio: { is: 1, of: 55 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 313,
          tested: 5117,
          risk: "high",
          percentage: 6.12,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 100,
          tested: 2146,
          risk: "high",
          percentage: 4.66,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 919,
          tested: 50871,
          risk: "high",
          percentage: 1.81,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 797,
          tested: 21250,
          risk: "high",
          percentage: 3.75,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 38,
          tested: 1613,
          risk: "high",
          percentage: 2.36,
          ratio: { is: 1, of: 43 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 27,
          tested: 1373,
          risk: "high",
          percentage: 1.97,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 947,
          tested: 43203,
          risk: "high",
          percentage: 2.19,
          ratio: { is: 1, of: 46 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 428,
          tested: 20743,
          risk: "high",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 183,
          tested: 13693,
          risk: "medium",
          percentage: 1.34,
          ratio: { is: 1, of: 75 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 308,
          tested: 6879,
          risk: "high",
          percentage: 4.48,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 668,
          tested: 10089,
          risk: "high",
          percentage: 6.62,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 47,
          tested: 2628,
          risk: "high",
          percentage: 1.79,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 213,
          tested: 13829,
          risk: "high",
          percentage: 1.54,
          ratio: { is: 1, of: 65 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1514,
          tested: 32185,
          risk: "high",
          percentage: 4.7,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 829,
          tested: 44147,
          risk: "high",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 331,
          tested: 42053,
          risk: "medium",
          percentage: 0.79,
          ratio: { is: 1, of: 128 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 294,
          tested: 21574,
          risk: "medium",
          percentage: 1.36,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 200,
          tested: 2513,
          risk: "high",
          percentage: 7.96,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1213,
          tested: 13033,
          risk: "high",
          percentage: 9.31,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1,
          tested: 97,
          risk: "medium",
          percentage: 1.03,
          ratio: { is: 1, of: 97 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 28,
          tested: 1585,
          risk: "high",
          percentage: 1.77,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 5,
          tested: 585,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 222,
          tested: 13032,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1121,
          tested: 32097,
          risk: "high",
          percentage: 3.49,
          ratio: { is: 1, of: 29 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 54,
          tested: 1981,
          risk: "high",
          percentage: 2.73,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 941,
          tested: 54270,
          risk: "high",
          percentage: 1.73,
          ratio: { is: 1, of: 58 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 3116,
          tested: 55767,
          risk: "high",
          percentage: 5.59,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 8,
          tested: 1869,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 234 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 554,
          tested: 45128,
          risk: "medium",
          percentage: 1.23,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 683,
          tested: 8094,
          risk: "high",
          percentage: 8.44,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 25,
          tested: 2878,
          risk: "medium",
          percentage: 0.87,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 719,
          tested: 59389,
          risk: "medium",
          percentage: 1.21,
          ratio: { is: 1, of: 83 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 70,
          tested: 4028,
          risk: "high",
          percentage: 1.74,
          ratio: { is: 1, of: 58 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 372,
          tested: 13927,
          risk: "high",
          percentage: 2.67,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 10,
          tested: 1508,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1036,
          tested: 13246,
          risk: "high",
          percentage: 7.82,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1030,
          tested: 48162,
          risk: "high",
          percentage: 2.14,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 1,
          tested: 208,
          risk: "low",
          percentage: 0.48,
          ratio: { is: 1, of: 208 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 67,
          tested: 5035,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 4985,
          tested: 54607,
          risk: "high",
          percentage: 9.13,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 25,
          tested: 1502,
          risk: "high",
          percentage: 1.66,
          ratio: { is: 1, of: 61 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 112,
          tested: 7084,
          risk: "high",
          percentage: 1.58,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 410,
          tested: 28641,
          risk: "medium",
          percentage: 1.43,
          ratio: { is: 1, of: 70 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 2
        },
        stats: {
          positive: 12,
          tested: 254,
          risk: "high",
          percentage: 4.72,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      }
    ]
  ],
  [
    "Erlichiosis",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 19,
          tested: 7457,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 393 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 20,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 57,
          tested: 9632,
          risk: "low",
          percentage: 0.59,
          ratio: { is: 1, of: 169 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 17,
          tested: 4720,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 278 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 434,
          tested: 35508,
          risk: "medium",
          percentage: 1.22,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 36,
          tested: 5414,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 151 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3169,
          tested: 20790,
          risk: "high",
          percentage: 15.24,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 68,
          tested: 5117,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 33,
          tested: 2146,
          risk: "high",
          percentage: 1.54,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 321,
          tested: 50857,
          risk: "medium",
          percentage: 0.63,
          ratio: { is: 1, of: 159 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 58,
          tested: 21249,
          risk: "low",
          percentage: 0.27,
          ratio: { is: 1, of: 367 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 7,
          tested: 1612,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 231 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 1373,
          risk: "low",
          percentage: 0.44,
          ratio: { is: 1, of: 229 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 257,
          tested: 43203,
          risk: "low",
          percentage: 0.59,
          ratio: { is: 1, of: 169 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 104,
          tested: 20743,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 200 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 59,
          tested: 13693,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 233 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 23,
          tested: 6879,
          risk: "low",
          percentage: 0.33,
          ratio: { is: 1, of: 300 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 26,
          tested: 10016,
          risk: "low",
          percentage: 0.26,
          ratio: { is: 1, of: 386 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 11,
          tested: 2624,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 239 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1963,
          tested: 13829,
          risk: "high",
          percentage: 14.19,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 455,
          tested: 32185,
          risk: "high",
          percentage: 1.41,
          ratio: { is: 1, of: 71 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 5615,
          tested: 44147,
          risk: "high",
          percentage: 12.72,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 182,
          tested: 42048,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 232 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1138,
          tested: 21574,
          risk: "high",
          percentage: 5.27,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 2512,
          risk: "low",
          percentage: 0.24,
          ratio: { is: 1, of: 419 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 24,
          tested: 12822,
          risk: "low",
          percentage: 0.19,
          ratio: { is: 1, of: 535 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2,
          tested: 97,
          risk: "high",
          percentage: 2.06,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 5,
          tested: 1582,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 317 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 583,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1647,
          tested: 13032,
          risk: "high",
          percentage: 12.64,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2167,
          tested: 32097,
          risk: "high",
          percentage: 6.75,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 10,
          tested: 1980,
          risk: "low",
          percentage: 0.51,
          ratio: { is: 1, of: 198 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3584,
          tested: 54270,
          risk: "high",
          percentage: 6.6,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 230,
          tested: 55761,
          risk: "low",
          percentage: 0.41,
          ratio: { is: 1, of: 243 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 50,
          tested: 1869,
          risk: "high",
          percentage: 2.68,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 144,
          tested: 45122,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 314 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 21,
          tested: 8094,
          risk: "low",
          percentage: 0.26,
          ratio: { is: 1, of: 386 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 43,
          tested: 2878,
          risk: "high",
          percentage: 1.49,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 2727,
          tested: 59365,
          risk: "high",
          percentage: 4.59,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 407,
          tested: 4028,
          risk: "high",
          percentage: 10.1,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 58,
          tested: 13923,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 241 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 6,
          tested: 1508,
          risk: "low",
          percentage: 0.4,
          ratio: { is: 1, of: 252 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 33,
          tested: 13226,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 401 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 330,
          tested: 48139,
          risk: "medium",
          percentage: 0.69,
          ratio: { is: 1, of: 146 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 0,
          tested: 208,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 530,
          tested: 5035,
          risk: "high",
          percentage: 10.53,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 582,
          tested: 54561,
          risk: "medium",
          percentage: 1.07,
          ratio: { is: 1, of: 94 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 14,
          tested: 1502,
          risk: "medium",
          percentage: 0.93,
          ratio: { is: 1, of: 108 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 93,
          tested: 7084,
          risk: "medium",
          percentage: 1.31,
          ratio: { is: 1, of: 77 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 1391,
          tested: 28641,
          risk: "high",
          percentage: 4.86,
          ratio: { is: 1, of: 21 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 3
        },
        stats: {
          positive: 3,
          tested: 254,
          risk: "medium",
          percentage: 1.18,
          ratio: { is: 1, of: 85 }
        },
        thresholds: { high: 1.4, medium: 0.6 }
      }
    ]
  ],
  [
    "Roundworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 110,
          tested: 5365,
          risk: "medium",
          percentage: 2.05,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 48,
          tested: 1301,
          risk: "high",
          percentage: 3.69,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 259,
          tested: 21206,
          risk: "low",
          percentage: 1.22,
          ratio: { is: 1, of: 82 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 33,
          tested: 1737,
          risk: "medium",
          percentage: 1.9,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 2890,
          tested: 128830,
          risk: "medium",
          percentage: 2.24,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 389,
          tested: 19484,
          risk: "medium",
          percentage: 2,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 667,
          tested: 33534,
          risk: "medium",
          percentage: 1.99,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 137,
          tested: 5093,
          risk: "high",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 55,
          tested: 3711,
          risk: "low",
          percentage: 1.48,
          ratio: { is: 1, of: 68 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 729,
          tested: 78993,
          risk: "low",
          percentage: 0.92,
          ratio: { is: 1, of: 109 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 680,
          tested: 34737,
          risk: "medium",
          percentage: 1.96,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 77,
          tested: 6072,
          risk: "low",
          percentage: 1.27,
          ratio: { is: 1, of: 79 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 82,
          tested: 2659,
          risk: "high",
          percentage: 3.08,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1258,
          tested: 55170,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 859,
          tested: 24523,
          risk: "high",
          percentage: 3.5,
          ratio: { is: 1, of: 29 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 175,
          tested: 6859,
          risk: "high",
          percentage: 2.55,
          ratio: { is: 1, of: 40 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 148,
          tested: 7514,
          risk: "medium",
          percentage: 1.97,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 231,
          tested: 7867,
          risk: "high",
          percentage: 2.94,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 148,
          tested: 8591,
          risk: "low",
          percentage: 1.72,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 202,
          tested: 6389,
          risk: "high",
          percentage: 3.16,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 976,
          tested: 34984,
          risk: "high",
          percentage: 2.79,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 952,
          tested: 48851,
          risk: "medium",
          percentage: 1.95,
          ratio: { is: 1, of: 52 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1144,
          tested: 40861,
          risk: "high",
          percentage: 2.8,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 336,
          tested: 12475,
          risk: "high",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 48,
          tested: 1115,
          risk: "high",
          percentage: 4.3,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 416,
          tested: 15614,
          risk: "high",
          percentage: 2.66,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 52,
          tested: 1362,
          risk: "high",
          percentage: 3.82,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 70,
          tested: 3720,
          risk: "medium",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 204,
          tested: 17651,
          risk: "low",
          percentage: 1.16,
          ratio: { is: 1, of: 87 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 266,
          tested: 11994,
          risk: "medium",
          percentage: 2.22,
          ratio: { is: 1, of: 46 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1276,
          tested: 55289,
          risk: "medium",
          percentage: 2.31,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 53,
          tested: 3249,
          risk: "low",
          percentage: 1.63,
          ratio: { is: 1, of: 62 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1821,
          tested: 79076,
          risk: "medium",
          percentage: 2.3,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 683,
          tested: 36189,
          risk: "medium",
          percentage: 1.89,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 31,
          tested: 862,
          risk: "high",
          percentage: 3.6,
          ratio: { is: 1, of: 28 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1199,
          tested: 38208,
          risk: "high",
          percentage: 3.14,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 125,
          tested: 4851,
          risk: "high",
          percentage: 2.58,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 350,
          tested: 15320,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1836,
          tested: 58324,
          risk: "high",
          percentage: 3.15,
          ratio: { is: 1, of: 32 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 202,
          tested: 6867,
          risk: "high",
          percentage: 2.94,
          ratio: { is: 1, of: 34 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 332,
          tested: 19664,
          risk: "low",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 63,
          tested: 1139,
          risk: "high",
          percentage: 5.53,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 334,
          tested: 10697,
          risk: "high",
          percentage: 3.12,
          ratio: { is: 1, of: 33 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1212,
          tested: 81201,
          risk: "low",
          percentage: 1.49,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 84,
          tested: 4441,
          risk: "medium",
          percentage: 1.89,
          ratio: { is: 1, of: 53 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 108,
          tested: 4182,
          risk: "high",
          percentage: 2.58,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 1035,
          tested: 48408,
          risk: "medium",
          percentage: 2.14,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 803,
          tested: 30849,
          risk: "high",
          percentage: 2.6,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 97,
          tested: 1752,
          risk: "high",
          percentage: 5.54,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 560,
          tested: 19753,
          risk: "high",
          percentage: 2.84,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 4
        },
        stats: {
          positive: 24,
          tested: 462,
          risk: "high",
          percentage: 5.19,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 2.5, medium: 1.8 }
      }
    ]
  ],
  [
    "Hookworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 272,
          tested: 5365,
          risk: "high",
          percentage: 5.07,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 21,
          tested: 1301,
          risk: "medium",
          percentage: 1.61,
          ratio: { is: 1, of: 62 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 236,
          tested: 21206,
          risk: "low",
          percentage: 1.11,
          ratio: { is: 1, of: 90 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 71,
          tested: 1737,
          risk: "high",
          percentage: 4.09,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 951,
          tested: 128830,
          risk: "low",
          percentage: 0.74,
          ratio: { is: 1, of: 136 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 420,
          tested: 19484,
          risk: "medium",
          percentage: 2.16,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 712,
          tested: 33534,
          risk: "medium",
          percentage: 2.12,
          ratio: { is: 1, of: 48 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 140,
          tested: 5093,
          risk: "medium",
          percentage: 2.75,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 150,
          tested: 3711,
          risk: "high",
          percentage: 4.04,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 4567,
          tested: 78993,
          risk: "high",
          percentage: 5.78,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1184,
          tested: 34737,
          risk: "medium",
          percentage: 3.41,
          ratio: { is: 1, of: 30 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 120,
          tested: 6072,
          risk: "medium",
          percentage: 1.98,
          ratio: { is: 1, of: 51 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 20,
          tested: 2659,
          risk: "low",
          percentage: 0.75,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1133,
          tested: 55170,
          risk: "medium",
          percentage: 2.05,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 616,
          tested: 24523,
          risk: "medium",
          percentage: 2.51,
          ratio: { is: 1, of: 40 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 108,
          tested: 6859,
          risk: "medium",
          percentage: 1.57,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 186,
          tested: 7514,
          risk: "medium",
          percentage: 2.48,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 334,
          tested: 7867,
          risk: "high",
          percentage: 4.25,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 431,
          tested: 8591,
          risk: "high",
          percentage: 5.02,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 179,
          tested: 6389,
          risk: "medium",
          percentage: 2.8,
          ratio: { is: 1, of: 36 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1018,
          tested: 34984,
          risk: "medium",
          percentage: 2.91,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1040,
          tested: 48851,
          risk: "medium",
          percentage: 2.13,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 559,
          tested: 40861,
          risk: "low",
          percentage: 1.37,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 254,
          tested: 12475,
          risk: "medium",
          percentage: 2.04,
          ratio: { is: 1, of: 50 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 69,
          tested: 1115,
          risk: "high",
          percentage: 6.19,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 448,
          tested: 15614,
          risk: "medium",
          percentage: 2.87,
          ratio: { is: 1, of: 35 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 11,
          tested: 1362,
          risk: "low",
          percentage: 0.81,
          ratio: { is: 1, of: 124 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 43,
          tested: 3720,
          risk: "low",
          percentage: 1.16,
          ratio: { is: 1, of: 87 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 89,
          tested: 17651,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 199 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 258,
          tested: 11994,
          risk: "medium",
          percentage: 2.15,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1258,
          tested: 55289,
          risk: "medium",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 61,
          tested: 3249,
          risk: "medium",
          percentage: 1.88,
          ratio: { is: 1, of: 54 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1637,
          tested: 79076,
          risk: "medium",
          percentage: 2.07,
          ratio: { is: 1, of: 49 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1517,
          tested: 36189,
          risk: "high",
          percentage: 4.19,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 7,
          tested: 862,
          risk: "low",
          percentage: 0.81,
          ratio: { is: 1, of: 124 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1028,
          tested: 38208,
          risk: "medium",
          percentage: 2.69,
          ratio: { is: 1, of: 38 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 298,
          tested: 4851,
          risk: "high",
          percentage: 6.14,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 270,
          tested: 15320,
          risk: "medium",
          percentage: 1.76,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1612,
          tested: 58324,
          risk: "medium",
          percentage: 2.76,
          ratio: { is: 1, of: 37 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 168,
          tested: 6867,
          risk: "medium",
          percentage: 2.45,
          ratio: { is: 1, of: 41 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 864,
          tested: 19664,
          risk: "high",
          percentage: 4.39,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 20,
          tested: 1139,
          risk: "medium",
          percentage: 1.76,
          ratio: { is: 1, of: 57 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 552,
          tested: 10697,
          risk: "high",
          percentage: 5.16,
          ratio: { is: 1, of: 20 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 3651,
          tested: 81201,
          risk: "high",
          percentage: 4.5,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 22,
          tested: 4441,
          risk: "low",
          percentage: 0.5,
          ratio: { is: 1, of: 202 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 164,
          tested: 4182,
          risk: "medium",
          percentage: 3.92,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 1641,
          tested: 48408,
          risk: "medium",
          percentage: 3.39,
          ratio: { is: 1, of: 30 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 510,
          tested: 30849,
          risk: "medium",
          percentage: 1.65,
          ratio: { is: 1, of: 61 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 131,
          tested: 1752,
          risk: "high",
          percentage: 7.48,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 459,
          tested: 19753,
          risk: "medium",
          percentage: 2.32,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 4, medium: 1.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 5
        },
        stats: {
          positive: 7,
          tested: 462,
          risk: "medium",
          percentage: 1.52,
          ratio: { is: 1, of: 66 }
        },
        thresholds: { high: 4, medium: 1.5 }
      }
    ]
  ],
  [
    "Whipworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 50,
          tested: 5365,
          risk: "medium",
          percentage: 0.93,
          ratio: { is: 1, of: 108 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 4,
          tested: 1301,
          risk: "low",
          percentage: 0.31,
          ratio: { is: 1, of: 326 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 32,
          tested: 21206,
          risk: "low",
          percentage: 0.15,
          ratio: { is: 1, of: 663 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 32,
          tested: 1737,
          risk: "high",
          percentage: 1.84,
          ratio: { is: 1, of: 55 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 303,
          tested: 128830,
          risk: "low",
          percentage: 0.24,
          ratio: { is: 1, of: 426 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 109,
          tested: 19484,
          risk: "medium",
          percentage: 0.56,
          ratio: { is: 1, of: 179 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 268,
          tested: 33534,
          risk: "medium",
          percentage: 0.8,
          ratio: { is: 1, of: 126 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 69,
          tested: 5093,
          risk: "high",
          percentage: 1.35,
          ratio: { is: 1, of: 74 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 34,
          tested: 3711,
          risk: "medium",
          percentage: 0.92,
          ratio: { is: 1, of: 110 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 288,
          tested: 78993,
          risk: "low",
          percentage: 0.36,
          ratio: { is: 1, of: 275 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 321,
          tested: 34737,
          risk: "medium",
          percentage: 0.92,
          ratio: { is: 1, of: 109 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 10,
          tested: 6072,
          risk: "low",
          percentage: 0.16,
          ratio: { is: 1, of: 608 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 8,
          tested: 2659,
          risk: "low",
          percentage: 0.3,
          ratio: { is: 1, of: 333 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 516,
          tested: 55170,
          risk: "medium",
          percentage: 0.94,
          ratio: { is: 1, of: 107 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 316,
          tested: 24523,
          risk: "high",
          percentage: 1.29,
          ratio: { is: 1, of: 78 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 48,
          tested: 6859,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 143 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 71,
          tested: 7514,
          risk: "medium",
          percentage: 0.94,
          ratio: { is: 1, of: 106 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 133,
          tested: 7867,
          risk: "high",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 61,
          tested: 8591,
          risk: "medium",
          percentage: 0.71,
          ratio: { is: 1, of: 141 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 55,
          tested: 6389,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 343,
          tested: 34984,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 102 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 340,
          tested: 48851,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 144 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 345,
          tested: 40861,
          risk: "medium",
          percentage: 0.84,
          ratio: { is: 1, of: 119 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 73,
          tested: 12475,
          risk: "medium",
          percentage: 0.59,
          ratio: { is: 1, of: 171 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 19,
          tested: 1115,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 264,
          tested: 15614,
          risk: "high",
          percentage: 1.69,
          ratio: { is: 1, of: 60 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 2,
          tested: 1362,
          risk: "low",
          percentage: 0.15,
          ratio: { is: 1, of: 681 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 3720,
          risk: "low",
          percentage: 0.46,
          ratio: { is: 1, of: 219 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 17651,
          risk: "low",
          percentage: 0.1,
          ratio: { is: 1, of: 1039 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 61,
          tested: 11994,
          risk: "medium",
          percentage: 0.51,
          ratio: { is: 1, of: 197 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 349,
          tested: 55289,
          risk: "medium",
          percentage: 0.63,
          ratio: { is: 1, of: 159 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 8,
          tested: 3249,
          risk: "low",
          percentage: 0.25,
          ratio: { is: 1, of: 407 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 544,
          tested: 79076,
          risk: "medium",
          percentage: 0.69,
          ratio: { is: 1, of: 146 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 448,
          tested: 36189,
          risk: "high",
          percentage: 1.24,
          ratio: { is: 1, of: 81 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 0,
          tested: 862,
          risk: "low",
          percentage: 0,
          ratio: { is: 0, of: 0 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 573,
          tested: 38208,
          risk: "high",
          percentage: 1.5,
          ratio: { is: 1, of: 67 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 87,
          tested: 4851,
          risk: "high",
          percentage: 1.79,
          ratio: { is: 1, of: 56 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 49,
          tested: 15320,
          risk: "low",
          percentage: 0.32,
          ratio: { is: 1, of: 313 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 698,
          tested: 58324,
          risk: "high",
          percentage: 1.2,
          ratio: { is: 1, of: 84 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 52,
          tested: 6867,
          risk: "medium",
          percentage: 0.76,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 170,
          tested: 19664,
          risk: "medium",
          percentage: 0.86,
          ratio: { is: 1, of: 116 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 13,
          tested: 1139,
          risk: "high",
          percentage: 1.14,
          ratio: { is: 1, of: 88 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 182,
          tested: 10697,
          risk: "high",
          percentage: 1.7,
          ratio: { is: 1, of: 59 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 555,
          tested: 81201,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 147 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 17,
          tested: 4441,
          risk: "low",
          percentage: 0.38,
          ratio: { is: 1, of: 262 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 43,
          tested: 4182,
          risk: "high",
          percentage: 1.03,
          ratio: { is: 1, of: 98 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 473,
          tested: 48408,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 103 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 115,
          tested: 30849,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 269 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 40,
          tested: 1752,
          risk: "high",
          percentage: 2.28,
          ratio: { is: 1, of: 44 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 139,
          tested: 19753,
          risk: "medium",
          percentage: 0.7,
          ratio: { is: 1, of: 143 }
        },
        thresholds: { high: 1, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 6
        },
        stats: {
          positive: 3,
          tested: 462,
          risk: "medium",
          percentage: 0.65,
          ratio: { is: 1, of: 154 }
        },
        thresholds: { high: 1, medium: 0.5 }
      }
    ]
  ],
  [
    "Giardia",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 265,
          tested: 6050,
          risk: "medium",
          percentage: 4.38,
          ratio: { is: 1, of: 23 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 179,
          tested: 1962,
          risk: "high",
          percentage: 9.12,
          ratio: { is: 1, of: 11 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4213,
          tested: 26286,
          risk: "high",
          percentage: 16.03,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 113,
          tested: 2355,
          risk: "medium",
          percentage: 4.8,
          ratio: { is: 1, of: 21 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 19953,
          tested: 170713,
          risk: "high",
          percentage: 11.69,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3324,
          tested: 25425,
          risk: "high",
          percentage: 13.07,
          ratio: { is: 1, of: 8 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3672,
          tested: 42619,
          risk: "high",
          percentage: 8.62,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 518,
          tested: 6296,
          risk: "high",
          percentage: 8.23,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 414,
          tested: 4012,
          risk: "high",
          percentage: 10.32,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3664,
          tested: 94469,
          risk: "low",
          percentage: 3.88,
          ratio: { is: 1, of: 26 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2445,
          tested: 41871,
          risk: "medium",
          percentage: 5.84,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 323,
          tested: 8505,
          risk: "low",
          percentage: 3.8,
          ratio: { is: 1, of: 27 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 242,
          tested: 2897,
          risk: "high",
          percentage: 8.35,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4980,
          tested: 60235,
          risk: "high",
          percentage: 8.27,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2489,
          tested: 30332,
          risk: "high",
          percentage: 8.21,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 298,
          tested: 7031,
          risk: "medium",
          percentage: 4.24,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 584,
          tested: 8533,
          risk: "medium",
          percentage: 6.84,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 773,
          tested: 10054,
          risk: "high",
          percentage: 7.69,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 402,
          tested: 9290,
          risk: "medium",
          percentage: 4.33,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 559,
          tested: 6777,
          risk: "high",
          percentage: 8.25,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3459,
          tested: 44444,
          risk: "high",
          percentage: 7.78,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4605,
          tested: 58129,
          risk: "high",
          percentage: 7.92,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2504,
          tested: 44051,
          risk: "medium",
          percentage: 5.68,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1167,
          tested: 14198,
          risk: "high",
          percentage: 8.22,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 54,
          tested: 1274,
          risk: "medium",
          percentage: 4.24,
          ratio: { is: 1, of: 24 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1197,
          tested: 17635,
          risk: "medium",
          percentage: 6.79,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 118,
          tested: 1578,
          risk: "high",
          percentage: 7.48,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 312,
          tested: 4399,
          risk: "high",
          percentage: 7.09,
          ratio: { is: 1, of: 15 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1678,
          tested: 20750,
          risk: "high",
          percentage: 8.09,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1198,
          tested: 13781,
          risk: "high",
          percentage: 8.69,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5663,
          tested: 69579,
          risk: "high",
          percentage: 8.14,
          ratio: { is: 1, of: 13 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 614,
          tested: 5008,
          risk: "high",
          percentage: 12.26,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 9079,
          tested: 100248,
          risk: "high",
          percentage: 9.06,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1629,
          tested: 40585,
          risk: "medium",
          percentage: 4.01,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 59,
          tested: 1041,
          risk: "medium",
          percentage: 5.67,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2613,
          tested: 41196,
          risk: "medium",
          percentage: 6.34,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 366,
          tested: 6049,
          risk: "medium",
          percentage: 6.05,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 2353,
          tested: 20964,
          risk: "high",
          percentage: 11.22,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5047,
          tested: 68599,
          risk: "high",
          percentage: 7.36,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 922,
          tested: 8930,
          risk: "high",
          percentage: 10.32,
          ratio: { is: 1, of: 10 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 851,
          tested: 20978,
          risk: "medium",
          percentage: 4.06,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 108,
          tested: 1225,
          risk: "high",
          percentage: 8.82,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 755,
          tested: 12740,
          risk: "medium",
          percentage: 5.93,
          ratio: { is: 1, of: 17 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 5264,
          tested: 94965,
          risk: "medium",
          percentage: 5.54,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 766,
          tested: 6472,
          risk: "high",
          percentage: 11.84,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 308,
          tested: 4647,
          risk: "medium",
          percentage: 6.63,
          ratio: { is: 1, of: 16 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 3283,
          tested: 57921,
          risk: "medium",
          percentage: 5.67,
          ratio: { is: 1, of: 18 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 4472,
          tested: 38043,
          risk: "high",
          percentage: 11.76,
          ratio: { is: 1, of: 9 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 100,
          tested: 1810,
          risk: "medium",
          percentage: 5.52,
          ratio: { is: 1, of: 19 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 1562,
          tested: 21203,
          risk: "high",
          percentage: 7.37,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 7, medium: 4 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 7
        },
        stats: {
          positive: 72,
          tested: 504,
          risk: "high",
          percentage: 14.29,
          ratio: { is: 1, of: 7 }
        },
        thresholds: { high: 7, medium: 4 }
      }
    ]
  ],
  [
    "Heartworm",
    [
      {
        params: {
          state: { id: 1, fips: "01", name: "Alabama" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 971,
          tested: 23358,
          risk: "high",
          percentage: 4.16,
          ratio: { is: 1, of: 25 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 2, fips: "02", name: "Alaska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 378,
          risk: "medium",
          percentage: 1.32,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 3, fips: "04", name: "Arizona" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 131,
          tested: 23822,
          risk: "medium",
          percentage: 0.55,
          ratio: { is: 1, of: 182 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 4, fips: "05", name: "Arkansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 774,
          tested: 17017,
          risk: "high",
          percentage: 4.55,
          ratio: { is: 1, of: 22 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 5, fips: "06", name: "California" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 482,
          tested: 128825,
          risk: "low",
          percentage: 0.37,
          ratio: { is: 1, of: 268 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 6, fips: "08", name: "Colorado" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 257,
          tested: 30059,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 117 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 7, fips: "09", name: "Connecticut" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 200,
          tested: 34366,
          risk: "medium",
          percentage: 0.58,
          ratio: { is: 1, of: 172 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 8, fips: "10", name: "Delaware" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 32,
          tested: 6847,
          risk: "low",
          percentage: 0.47,
          ratio: { is: 1, of: 214 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 9, fips: "11", name: "District Of Columbia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 27,
          tested: 2828,
          risk: "medium",
          percentage: 0.95,
          ratio: { is: 1, of: 105 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 10, fips: "12", name: "Florida" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1842,
          tested: 154737,
          risk: "medium",
          percentage: 1.19,
          ratio: { is: 1, of: 85 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 11, fips: "13", name: "Georgia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1420,
          tested: 62772,
          risk: "high",
          percentage: 2.26,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 12, fips: "15", name: "Hawaii" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 37,
          tested: 6726,
          risk: "medium",
          percentage: 0.55,
          ratio: { is: 1, of: 182 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 13, fips: "16", name: "Idaho" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 2231,
          risk: "low",
          percentage: 0.22,
          ratio: { is: 1, of: 447 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 14, fips: "17", name: "Illinois" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 909,
          tested: 83886,
          risk: "medium",
          percentage: 1.08,
          ratio: { is: 1, of: 93 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 15, fips: "18", name: "Indiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 574,
          tested: 40967,
          risk: "medium",
          percentage: 1.4,
          ratio: { is: 1, of: 72 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 16, fips: "19", name: "Iowa" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 84,
          tested: 17541,
          risk: "low",
          percentage: 0.48,
          ratio: { is: 1, of: 209 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 17, fips: "20", name: "Kansas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 109,
          tested: 13197,
          risk: "medium",
          percentage: 0.83,
          ratio: { is: 1, of: 122 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 18, fips: "21", name: "Kentucky" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 242,
          tested: 18154,
          risk: "medium",
          percentage: 1.33,
          ratio: { is: 1, of: 76 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 19, fips: "22", name: "Louisiana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1679,
          tested: 23287,
          risk: "high",
          percentage: 7.21,
          ratio: { is: 1, of: 14 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 20, fips: "23", name: "Maine" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 75,
          tested: 14133,
          risk: "medium",
          percentage: 0.53,
          ratio: { is: 1, of: 189 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 21, fips: "24", name: "Maryland" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 200,
          tested: 40630,
          risk: "low",
          percentage: 0.49,
          ratio: { is: 1, of: 204 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 22, fips: "25", name: "Massachusetts" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 416,
          tested: 62045,
          risk: "medium",
          percentage: 0.67,
          ratio: { is: 1, of: 150 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 23, fips: "26", name: "Michigan" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 555,
          tested: 73616,
          risk: "medium",
          percentage: 0.75,
          ratio: { is: 1, of: 133 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 24, fips: "27", name: "Minnesota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 157,
          tested: 29254,
          risk: "medium",
          percentage: 0.54,
          ratio: { is: 1, of: 187 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 25, fips: "28", name: "Mississippi" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 948,
          tested: 10651,
          risk: "high",
          percentage: 8.9,
          ratio: { is: 1, of: 12 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 26, fips: "29", name: "Missouri" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 524,
          tested: 33161,
          risk: "high",
          percentage: 1.58,
          ratio: { is: 1, of: 64 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 27, fips: "30", name: "Montana" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5,
          tested: 348,
          risk: "medium",
          percentage: 1.44,
          ratio: { is: 1, of: 70 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 28, fips: "31", name: "Nebraska" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 46,
          tested: 6809,
          risk: "medium",
          percentage: 0.68,
          ratio: { is: 1, of: 149 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 29, fips: "32", name: "Nevada" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 25,
          tested: 5607,
          risk: "low",
          percentage: 0.45,
          ratio: { is: 1, of: 225 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 30, fips: "33", name: "New Hampshire" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 106,
          tested: 16087,
          risk: "medium",
          percentage: 0.66,
          ratio: { is: 1, of: 152 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 31, fips: "34", name: "New Jersey" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 263,
          tested: 61914,
          risk: "low",
          percentage: 0.42,
          ratio: { is: 1, of: 236 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 32, fips: "35", name: "New Mexico" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 59,
          tested: 5514,
          risk: "medium",
          percentage: 1.07,
          ratio: { is: 1, of: 94 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 33, fips: "36", name: "New York" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 446,
          tested: 90921,
          risk: "low",
          percentage: 0.49,
          ratio: { is: 1, of: 204 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 34, fips: "37", name: "North Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1783,
          tested: 88711,
          risk: "high",
          percentage: 2.01,
          ratio: { is: 1, of: 50 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 35, fips: "38", name: "North Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 7,
          tested: 2053,
          risk: "low",
          percentage: 0.34,
          ratio: { is: 1, of: 294 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 36, fips: "39", name: "Ohio" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 374,
          tested: 70458,
          risk: "medium",
          percentage: 0.53,
          ratio: { is: 1, of: 189 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 37, fips: "40", name: "Oklahoma" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 327,
          tested: 15180,
          risk: "high",
          percentage: 2.15,
          ratio: { is: 1, of: 47 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 38, fips: "41", name: "Oregon" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 49,
          tested: 9652,
          risk: "medium",
          percentage: 0.51,
          ratio: { is: 1, of: 197 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 39, fips: "42", name: "Pennsylvania" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 317,
          tested: 73524,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 232 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 40, fips: "44", name: "Rhode Island" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 44,
          tested: 7207,
          risk: "medium",
          percentage: 0.61,
          ratio: { is: 1, of: 164 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 41, fips: "45", name: "South Carolina" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 869,
          tested: 38363,
          risk: "high",
          percentage: 2.27,
          ratio: { is: 1, of: 45 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 42, fips: "46", name: "South Dakota" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 6,
          tested: 2180,
          risk: "low",
          percentage: 0.28,
          ratio: { is: 1, of: 364 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 43, fips: "47", name: "Tennessee" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 1027,
          tested: 39564,
          risk: "high",
          percentage: 2.6,
          ratio: { is: 1, of: 39 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 44, fips: "48", name: "Texas" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 5272,
          tested: 159489,
          risk: "high",
          percentage: 3.31,
          ratio: { is: 1, of: 31 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 45, fips: "49", name: "Utah" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 24,
          tested: 2652,
          risk: "medium",
          percentage: 0.9,
          ratio: { is: 1, of: 111 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 46, fips: "50", name: "Vermont" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 53,
          tested: 5952,
          risk: "medium",
          percentage: 0.89,
          ratio: { is: 1, of: 113 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 47, fips: "51", name: "Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 710,
          tested: 72685,
          risk: "medium",
          percentage: 0.98,
          ratio: { is: 1, of: 103 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 48, fips: "53", name: "Washington" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 62,
          tested: 7256,
          risk: "medium",
          percentage: 0.85,
          ratio: { is: 1, of: 118 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 49, fips: "54", name: "West Virginia" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 34,
          tested: 7850,
          risk: "low",
          percentage: 0.43,
          ratio: { is: 1, of: 231 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 50, fips: "55", name: "Wisconsin" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 168,
          tested: 36275,
          risk: "low",
          percentage: 0.46,
          ratio: { is: 1, of: 216 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      },
      {
        params: {
          state: { id: 51, fips: "56", name: "Wyoming" },
          month: null,
          year: "2019",
          species: 1,
          disease: 8
        },
        stats: {
          positive: 7,
          tested: 735,
          risk: "medium",
          percentage: 0.95,
          ratio: { is: 1, of: 105 }
        },
        thresholds: { high: 1.5, medium: 0.5 }
      }
    ]
  ]
];
