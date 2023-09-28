import { createSlice } from "@reduxjs/toolkit";

const initialState={
    availableSlots:[{
        date:"4 May",
        day:"Thursday",
        time:"",
        user:""
    },{
        date:"5 May",
        day:"Friday",
        time:"",
        user:""
    },
    {
        date:"6 May",
        day:"Saturday",
        time:"",
        user:""
    }],
    bookedSlots:[],
    selDate: null,
  selTime: null,
  userName: "",
};
      
export const slotSlice = createSlice({
    name:'slots',
    initialState,
    reducers:{
        bookSlot: (state, action) => {
            const {date,day,time,user} = action.payload;
            state.availableSlots = state.availableSlots.filter((slot) => (slot.date !== date) && (slot.time!==time) && (slot.day !== day));
            state.bookedSlots.push(action.payload);
          },
          selectDate: (state, action) => {
            state.selectedDate = action.payload;
          },
          selectTime: (state, action) => {
            state.selectedTime = action.payload;
          },
          enterName: (state, action) => {
            state.userName = action.payload;
          },
    }
});

// export const selectDate = (date) => ({
//     type: 'SELECT_DATE',
//     payload: date,
//   });

// export const selectTime = (time) => ({
//     type: 'SELECT_TIME',
//     payload: time,
//   });

// export const updateName = (name) => ({
//     type: 'UPDATE_NAME',
//     payload: name,
//   });


  export const { selectDate, selectTime, enterName } = slotSlice.actions;

  export default slotSlice.reducer;

