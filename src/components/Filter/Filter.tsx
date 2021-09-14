import React from 'react';
import {
    FilterContainer,
    FilterTitle,
    FilterList,
    FilterListItem,
} from './style';

interface Props {

}

interface State {
    filter: string,
};

export default class Filter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            filter: 'title',
        };

        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    };

    handleChangeFilter(evt: { target: { name: string; value: string; }; }) {
        const { name, value } = evt.target;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    };
      
    render() {
        return (
            <FilterContainer>
                <FilterTitle>Sort by:</FilterTitle>
                <FilterList
                    name="filter"
                    onChange={this.handleChangeFilter}
                    value={this.state.filter}
                >                 
                    <FilterListItem value="title">Name</FilterListItem>
                    <FilterListItem value="created_at">Date Created</FilterListItem>
                    <FilterListItem value="updated_at">Date Modified</FilterListItem>
                </FilterList>
            </FilterContainer>
        )
    }
};
