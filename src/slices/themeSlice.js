import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light'

const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            setTheme: (state, action) => {
                console.log("Slice : ", state);
                return (
                    state = action.payload
                )
            }
        }
    }
)
export const { setTheme } = themeSlice.actions
export default themeSlice.reducer