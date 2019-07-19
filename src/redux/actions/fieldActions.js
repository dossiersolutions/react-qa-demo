import {ADD_NEW_FIELD, DELETE_FIELD, EDIT_FIELD} from "./types";

export const addNewField = (formId, fieldGroupId, fieldConfig) => ({
    type: ADD_NEW_FIELD,
    payload: {
        formId: formId,
        fieldGroupId: fieldGroupId,
        fieldConfig: fieldConfig
    }
});

export const editField = (formId, fieldGroupId, fieldConfig) => ({
    type: EDIT_FIELD,
    payload: {
        formId: formId,
        fieldGroupId: fieldGroupId,
        fieldConfig: fieldConfig
    }
});

export const deleteField = (formId, fieldGroupId, fieldId) => ({
    type: DELETE_FIELD,
    payload: {
        formId: formId,
        fieldGroupId: fieldGroupId,
        fieldId: fieldId
    }
});