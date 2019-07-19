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

function getFormIndex(im_state, formId) {
    return im_state.get('byIds').findIndex(function(formConfig) {
        return formConfig.get('id') === formId;
    });
}

function getFieldsetIndex(im_state, formId, fieldGroupId) {
    let im_form = im_state.get('byIds').get(getFormIndex(im_state, formId));
    let im_fieldsets = im_form.get('fieldsets');
    return im_fieldsets.findIndex(fieldGroupConfig => {
        return fieldGroupConfig.get('id') === fieldGroupId;
    });
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
            let idx_form = getFormIndex(im_state, formId);
            let idx_fieldset = getFieldsetIndex(im_state, formId, fieldGroupId);
            let newFieldId = getNextId(
                im_state.getIn(['byIds', idx_form, 'fieldsets', idx_fieldset, 'fields']).toJS()
            );
            let im_new_field = Map({ ...fieldConfig.toJS(), id: newFieldId });
            return fromJS(state)
                .updateIn(
                    ['byIds', idx_form, 'fieldsets', idx_fieldset, 'fields'],
                    list => list.push(im_new_field)
                ).toJS();
        }
        case EDIT_FIELD: {
            const { formId, fieldGroupId, fieldConfig } = action.payload;
            let im_state = fromJS(state);
            let idx_form = getFormIndex(im_state, formId);
            let idx_fieldset = getFieldsetIndex(im_state, formId, fieldGroupId);
            let idx_field = im_state.getIn(['byIds', idx_form, 'fieldsets', idx_fieldset, 'fields'])
                .findIndex(config => fieldConfig.get('id') === config.get('id'));
            return fromJS(state)
                .setIn(
                    ['byIds', idx_form, 'fieldsets', idx_fieldset, 'fields', idx_field],
                    fieldConfig
                ).toJS();
        }
        case ADD_NEW_FIELD_GROUP: {
            const { formId, fieldGroupConfig } = action.payload;
            let im_state = fromJS(state);
            let idx_form = getFormIndex(im_state, formId);
            let newFieldGroupId = getNextId(im_state.getIn(['byIds', idx_form, 'fieldsets']).toJS());
            return im_state.updateIn(
                ['byIds', idx_form, 'fieldsets'],
                    list => list.push(Map({
                        ...fieldGroupConfig,
                        title: fieldGroupConfig.title + ' ' + newFieldGroupId,
                        id: newFieldGroupId
                    }))).toJS();
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
            let im_state = fromJS(state);
            let idx_form = getFormIndex(im_state, formId);
            return im_state.updateIn(['byIds', idx_form, 'fieldsets'],
                    list => list.filter(config => config.get('id') !== fieldGroupId)
            ).toJS();
        }
        case ADD_NEW_FORM: {
            let im_state = fromJS(state);
            const newFormId = getNextId(state.byIds);
            let newFormConfig = Map({
                id: newFormId,
                name: 'Form ' + newFormId,
                collapsed: true,
                fieldsets: []
            });
            return im_state.update('byIds', list => list.push(newFormConfig)).toJS()
        }
        default:
            return state;
    }
}
