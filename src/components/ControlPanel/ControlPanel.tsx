import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Wrapper, SelectAllWrapper, Title } from './style';

export default class ControlPanel extends React.Component {
    state = { 
        checked: false,
    }

    render() {
        return (
            <Wrapper>
                <p>Sort By</p>
                <SelectAllWrapper>
                    <Title>Select all</Title>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={(evt) => {
                            this.setState({
                                checked: evt.target.checked,
                            });
                        }}
                    />
                </SelectAllWrapper>
            </Wrapper>
        )
    }
};