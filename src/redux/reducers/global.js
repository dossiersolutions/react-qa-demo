import {
    TOGGLE_FORM_VISIBILITY,
    ADD_NEW_FIELD,
    DELETE_FIELD,
    ADD_NEW_FIELD_GROUP,
    DELETE_FIELD_GROUP,
    ADD_NEW_FORM, DELETE_FORM, EDIT_FIELD
} from "../actions/types";
import { initialState } from "../initialState";

/**
 * Calculate next id value for array of objects with id property
 * @param objArray
 * @returns {number}
 */
function getNextId(objArray) {
    return (objArray.length ? Math.max( ...objArray.map((obj) => {
        return obj.id
    })) : 0) + 1;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FORM_VISIBILITY: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: state.byIds.map((formConfig) => {
                    if (formConfig.id === id) {
                        formConfig.collapsed = !formConfig.collapsed
                    }
                    return formConfig;
                })
            }
        }
        case DELETE_FORM: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: state.byIds
                    .filter(formConfig => {
                        return formConfig.id !== id;
                    })

            }
        }
        case ADD_NEW_FIELD: {
            const { formId, fieldGroupId, fieldConfig } = action.payload;
            return {
                ...state,
                byIds: state.byIds.map(formConfig => {
                    if (formConfig.id === formId) {
                        formConfig.fieldsets.map(fieldGroupConfig => {
                            if (fieldGroupConfig.id === fieldGroupId) {
                                const newFieldId = getNextId(fieldGroupConfig.fields);
                                fieldGroupConfig.fields = [
                                    { ...fieldConfig.toJS(), id: newFieldId }, ...fieldGroupConfig.fields
                                ]
                            }
                            return fieldGroupConfig;
                        })
                    }
                    return formConfig;
                })
            }
        }
        case EDIT_FIELD: {
            const { formId, fieldGroupId, fieldConfig } = action.payload;
            return {
                ...state,
                byIds: state.byIds.map(formConfig => {
                    if (formConfig.id === formId) {
                        formConfig.fieldsets = formConfig.fieldsets.map(fieldGroupConfig => {
                            if (fieldGroupConfig.id === fieldGroupId) {
                                fieldGroupConfig.fields = fieldGroupConfig.fields.map(oldFieldConfig => {
                                    if (oldFieldConfig.id === fieldConfig.get('id')) {
                                        oldFieldConfig = fieldConfig.toJS();
                                        console.log(oldFieldConfig);
                                    }
                                    return oldFieldConfig;
                                })
                            }
                            return fieldGroupConfig;
                        })
                    }
                    return formConfig;
                })
            };
        }
        case ADD_NEW_FIELD_GROUP: {
            const { formId, fieldGroupConfig } = action.payload;
            return {
                ...state,
                byIds: state.byIds.map((formConfig) => {
                        if (formConfig.id === formId) {
                            const newFieldGroupId = getNextId(formConfig.fieldsets);
                            formConfig.fieldsets = [
                                {...fieldGroupConfig, id: newFieldGroupId},
                                ...formConfig.fieldsets]
                        }
                        return formConfig;
                    })
            }
        }
        case DELETE_FIELD: {
            const { formId, fieldGroupId, fieldId} = action.payload;
            return {
                ...state,
                byIds: [
                    ...state.byIds.map((formConfig) => {
                        if (formConfig.id === formId) {
                            formConfig.fieldsets = formConfig.fieldsets.map((fieldGroupConfig) =>  {
                                if (fieldGroupConfig.id === fieldGroupId) {
                                    fieldGroupConfig.fields
                                        = fieldGroupConfig.fields.filter((fieldConfig) => {
                                        return fieldConfig.id !== fieldId;
                                    })
                                }
                                return fieldGroupConfig;
                            })
                        }
                        return formConfig;
                    })
                ]
            }
        }
        case DELETE_FIELD_GROUP: {
            const { formId, fieldGroupId } = action.payload;
            return {
                ...state,
                byIds: [
                    ...state.byIds.map((formConfig) => {
                        if (formConfig.id === formId) {
                            formConfig.fieldsets = formConfig.fieldsets.filter((fieldGroupConfig) => {
                                return fieldGroupConfig.id !== fieldGroupId;
                            })
                        }
                        return formConfig;
                    })
                ]
            }
        }
        case ADD_NEW_FORM: {
            const newFormId = getNextId(state.byIds);
            let newFormConfig = {
                id: newFormId,
                name: 'NEW FORM, JUST CREATED...',
                collapsed: true,
                fieldsets: []
            };
            return {
                byIds: [ newFormConfig, ...state.byIds ]
            }
        }
        default:
            return state;
    }
}
