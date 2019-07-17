import {List, Map} from "immutable";

export const CONSTANTS = {

    NEW_FIELD_CONFIG: Map({
        label: '',
        placeholder: '',
        description: '',
        type: "string"
    }),

    FIELD_TYPE_OPTIONS: List([
        {label: "String", value: "string"},
        {label: "Checkbox", value: "checkbox"},
        {label: "Select", value: "select"}
    ])
};