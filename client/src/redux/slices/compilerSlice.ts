import { PayloadAction } from "@reduxjs/toolkit/react";
import { createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
    currentCode: string;
}

const initialState: compilerSliceStateType = {
    fullCode: {
        html: `<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To-Do List</title>
            <link rel="stylesheet" href="styles.css">
    </head>
    <body>
            <div class="container">
                <h1>To-Do List</h1>
                <input type="text" id="taskInput" placeholder="Enter a new task">
                <button id="addBtn">Add Task</button>
                <ul id="taskList"></ul>
            </div>
        <script src="script.js"></script>
    </body>
</html>
    `,
        css: `body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            text-align: center;
            color: #333;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        button {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        ul {
            list-style-type: none;
            padding: 0;
        }
        
        li {
            padding: 10px;
            margin-bottom: 5px;
            background-color: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        
        li:hover {
            background-color: #f0f0f0;
        }
        `,
        javascript: `document.addEventListener("DOMContentLoaded", function() {
            const taskInput = document.getElementById("taskInput");
            const addBtn = document.getElementById("addBtn");
            const taskList = document.getElementById("taskList");
        
            addBtn.addEventListener("click", function() {
                const taskText = taskInput.value.trim();
                if (taskText !== "") {
                    const li = document.createElement("li");
                    li.textContent = taskText;
                    taskList.appendChild(li);
                    taskInput.value = "";
                }
            });
        
            taskList.addEventListener("click", function(event) {
                if (event.target.tagName === "LI") {
                    event.target.classList.toggle("completed");
                }
            });
        });
        `,
    },
    currentLanguage: "html",
    currentCode: "",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<compilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload;
        },
    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;