export const initialState = {
    appTitle: 'My Dynamic form application',

    byIds: [
        {
            id: 1,
            name: 'Example Annual personal review form',
            collapsed: false,
            fieldsets: [
                {
                    id: 8,
                    title: 'Personal details',
                    description: 'some description for this fieldset',
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
                    fields: [{
                        id: 3,
                        type: 'string',
                        label: 'Employee',
                        description: '',
                        value: 1
                    }]
                }
            ]
        }
    ]
};