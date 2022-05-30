import {
    formatValueByFilterType,
    sortByFilterType,
    formatDate,
} from '..';
import { TEXTS } from '../../constants';

const NOTE = {
    id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
    title: 'Army',
    text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
    created_at: 1632734670806,
    updated_at: 1632735522467,
};
const NOTES = [
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e1',
        title: 'Hot',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757655,
        updated_at: 1632734757655,
    },
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba4',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632735522467,
        updated_at: 1632734670806,
    },
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e2',
        title: 'Hobby',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757657,
        updated_at: 1632734757657,
    },
];
const SORTED_NOTES = [
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba3',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632734670806,
        updated_at: 1632735522467,
    },
    {
        id: 'b83cbac2-d74e-458d-85c0-75bdf9c29ba4',
        title: 'Army',
        text: 'An army, ground force, or land force is a fighting force that fights primarily on land.',
        created_at: 1632735522467,
        updated_at: 1632734670806,
    },
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e2',
        title: 'Hobby',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757657,
        updated_at: 1632734757657,
    },
    {
        id: 'd012a6d2-0d4d-445d-a661-1a2ef4d499e1',
        title: 'Hot',
        text: 'Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.',
        created_at: 1632734757655,
        updated_at: 1632734757655,
    },
];

describe('Utils', () => {
    describe('formatValueByFilterType', () => {
        it('string value', () => {
            const completeValue = formatValueByFilterType(NOTE, TEXTS.FILTER.NAME.VALUE);

            expect(completeValue).toEqual(NOTE.title.toLowerCase());
        });

        it('number value', () => {
            const completeValue = formatValueByFilterType(NOTE, TEXTS.FILTER.DATE_CREATED.VALUE);

            expect(completeValue).toEqual(NOTE.created_at);
        });
    });

    describe('sortByFilterType', () => {
        it('sorted notes equal SORTED_NOTES', () => {
            const cloneNotes = NOTES.slice();
            const completeValue = sortByFilterType(cloneNotes, TEXTS.FILTER.NAME.VALUE);

            expect(JSON.stringify(completeValue)).toEqual(JSON.stringify(SORTED_NOTES));
        });
    });

    describe('formatDate', () => {
        it('Date', () => {
            const completeValue = formatDate(new Date(NOTE.created_at));

            expect(completeValue).toEqual('27.09.2021 12:24:30');
        });
    });
});
