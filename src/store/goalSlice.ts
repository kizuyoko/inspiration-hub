import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { goals } from '../dummy-data/goals';

interface GoalType {
  id: string;
  text: string
  status: 'incomplete' | 'complete';
}

interface GoalsState {
  goals: GoalType[];
}

const initialState: GoalsState = {
  goals,
};

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<GoalType>) => {
      state.goals.push(action.payload);
    },
    removeGoal: (state, action: PayloadAction<string>) => {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
    toggleGoalCompletion: (state, action: PayloadAction<string>) => {
      const goal = state.goals.find(goal => goal.id === action.payload);
      if (goal) {
        goal.status = goal.status === 'incomplete' ? 'complete' : 'incomplete';
      }
    },
    updateGoal: (state, action: PayloadAction<GoalType>) => {
      const index = state.goals.findIndex(goal => goal.id === action.payload.id);
      if (index !== -1) {
        state.goals[index] = action.payload;
      }
    },
  },
});

export const { addGoal, removeGoal, toggleGoalCompletion, updateGoal } = goalSlice.actions;

export default goalSlice.reducer;