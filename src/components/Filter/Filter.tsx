import React, { Component } from 'react';
import { TEXTS } from '../../constants';
import {
    FilterContainer,
    FilterTitle,
    FilterList,
    FilterListItem,
} from './style';

interface Props {
    filterType: string;
    fetchNotes(filterType: string): Function;
    filterAction(filterType: string): Function;
};

export default class Filter extends Component<Props> {
    handleChangeFilter = (evt: { target: { value: string; }; }) => {
        const { value } = evt.target;
        const { filterAction, fetchNotes } = this.props;

        filterAction(value);
        fetchNotes(value);
    }

    render() {
        const { filterType } = this.props;

        return (
            <FilterContainer>
                <FilterTitle>{TEXTS.FILTER.TITLE}</FilterTitle>
                <FilterList
                    onChange={this.handleChangeFilter}
                    value={filterType}
                >
                    <FilterListItem value={TEXTS.FILTER.NAME.VALUE}>{TEXTS.FILTER.NAME.TEXT}</FilterListItem>
                    <FilterListItem value={TEXTS.FILTER.DATE_CREATED.VALUE}>{TEXTS.FILTER.DATE_CREATED.TEXT}</FilterListItem>
                    <FilterListItem value={TEXTS.FILTER.DATE_MODIFIED.VALUE}>{TEXTS.FILTER.DATE_MODIFIED.TEXT}</FilterListItem>
                </FilterList>
            </FilterContainer>
        )
    }
};
