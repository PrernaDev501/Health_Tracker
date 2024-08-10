export const workoutOptions = [
  { value: 'Yoga', viewValue: 'Yoga' },
  { value: 'Cycling', viewValue: 'Cycling' },
  { value: 'Swimming', viewValue: 'Swimming' },
  { value: 'Running', viewValue: 'Running' },
  { value: 'Weightlifting', viewValue: 'Weightlifting' },
  { value: 'Pilates' , viewValue : 'Pilates'},
  { value: 'Aerobic' , viewValue : 'Aerobics'},
  { value: 'Abs' , viewValue : 'Abs Workout'},

  
];

export interface Workout {
  type: string | null;
  minutes: number;
}
