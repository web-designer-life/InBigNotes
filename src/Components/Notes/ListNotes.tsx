import * as React from 'react';
import Checkbox from 'react-custom-checkbox';
import { List, Note, Header, Title, Text } from './style';

interface Props {
    notes: any
}

export const ListNotes: React.FC<Props> = ({ notes }) => (
    <List>
        {notes.map((note: any) =>(
            <Note
                key={note.id}
            >
                <Header>
                    <Title>{note.title}</Title>
                    <Checkbox
                        checked={false}
                        icon={<img src={require("../../../public/assets/icons/arrow.png")} style={{ width: 54 }} />}
                        borderColor="#0047FF"
                        borderWidth={5}
                        borderRadius={20}
                        size={80}
                        style={{ cursor: "pointer" }}
                    />
                </Header>
                <Text>{note.text}</Text>
            </Note>
        ))}
    </List>
);