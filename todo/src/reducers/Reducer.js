import React from "react";

export const initialState = [
    {
        item: "mow lawn",
        completed: false,
        id: 1066
    },
    {
        item: "bake bread",
        completed: false,
        id: 1920
    },
    {
        item: "weed garden",
        completed: false,
        id: 1492
    }
];

export const Reducer = (state, action) => {
    switch(action.type) {
        default:
        return state;
    }
};  