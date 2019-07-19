import {ADD_NEW_FIELD_GROUP, ADD_NEW_FORM, DELETE_FIELD_GROUP, DELETE_FORM, TOGGLE_FORM_VISIBILITY} from "./types";

export const addNewForm = () => ({
    type: ADD_NEW_FORM,
    payload: {}
});

export const toggleFormVisibility = (id) => ({
    type: TOGGLE_FORM_VISIBILITY,
    payload: { id }
});

export const deleteForm = (id) => ({
    type: DELETE_FORM,
    payload: { id }
});

export const addNewFieldGroup = (formId) => ({
    type: ADD_NEW_FIELD_GROUP,
    payload: {
        formId: formId,
        fieldGroupConfig: {
            title: 'Field group',
            showTitle: true,
            fields: []
        }
    }
});

export const deleteFieldGroup = (formId, fieldGroupId) => ({
    type: DELETE_FIELD_GROUP,
    payload: {
        formId: formId,
        fieldGroupId: fieldGroupId
    }
});