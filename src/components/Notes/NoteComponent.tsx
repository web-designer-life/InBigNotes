import * as React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Note, Header, Title, Text } from './style';

interface Note {
    id: number, 
    title: string, 
    text: string,
    created_at: string,
    updated_at: string
};

interface Props {
    note: Note
};

type State = {
    checked: boolean;
};

export default class NoteComponent extends React.Component<Props, State> {
    state = { 
        checked: false 
    };

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