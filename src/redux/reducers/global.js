import {
    TOGGLE_FORM_VISIBILITY,
    ADD_NEW_FIELD,
    DELETE_FIELD,
    ADD_NEW_FIELD_GROUP,
    DELETE_FIELD_GROUP,
    ADD_NEW_FORM, DELETE_FORM, EDIT_FIELD
} from "../actionTypes";

const initialState = {
    appTitle: 'My Dynamic form application',
    forms: [{
        'id': 1,
        name: 'Annual personal review form',
        'collapsed': false,
        fieldsets: [{
            id: 8,
            title: 'My first fieldset',
            description: 'some description for this fieldset',
            showTitle: true,
            showNewFieldWindow: false,
            fields: [{
                'id': 1,
                'type': 'string',
                'label': 'First name',
                'description': 'Enter your first name here',
                'placeholder': 'John'
            }, {
                'id': 2,
                'type': 'string',
                'label': 'Last name',
                'value': 'Last name'
            }, {
                'id': 3,
                'type': 'select',
                'label': 'Option from the list',
                'value': 1,
                'options': [{
                    'id': 1,
                    'text': 'Option 1'
                }, {
                    'id': 2,
                    'text': 'Option 2'
                }, {
                    'id': 3,
                    'text': 'Option 3'
                }]
            }],
        }] ,
        'actions': [{
            'submit': {
                'id': 1,
                'label': 'Save',
                //'method': 'POST',
                //'route': '/api/v1/qa/form_templates/add/' . {id}
            }
        }]
    }, {
        'id': 2,
        'name': 'Senior doctor feedback',
        'collapsed': true,
        fieldsets: [{
            id: 9,
            title: 'Introduction details',
            description: '',
            showTitle: false,
            showNewFieldWindow: false,
            fields: [{
                'id': 2,
                'type': 'string',
                'label': 'Last name',
                'value': 'Last name'
            }]
        }]
    }, {
        'id': 3,
        'name': 'New employee questionnaire template',
        'collapsed': true,
        fieldsets: [{
            id: 10,
            title: 'Personal data',
            description: 'Personal employee data',
            showTitle: true,
            showNewFieldWindow: false,
            fields: [{
                'id': 1,
                'type': 'string',
                'label': 'First name',
                'value': 'John'
            }, {
                'id': 2,
                'type': 'string',
                'label': 'Last name',
                'value': 'Last name'
            }]
        }],
        actions: [{
            'submit': {
                'id': 1,
                'label': 'Save',
                //'method': 'POST',
                //'route': '/api/v1/qa/form_templates/add/' . {id}
            }
        }]
    }],

    byIds: {
        1: {
            id: 1,
            name: 'Annual personal review form',
            collapsed: false,
            fieldsets: {
                8: {
                    id: 8,
                    title: 'Personal details',
                    description: 'some description for this fieldset',
                    showTitle: true,
                    showNewFieldWindow: false,
                    fields: [{
                        id: 1,
                        type: 'string',
                        label: 'First name',
                        description: 'Enter your first name',
                        placeholder: 'John'
                    }, {
                        id: 2,
                        type: 'string',
                        label: 'Last name',
                        placeholder: 'Doe',
                        description: 'What is your last name?'
                    }]
                },
                9: {
                    id: 9,
                    title: 'Competence score',
                    showTitle: false,
                    showNewFieldWindow: false,
                    fields: [{
                        id: 3,
                        type: 'select',
                        label: 'Personal review 2019',
                        description: 'Overall average score in Personal Review ',
                        value: 1,
                        options: [{
                            'id': 1,
                            'text': 'Option 1'
                        }, {
                            'id': 2,
                            'text': 'Option 2'
                        }, {
                            'id': 3,
                            'text': 'Option 3'
                        }]
                    }, {
                        id: 4,
                        type: 'checkbox',
                        label: 'Has completed all tasks?',
                        description: 'Whether employee has finished all assignments',
                        value: 1
                    }]
                },
                10: {
                    id: 10,
                    title: 'Signature',
                    showTitle: true,
                    showNewFieldWindow: false,
                    fields: [{
                        id: 3,
                        type: 'string',
                        label: 'Employee',
                        description: '',
                        value: 1
                    }]
                }
            },
            'actions': [{
                'submit': {
                    'id': 1,
                    'label': 'Save',
                    //'method': 'POST',
                    //'route': '/api/v1/qa/form_templates/add/' . {id}
                }
            }]
        },
        2: {
            'id': 2,
            'name': 'Example qa form',
            'collapsed': true,
            fieldsets: {
                11: {
                    id: 11,
                    title: 'Introduction details',
                    description: '',
                    showTitle: false,
                    showNewFieldWindow: false,
                    fields: [{
                        'id': 2,
                        'type': 'string',
                        'label': 'Last name',
                        'value': 'Last name'
                    }]
                }
            },
        },
        3: {
            'id': 3,
            'name': 'New employee questionnaire template',
            'collapsed': true,
            fieldsets: {
                12: {
                    id: 12,
                    title: 'Personal data',
                    description: 'Personal employee data',
                    showTitle: true,
                    showNewFieldWindow: false,
                    'fields': [{
                        'id': 1,
                        'type': 'string',
                        'label': 'First name',
                        'value': 'John' // TODO placeholder, not value
                    }, {
                        'id': 2,
                        'type': 'string',
                        'label': 'Last name',
                        'value': 'Last name'
                    }]
                }
            },
            'actions': [{
                'submit': {
                    'id': 1,
                    'label': 'Save',
                    //'method': 'POST',
                    //'route': '/api/v1/qa/form_templates/add/' . {id}
                }
            }]
        },
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FORM_VISIBILITY: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [action.payload.id]: {
                        ...state.byIds[id],
                        collapsed: !state.byIds[id].collapsed
                    }
                }
            }
        }
        case DELETE_FORM: {
            const { id } = action.payload;
            return {
                ...state,
                forms: state.forms
                    .filter(formConfig => formConfig.id != id),
                byIds: Object.keys(state.byIds)
                        .filter(formId => formId != id)
                        .reduce((obj, key) => {
                            obj[key] = state.byIds[key];
                            return obj;
                        }, {})
                }
            }
        case ADD_NEW_FIELD: {
            console.log(state);
            const { formId, fieldGroupId, fieldConfig } = action.payload;
            const newFieldId = (state.byIds[formId].fieldsets[fieldGroupId].fields.length) + 1;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [formId]: {
                        ...state.byIds[formId],
                        fieldsets: {
                            ...state.byIds[formId].fieldsets,
                            [fieldGroupId]: {
                                ...state.byIds[formId].fieldsets[fieldGroupId],
                                showNewFieldWindow: false,
                                fields: [
                                    {...fieldConfig, id: newFieldId }, ...state.byIds[formId].fieldsets[fieldGroupId].fields
                                ]
                            }
                        }
                    }
                }
            }
        }
        case EDIT_FIELD: {
            const { formId, fieldGroupId, fieldConfig } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [formId]: {
                        ...state.byIds[formId],
                        fieldsets: {
                            ...state.byIds[formId].fieldsets,
                            [fieldGroupId]: {
                                ...state.byIds[formId].fieldsets[fieldGroupId],
                                showNewFieldWindow: false,
                                fields: state.byIds[formId].fieldsets[fieldGroupId].fields // TODO
                            }
                        }
                    }
                }
            }
        }
        case ADD_NEW_FIELD_GROUP: {
            const { formId, fieldGroupConfig } = action.payload;
            const newFieldGroupId = Object.keys(state.byIds[formId].fieldsets).length + 1;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [formId]: {
                        ...state.byIds[formId],
                        fieldsets: {
                            ...state.byIds[formId].fieldsets,
                            [newFieldGroupId]: { ...fieldGroupConfig, id: newFieldGroupId }
                        }
                    }
                }
            }
        }
        case DELETE_FIELD: {
            const { formId, fieldGroupId, fieldId} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [formId]: {
                        ...state.byIds[formId],
                        fieldsets: {
                            ...state.byIds[formId].fieldsets,
                            [fieldGroupId]: {
                                ...state.byIds[formId].fieldsets[fieldGroupId],
                                fields: state.byIds[formId].fieldsets[fieldGroupId].fields
                                    .filter(fieldConfig => fieldConfig.id != fieldId)
                            }
                        }
                    }
                }
            }
        }
        case DELETE_FIELD_GROUP: {
            const { formId, fieldGroupId } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [formId]: {
                        ...state.byIds[formId],
                        fieldsets:
                            Object.keys(state.byIds[formId].fieldsets)
                            .filter(key => key != fieldGroupId)
                            .reduce((obj, key) => {
                                obj[key] = state.byIds[formId].fieldsets[key];
                                return obj;
                            }, {})
                        }
                    }
                }
        }
        case ADD_NEW_FORM: {
            const newFormId = Object.keys(state.byIds).length + 1;
            let newFormConfig = {
                id: newFormId,
                name: 'NEW FORM, JUST CREATED...',
                collapsed: true,
                fieldsets: []
            };
            return {
                forms: [
                    newFormConfig, ...state.forms
                ],
                byIds: {
                    ...state.byIds,
                    [newFormId]: newFormConfig
                }
            }
        }
        default:
            return state;
    }
}
