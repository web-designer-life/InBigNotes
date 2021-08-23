import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Note, Header, Title, Text } from './style';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
}

interface Props {
    note: Note
}

type State = {
    checked: boolean;
};

export default class NoteComponent extends React.Component<Props, State> {
    state = { 
        checked: false 
    };

    render() {
        return (
            <Note>
                <Header>
                    <Title>{this.props.note.title}</Title>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={(evt) => {
                            this.setState({
                                checked: evt.target.checked
                            })
                        }}
                    />
                </Header>
                <Text>{this.props.note.text}</Text>
            </Note>
        )
    }
};