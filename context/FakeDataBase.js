import React, { createContext, useContext, useState } from "react";




const FakeDatabaseContext = createContext();

export const FakeDatabaseProvider = ({ children }) => {

    const currentDate = new Date();

    const numDays = 6; // Change this value based on how many days you need

    const dateArray = [];
    for (let i = 0; i <= numDays; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);

      const formattedDate = nextDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });

      dateArray.push(formattedDate);
    }



   



  const [database, setDatabase] = useState({
    FakeUser: {
      userinfo: { id: 1, name: "Jane Doe", profileImg :  require('../assets/icons/Profile/ProfileAvatar.png') },

      pets: {
        1: { id: 1, name: "Coco", age : 3, breed : 'Siamese Cat', petImg: require('../assets/icons/Profile/PetProfile.png'), vet: 'Perfect Care Vet Center', street: '123 PetCare Lane', city: 'Northland', state: 'ES 12345', },
        2: { id: 2, name: "Buddy", age : 2, breed: 'Golden Retriever', petImg: require('../assets/icons/Profile/PetProfileDog.png'), vet: 'Comfort Critters Hospital', street: '456 VetStreet Ave', city: 'DreamLand', state: 'ML 67890'  },
        3: { id: 3, name: "Noodle", age : 2, breed: 'Ferret', petImg: require('../assets/icons/Profile/Ferret.jpeg'), vet: 'Healing Paws Clinic', street: '789 PawPlace Road', city: 'Enchanted Isle', state: 'ST 98765' },
      },

      reminders: {
        1: {id: 1, petId: 1, message: "Bathroom Break", time: "9:00 AM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        2: {id : 2,  petId: 1, message: "Take a walk", time: "10:30 AM", date: dateArray[1], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        3: {id : 3, petId: 1, message: "Give medication", time: "12:00 PM", date: dateArray[2], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        4: {id : 4, petId: 1, message: "Take to vet", time: "3:45 PM", date: dateArray[3], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        5: {id : 5, petId: 1, message: "Playtime", time: "4:30 PM", date: dateArray[4], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        6: {id : 6, petId: 1, message: "Feed dinner", time: "6:00 PM", date: dateArray[5], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        7: {id : 7, petId: 1, message: "Brush fur", time: "7:15 PM", date: dateArray[6], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        8: {id : 8, petId: 2, message: "Bedtime treat", time: "9:00 PM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        9: {id : 9, petId: 2, message: "Morning exercise", time: "8:00 AM", date: dateArray[1], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        10: {id : 10, petId: 2, message: "Check water bowl", time: "11:15 AM", date: dateArray[2], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        11: {id : 11, petId: 2, message: "Sunbathing time", time: "1:30 PM", date: dateArray[3], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        12: {id : 12, petId: 2, message: "Training session", time: "2:45 PM", date: dateArray[4], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        13: {id : 13, petId: 2, message: "Hide treats for fun", time: "5:15 PM", date: dateArray[5], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        14: {id : 14, petId: 2, message: "Evening stroll", time: "6:45 PM", date: dateArray[6], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        15: {id : 15, petId: 3, message: "Play with toys", time: "8:30 PM", date: dateArray[0], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        16: { id: 16, petId: 3, message: "Bathroom Break", time: "9:00 AM", date: dateArray[1], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        17: { id: 17, petId: 3, message: "Take a walk", time: "10:30 AM", date: dateArray[2], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        18: { id: 18, petId: 3, message: "Give medication", time: "12:00 PM", date: dateArray[3], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        19: { id: 19, petId: 3, message: "Playtime", time: "1:30 PM", date: dateArray[4], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        20: { id: 20, petId: 3, message: "Feed dinner", time: "3:00 PM", date: dateArray[5], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        21: { id: 21, petId: 3, message: "Brush fur", time: "4:30 PM", date: dateArray[6], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        22: { id: 22, petId: 1, message: "Bedtime treat", time: "6:00 PM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        23: { id: 23, petId: 1, message: "Morning exercise", time: "7:30 PM", date: dateArray[1], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        24: { id: 24, petId: 1, message: "Check water bowl", time: "9:00 PM", date: dateArray[2], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        25: { id: 25, petId: 1, message: "Sunbathing time", time: "10:30 PM", date: dateArray[3], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false   },
        // 26: { id: 26, petId: 1, message: "Training session", time: "12:00 AM", date: dateArray[4], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 27: { id: 27, petId: 1, message: "Hide treats for fun", time: "1:30 AM", date: dateArray[5], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 28: { id: 28, petId: 1, message: "Evening stroll", time: "3:00 AM", date: dateArray[6], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 29: { id: 29, petId: 2, message: "Play with toys", time: "4:30 AM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 30: { id: 30, petId: 2, message: "Bathroom Break", time: "6:00 AM", date: dateArray[1], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 31: { id: 31, petId: 2, message: "Take a walk", time: "7:30 AM", date: dateArray[2], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 32: { id: 32, petId: 2, message: "Give medication", time: "9:00 AM", date: dateArray[3], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 33: { id: 33, petId: 2, message: "Playtime", time: "10:30 AM", date: dateArray[4], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 34: { id: 34, petId: 2, message: "Feed dinner", time: "12:00 PM", date: dateArray[5], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 35: { id: 35, petId: 2, message: "Brush fur", time: "1:30 PM", date: dateArray[6], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 36: { id: 36, petId: 3, message: "Bedtime treat", time: "3:00 PM", date: dateArray[0], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 37: { id: 37, petId: 3, message: "Morning exercise", time: "4:30 PM", date: dateArray[1], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 38: { id: 38, petId: 3, message: "Check water bowl", time: "6:00 PM", date: dateArray[2], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 39: { id: 39, petId: 3, message: "Sunbathing time", time: "7:30 PM", date: dateArray[3], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 40: { id: 40, petId: 3, message: "Training session", time: "9:00 PM", date: dateArray[4], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 41: { id: 41, petId: 3, message: "Hide treats for fun", time: "10:30 PM", date: dateArray[5], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 42: { id: 42, petId: 3, message: "Evening stroll", time: "12:00 AM", date: dateArray[6], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 43: { id: 43, petId: 1, message: "Play with toys", time: "1:30 AM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 44: { id: 44, petId: 2, message: "Bathroom Break", time: "3:00 AM", date: dateArray[1], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 45: { id: 45, petId: 3, message: "Take a walk", time: "4:30 AM", date: dateArray[2], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 46: { id: 46, petId: 1, message: "Give medication", time: "6:00 AM", date: dateArray[3], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 47: { id: 47, petId: 2, message: "Playtime", time: "7:30 AM", date: dateArray[4], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
        // 48: { id: 48, petId: 3, message: "Feed dinner", time: "9:00 AM", date: dateArray[5], petImg: require('../assets/icons/Profile/Ferret.jpeg'), alarm : false, completed : false  },
        // 49: { id: 49, petId: 1, message: "Brush fur", time: "10:30 AM", date: dateArray[6], petImg: require('../assets/icons/Profile/PetProfile.png'), alarm : false, completed : false  },
        // 50: { id: 50, petId: 2, message: "Bedtime treat", time: "12:00 PM", date: dateArray[0], petImg: require('../assets/icons/Profile/PetProfileDog.png'), alarm : false, completed : false  },
      },
    },
  });



const updateAlarm = (alarm) => {
  setDatabase((prevDatabase) => {
    const updatedAlarms = {
      ...prevDatabase.FakeUser.reminders,
      [alarm.id]: alarm,
    };
    return {
      ...prevDatabase,
      FakeUser: {
        ...prevDatabase.FakeUser,
        reminders: updatedAlarms,
      },
    };
  });
};

const updateCompleted = (day, pet) => {
     setDatabase((prevDatabase) => {
       const updatedAlarms = Object.values(prevDatabase.FakeUser.reminders).map(
         (reminder) => {
           if (reminder.date === day && reminder.petId === pet.id) {
             return { ...reminder, completed: !reminder.completed };
           }
           return reminder;
         }
       );

       return {
         ...prevDatabase,
         FakeUser: {
           ...prevDatabase.FakeUser,
           reminders: updatedAlarms.reduce((acc, reminders) => {
             acc[reminders.id] = reminders;
             return acc;
           }, {}),
         },
       };
     });
}


   const addReminder = ({petId, message, time, date}) => {
  setDatabase((prevDatabase) => {
    const newReminderId = Object.keys(prevDatabase.FakeUser.reminders).length + 1;
    const findPetImg = Object.values(database.FakeUser.pets).filter(pet => pet.id === Number(petId))
    const newReminder = {
      id: newReminderId,
      petId : Number(petId),
      message,
      time,
      date,
      petImg: findPetImg[0].petImg,
      alarm: false,
      completed: false,
    };
    return {
      ...prevDatabase,
      FakeUser: {
        ...prevDatabase.FakeUser,
        reminders: {
          ...prevDatabase.FakeUser.reminders,
          [newReminderId]: newReminder,
        },
      },
    };
  });
};

const completeReminder = (reminderId) => {
  setDatabase((prevDatabase) => {
    const updatedReminders = {
      ...prevDatabase.FakeUser.reminders,
      [reminderId]: {
        ...prevDatabase.FakeUser.reminders[reminderId],
        completed: true,
      },
    };

    return {
      ...prevDatabase,
      FakeUser: {
        ...prevDatabase.FakeUser,
        reminders: updatedReminders,
      },
    };
  });
};

   const updateReminder = ({reminderId, message, time, petImg, date}) => {
     setDatabase((prevDatabase) => {
       const updatedReminders = {
         ...prevDatabase.FakeUser.reminders,
         [reminderId]: {
           ...prevDatabase.FakeUser.reminders[reminderId],
           message,
           time,
           date,
           petImg,
           alarm: false,
           completed: false,
         },
       };

       return {
         ...prevDatabase,
         FakeUser: {
           ...prevDatabase.FakeUser,
           reminders: updatedReminders,
         },
       };
     });
   };

   const deleteReminder = (reminderId) => {
     setDatabase((prevDatabase) => {
       const newReminders = { ...prevDatabase.FakeUser.reminders };
       delete newReminders[reminderId];
       return {
         ...prevDatabase,
         FakeUser: {
           ...prevDatabase.FakeUser,
           reminders: newReminders,
         },
       };
     });
   };

   const contextValue = {
     database,
     addReminder,
     updateReminder,
     deleteReminder,
    updateAlarm,
    updateCompleted,
    completeReminder
   };


  return (
    <FakeDatabaseContext.Provider value={contextValue}>
      {children}
    </FakeDatabaseContext.Provider>
  );
};


export const useFakeDatabase = () => {
  return useContext(FakeDatabaseContext);
};
