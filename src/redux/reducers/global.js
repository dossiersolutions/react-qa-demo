import { ADD_TODO, TOGGLE_TODO, TOGGLE_FORM_VISIBILITY } from "../actionTypes";

const initialState = {
    appTitle: 'My Dynamic form application',
    forms: [{
        'id': 1,
        'name': 'Annual personal review form',
        'collapsed': false,
        fieldsets: [{
            id: 1,
            title: 'My first fieldset',
            description: 'some description for this fieldset',
            showTitle: true,
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
            id: 1,
            title: 'Introduction details',
            description: '',
            showTitle: false,
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
            id: 1,
            title: 'Personal data',
            description: 'Personal employee data',
            showTitle: true,
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
            'id': 1,
            'name': 'My first form',
            'collapsed': false,
            fieldsets: [{
                id: 1,
                title: 'Personal details',
                description: 'some description for this fieldset',
                showTitle: true,
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
            }, {
                id: 2,
                title: 'Competence score',
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
            }, {
                id: 3,
                title: 'Signature',
                fields: [{
                    id: 3,
                    type: 'string',
                    label: 'Employee',
                    description: '',
                    value: 1
                }]
            }],
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
            fieldsets: [{
                id: 1,
                title: 'Introduction details',
                description: '',
                showTitle: false,
                'fields': [{
                    'id': 2,
                    'type': 'string',
                    'label': 'Last name',
                    'value': 'Last name'
                }]
            }],
        },
        3: {
            'id': 3,
            'name': 'New employee questionnaire template',
            'collapsed': true,
            fieldsets: [{
                id: 1,
                title: 'Personal data',
                description: 'Personal employee data',
                showTitle: true,
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
            }],
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
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        case TOGGLE_FORM_VISIBILITY: {
            console.log(action);
            const { id } = action.payload.id;
            console.log(id);
            console.log(action.payload.id);
            console.log(state);
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [action.payload.id]: {
                        ...state.byIds[action.payload.id],
                        collapsed: !state.byIds[action.payload.id].collapsed
                    }
                }
            }
        }
        default:
            return state;
    }
}
