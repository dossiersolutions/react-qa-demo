import {
    TOGGLE_FORM_VISIBILITY,
    ADD_NEW_FIELD,
    DELETE_FIELD,
    ADD_NEW_FIELD_GROUP,
    DELETE_FIELD_GROUP,
    ADD_NEW_FORM, DELETE_FORM, EDIT_FIELD
} from "../actions/types";
import { initialState } from "../initialState";
import {fromJS, Map} from "immutable";

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
            let im_state = fromJS(state);
            let im_forms = im_state.get('byIds');
            let idx_form = im_state.get('byIds').findIndex(function(formConfig) {
                return formConfig.get('id') === formId;
            });
            let im_form = im_forms.get(idx_form);
            let im_fieldsets = im_form.get('fieldsets');
            let idx_fieldset = im_fieldsets.findIndex(fieldGroupConfig => {
                return fieldGroupConfig.get('id') === fieldGroupId;
            });
            let im_fields = im_fieldsets.get(idx_fieldset).get('fields');
            const newFieldId = getNextId(im_fields.toJS());
            const im_new_field = Map({
                ...fieldConfig.toJS(),
                id: newFieldId
            });
            return fromJS(state)
                .updateIn(
                    ['byIds', idx_form, 'fieldsets', idx_fieldset, 'fields'],
                    list => list.push(im_new_field)
                ).toJS();
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
