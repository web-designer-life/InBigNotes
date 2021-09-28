import React, { Component } from 'react';
import { TEXTS } from '../../constants';
import {
    FilterContainer,
    FilterTitle,
    FilterList,
    FilterListItem,
} from './style';

interface Props {
    filter: string,
    fetchNotes(filter: string): Function,
    filterAction(filter: string): Function,
};

interface State {
    filter: string,
};

export default class Filter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            filter: this.props.filter,
        };

        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    };

    handleChangeFilter(evt: { target: { value: string; }; }) {
        const { value } = evt.target;

        this.props.filterAction(value);
        this.props.fetchNotes(value);
    };
      
    render() {
        return (
            <FilterContainer>
                <FilterTitle>{TEXTS.FILTER.TITLE}</FilterTitle>
                <FilterList
                    onChange={this.handleChangeFilter}
                    value={this.props.filter}
                >                 
                    <FilterListItem value={TEXTS.FILTER.NAME.VALUE}>{TEXTS.FILTER.NAME.TEXT}</FilterListItem>
                    <FilterListItem value={TEXTS.FILTER.DATE_CREATED.VALUE}>{TEXTS.FILTER.DATE_CREATED.TEXT}</FilterListItem>
                    <FilterListItem value={TEXTS.FILTER.DATE_MODIFIED.VALUE}>{TEXTS.FILTER.DATE_MODIFIED.TEXT}</FilterListItem>
                </FilterList>
            </FilterContainer>
        )
    }
};
