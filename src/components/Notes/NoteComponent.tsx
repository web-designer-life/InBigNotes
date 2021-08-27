import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Note, Header, Title, Text } from './style';
import { Note as INote } from '../../interfaces';

interface Props {
    note: INote,
};

export default class NoteComponent extends React.Component<Props> {
    state = { 
        checked: false, 
    }

    render() {
        const { title, text } = this.props.note;

        return (
            <Note>
                <Header>
                    <Title>{title}</Title>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={(evt) => {
                            this.setState({
                                checked: evt.target.checked
                            })
                        }}
                    />
                </Header>
                <Text>{text}</Text>
            </Note>
        )
    }
};