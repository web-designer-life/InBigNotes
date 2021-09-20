export enum ROUTES {
	HOME = '/',
    NOTE = '/note',
	NOTE_CREATE = '/note/create',
};

export enum BUTTON_TYPES {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
};

export enum BUTTON_COLORS {
    GREEN = 'green',
    RED = 'red',
};

export enum BUTTON_TEXTS {
    CREATE = 'Create',
    DELETE = 'Delete',
    BACK = 'Back',
    SAVE = 'Save',
    UPDATE = 'Update',
    CANCEL = 'Cancel',
    CONFIRM = 'Confirm',
};

export enum MODAL_TEXTS {
    DELETE = 'Do you want to delete selected notes?',
    BACK = 'You have changes in your note. Do you want to exit to the main menu without saving?',
    SAVE = 'Do you want to save your note?',
    UPDATE = 'Do you want to update your note?',
    CANCEL = 'You have changes in your note. Do you want to cancel the changes?',
};

export const SOURCE = {
    ROUTES: {
        HOME: '/',
        NOTE: '/note',
        NOTE_CREATE: '/note/create',
    },
    BUTTONS: {
        TYPES: {
            BUTTON: 'button',
            SUBMIT: 'submit',
            RESET: 'reset',
        },
        COLORS: {
            GREEN: 'green',
            RED: 'red',
        },
        TEXTS: {
            CREATE: 'Create',
            DELETE: 'Delete',
            BACK: 'Back',
            SAVE: 'Save',
            UPDATE: 'Update',
            CANCEL: 'Cancel',
            CONFIRM: 'Confirm',
        },
    },
    MODAL: {
        TEXTS: {
            DELETE: 'Do you want to delete selected notes?',
            BACK: 'You have changes in your note. Do you want to exit to the main menu without saving?',
            SAVE: 'Do you want to save your note?',
            UPDATE: 'Do you want to update your note?',
            CANCEL: 'You have changes in your note. Do you want to cancel the changes?',
        },
    },
}
