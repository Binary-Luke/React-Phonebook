// Store is the redux version of state solves a huge problem for us

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice';

import React from 'react'

export const store= configureStore({
    reducer,
    devTools:true
})