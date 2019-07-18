export const initialState = {
    appTitle: 'My Dynamic form application',

    byIds: [
        {
            id: 1,
            name: 'Annual personal review form',
            collapsed: false,
            fieldsets: [
                {
                    id: 8,
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
                },
                {
                    id: 9,
                    title: 'Competence score',
                    showTitle: false,
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
                {
                    id: 10,
                    title: 'Signature',
                    showTitle: true,
                    fields: [{
                        id: 3,
                        type: 'string',
                        label: 'Employee',
                        description: '',
                        value: 1
                    }]
                }
            ],
            'actions': [{
                'submit': {
                    'id': 1,
                    'label': 'Save',
                    //'method': 'POST',
                    //'route': '/api/v1/qa/form_templates/add/' . {id}
                }
            }]
        },
        {
            'id': 2,
            'name': 'Example qa form',
            'collapsed': true,
            fieldsets: [
                {
                    id: 11,
                    title: 'Introduction details',
                    description: '',
                    showTitle: false,
                    fields: [{
                        'id': 2,
                        'type': 'string',
                        'label': 'Last name',
                        'value': 'Last name'
                    }]
                }
            ],
        },
        {
            'id': 3,
            'name': 'New employee questionnaire template',
            'collapsed': true,
            fieldsets: [
                {
                    id: 12,
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
                }
            ],
            'actions': [{
                'submit': {
                    'id': 1,
                    'label': 'Save',
                    //'method': 'POST',
                    //'route': '/api/v1/qa/form_templates/add/' . {id}
                }
            }]
        },
    ]
};