const model = {
  app: {
    genOpt :{
        lang: en,
        darkMode: false,
        metric: true,
        kg: true,
        dateFormat: 'DD/MM/YYYY',
        timeFormat: '24',
        challengeReminder:{
            on: true, interval: '16.30', days:'M/T/F/S'
        },
        workoutPlanReminder: 'all',
        feedback: true
    },

    pages:[
      "loginPage",
      "mainPage",
      "Profile",
      "genOptions",
      "workprogram",
      "log",
      "wiki",
    ],

    //Tøm dummydata før GOtime
    loggedInUser:[{
      userName:"test",
      profileName: "Test Navn",
      profileImg:"",
      homeTown: "Test Sted",
      age: "00",
      sex:"Female",
      height:"175",
      weight:"75",
      aboutMe: "info",
      workoutprogram:[{
        weeks:["one","two","three","four"],
        days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        programDetails: ["fullbody","chest","shoulders"], 
      },],
      schedule:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
      log:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
    }],  
  },

  input:{
    
    loginAs: {
      userName: "",
      password: "",
    },
    
    createUser:{
      userName:"",
      profileName: "",
      profileImg:"",
      homeTown: "",
      age: "",
      sex:"",
      height:"",
      weight:"",
      aboutMe: "",
      workoutprogram:[],
      log:[],
      schedule:[],
  },

    schedule: {
      day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
      time: [""],
      workout: [""],
      bodypart: [""],
    },
    
    log: {
      time: [""],
      workout: [""],
      bodypart: [""],
    },    

    editProfileImg: "",
}, 

  data:{
    workouts: ["squats",],

    workoutWiki: {
      squats: [{ id: '123',
          workout: "squats",
          video: "",
          text: ""},],
      pushup: [{ id: '1234',
          workout: "pushup",
          video: "",
          text: ""},],
    },

    programDetails:{
      fullbody:["chest","triceps","legs","shoulders","traps","abs","back","biceps"],
      chest: ["chest"],
      shoulder:["shoulders","traps"],
      arms:["triceps","biceps","forearm"],
      back:["upper back","lower back"],
      legs:["lower legs","upper legs"],
      ab:["abs"],
    },

    profileList:[{
      id: "123",
      profileName: "Olivia",
      profileImg:"",
      homeTown: "place",
      age: "00",
      sex:"Female",
      height:"175",
      weight:"75",
      aboutMe: "info",
      workoutprogram:[{
        weeks:["one","two","three","four"],
        days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        programDetails: ["fullbody","chest","shoulders"], 
      },],
      schedule:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
      log:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
    },],
  },
};
