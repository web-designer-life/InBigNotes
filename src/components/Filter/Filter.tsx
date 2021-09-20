import React from 'react';
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

export default class Filter extends React.Component<Props, State> {
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
        this.props.fetchNotes(this.props.filter);
    };
      
    render() {
        return (
            <FilterContainer>
                <FilterTitle>Sort by:</FilterTitle>
                <FilterList
                    name="filter"
                    onChange={this.handleChangeFilter}
                    value={this.props.filter}
                >                 
                    <FilterListItem value="title">Name</FilterListItem>
                    <FilterListItem value="created_at">Date Created</FilterListItem>
                    <FilterListItem value="updated_at">Date Modified</FilterListItem>
                </FilterList>
            </FilterContainer>
        )
    }
};
